const db = require("../models/indexModel")

exports.getUsers = async (req, res, next) => {
  return await db.user.findAll({
    attributes: { exclude: ["hashedPassword"] },
  })
}

exports.addUser = async (last_name, first_name, username, email, hashedPassword) => {
  return await db.user.create({last_name: last_name, first_name: first_name, username: username, email: email, hashedPassword: hashedPassword,})
}

exports.getUserById = async (id) => {
  return await db.user.findOne({
    where: {
      id,
    },
    attributes: { exclude: ["hashedPassword"] },
  })
}

exports.putUser = async (id, username, hashedPassword, email) => {
  return await db.user.update(
    { username: username, hashedPassword: hashedPassword, email: email },
    {
      where: {
        id,
      },
    }
  )
}

exports.deleteUserById = async (id) => {
  return await db.user.destroy({
    where: {
      id,
    },
  })
}
