const usersService = require('../services/usersServices')
const createError = require('http-errors')
const jwt = require('jsonwebtoken')
const bcrypt    = require('bcrypt')

exports.getUsers = async (req, res, next) => {
   const users = await usersService.getUsers()
   if (users) {
      res.json({ data: users })
   } else {
      next(createError(404, "no user found"))
   }
}


exports.addUser = async (req, res, next) => {
   if(!req.body.last_name || !req.body.first_name || !req.body.username || !req.body.email || !req.body.hashedPassword){
      res.status(400).json({
         success: false,
         message: "Pseudo, email, password are required"
      }).send()
      return
   }

   bcrypt.hash(req.body.hashedPassword, 10, async function(err, bcryptPassword){
      if(bcryptPassword){
         const userCreated = await usersService.addUser(req.body.last_name, req.body.first_name, req.body.email, req.body.username, bcryptPassword, req.body.idRole)
         if (userCreated) {
            res.status(201).json({id: userCreated.id})
         } else {
            next(createError(400, "Error when creating this user, verify your args"))
         }
      }
    })
}

exports.getUserById = async (req, res, next) => {
   const user = await usersService.getUserById(req.params.id)
   if (user) {
      res.json({ data: user })
   } else {
      next(createError(404, "no user found for this id"))
   }
}

exports.putUser = (req, res, next) => {
   const userConnected = jwt.verify(req.headers.authorization.split(' ')[1], process.env.JWT_SIGN_SECRET)
   bcrypt.hash(req.body.hashedPassword, 10, async function(err, bcryptPassword){
      if(bcryptPassword){
         const userUpdated = usersService.putUser(userConnected.userId, req.body.last_name, req.body.first_name, req.body.email, req.body.username, bcryptPassword, req.body.idRole)
         if (userUpdated) {
            res.status(200).json({
               success: true,
               message: "User updated"
            })
         } else {
            next(createError(400, "Error when updating this user, verify your args"))
         }
      }
    })
}

exports.deleteUserById = (req, res, next) => {
   try {
      const userConnected = jwt.verify(req.headers.authorization.split(' ')[1], process.env.JWT_SIGN_SECRET)
      usersService.deleteUserById(userConnected.userId)
      res.status(204).json({
         success: true,
         message: "User deleted"
      })
   } catch(e) {
      next(createError(404, `This user doesn't exists, it cannot be deleted`))
   }
}
