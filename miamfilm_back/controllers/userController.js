const userService = require('../services/userService');
const createError = require('http-errors');

exports.getAllUser = async (req, res, next) => {
    const users = await userService.getUser();
    if(users) {
        res.json({ data: users });
    } else {
        next(createError(404, "Error no user found"));
    }
}

exports.getUserById = async (req, res, next) => {
    const user = await userService.getUserById(req.params.id);
    if(user) {
        res.json({ data: user });
    } else {
        next(createError(404, "Error no user found for this id"));
    }
}

exports.getUserByEmail = async (req, res, next) => {
    const user = await userService.getUserByEmail(req.params.email);
    if(user) {
        res.json({ data: user });
    } else {
        next(createError(404, "Error no user found for this email"));
    }
}

exports.addUser = async (req, res, next) => {
    const user = await userService.addUser();
    if(user) {
        res.status(201).json({id: user.id});
    } else {
        next(createError(404, "Error when creating this user"));
    }
}

exports.updateUser = async (req, res, next) => {
    
}

exports.deleteUserById = (req, res, next) => {
    try {
        userService.deleteUserById(req.params.id)
        res.status(204).send()
     } catch(e) {
        next(createError(404, `User not found`));
     }
}