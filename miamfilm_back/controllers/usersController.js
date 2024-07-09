import { getUsers, addUser, getUserById, putUser, deleteUserById } from '../services/usersService'
import createError from 'http-errors'
import { verify } from 'jsonwebtoken'
import { hash } from 'bcrypt'

export async function getUsers(req, res, next) {
   const users = await getUsers()
   if (users) {
      res.json({ data: users })
   } else {
      next(createError(404, "no user found"))
   }
}

export async function addUser(req, res, next) {
   if(!req.body.hashedPassword || !req.body.username || !req.body.email){
      res.status(400).json({
         success: false,
         message: "Username, email and password and role are required"
      }).send()
      return
   }

   hash(req.body.hashedPassword, 10, async function(err, bcryptPassword){
      if(bcryptPassword){
         const userCreated = await addUser(req.body.username, bcryptPassword, req.body.email)
         if (userCreated) {
            res.status(201).json({id: userCreated.id})
         } else {
            next(createError(400, "Error when creating this user, verify your args"))
         }
      }
    })
}

export async function getUserById(req, res, next) {
   const user = await getUserById(req.params.id)
   if (user) {
      res.json({ data: user })
   } else {
      next(createError(404, "no user found for this id"))
   }
}

export function putUser(req, res, next) {
   const userConnected = verify(req.headers.authorization.split(' ')[1], process.env.JWT_SIGN_SECRET)
   hash(req.body.password, 10, async function(err, bcryptPassword){
      if(bcryptPassword){
         const userUpdated = putUser(userConnected.userId, req.body.username, req.body.hashedPassword, req.body.email)
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

export function deleteUserById(req, res, next) {
   try {
      const userConnected = verify(req.headers.authorization.split(' ')[1], process.env.JWT_SIGN_SECRET)
      deleteUserById(userConnected.userId)
      res.status(204).json({
         success: true,
         message: "User deleted"
      })
   } catch(e) {
      next(createError(404, `This user doesn't exists, it cannot be deleted`))
   }
}
