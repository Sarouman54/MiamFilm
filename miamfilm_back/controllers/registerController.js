var bcrypt    = require('bcrypt')
var jwt       = require('jsonwebtoken')
var waterfall = require ('async-waterfall')
var db        = require('../models/indexModel')
var sequelize = require('sequelize')

const EMAIL_REGEX = /^[\w\W][^()<>@,;:"?|ç%&]+@[a-zA-Z]+\.[a-z]{2,3}$/
const USERNAME_REGEX = /^[\w\-_]+$/

exports.signUp = async (req, res) => {
  const last_name    = req.body.last_name
  const first_name    = req.body.first_name 
  const username    = req.body.username
  const email   = req.body.email
  const password    = req.body.password
  const id_role  = req.body.id_role

  if( !last_name || !first_name || !username || !email || !password) return res.status(400).json({
      success: false,
      message: 'First-name, last-name, nom, username, email and password are required'
    })
  if(!EMAIL_REGEX.test(email)) return res.status(400).json({
      success: false,
      message: 'Email not valid'
    })
  if(!USERNAME_REGEX.test(username)) return res.status(400).json({
      success: false,
      message: 'Username can contains only alphanumeric character and \'_\' and \'-\''
    })

  waterfall([
    async function(callback) {
      await db.user.findOne({where: {email: email}})
        .then(function(user) {
          callback(null, user)
        })
        .catch(function(err) {
          return res.status(500).json({
            success: false,
            error: 'An error occured during user\'s recovery'
          })
        })
    },
    function(user, callback) {
      if(!user){
        bcrypt.hash(password, 10, function(err, bcryptPassword){
          callback(null, user, bcryptPassword)
        })
      } else {
        return res.status(400).json({
          success: false,
          error: 'An error occured during user\'s creation'
        })
      }
    },
    function(user, bcryptPassword, callback) {
      if(bcryptPassword) {
        callback(user, bcryptPassword)
      } else {
        return res.status(500).json({
          success: false,
          error: 'An error occured during hashing password'
        })
      }
    },
  ],
  async function(user, bcryptPassword) {
    if(db.user.create({last_name: last_name, first_name: first_name, email: email, username: username, hashedPassword: bcryptPassword, id_role: id_role})) {
        return res.status(201).json({
          success: true,
          message: 'User created !'
        })
      } else {
        return res.status(500).json({
          success: false,
          error: 'An error occured during user\'s creation'
        })
      }
  })
}

exports.signIn = async (req, res) => {
  const email   = req.body.email
  const password= req.body.password

  if(!email || !password) return res.status(400).json({
    success: false,
    message: 'Email and password are required'
  })

  waterfall([
    async function(callback) {
      await db.user.findOne({where: {email: email}})
        .then(function(user) {
          callback(null, user)
        })
        .catch(function(err) {
          return res.status(500).json({
            success: false,
            error: 'An error occured during user\'s recovery'
          })
        })
    },
    function(user, callback) {
      if(user){
        bcrypt.compare(password, user.hashedPassword, function(errBcrypt, resBcrypt) {
          callback(null, user, resBcrypt)
        })
      } else {
        return res.status(404).json({
          success: false,
          error: 'Email or password invalid'
        })
      }
    },
    function(user, resBcrypt, callback) {
      if(resBcrypt){
        callback(user)
      } else {
        return res.status(401).json({
          success: false,
          error: 'Email or password invalid'
        })
      }
    },
  ], function(user) {
    if(user){
      res.status(200).json({
        success: true,
        userId: user.id,
        token: jwt.sign({
            userId: user.id,
        }, 
        process.env.JWT_SIGN_SECRET,
        {
          expiresIn: '1h'
        })
      })
    } else {
      return res.status(500).json({
        success: false,
        error: 'An error occured during user\'s login'
      })
    }
  })
}