const db = require("../models/indexModel")

exports.getUsers = async (req, res, next) => {
  return await db.user.findAll({
    attributes: { exclude: ["hashedPassword"] },
  })
}

exports.addUser = async (last_name, first_name, username, email, hashedPassword, idRole) => {
  return await db.user.create({last_name: last_name, first_name: first_name, username: username, email: email, hashedPassword: hashedPassword, idRole: idRole})
}

exports.getUserById = async (id) => {
  return await db.user.findOne({
    where: {
      id,
    },
    attributes: { exclude: ["hashedPassword"] },
  })
}

exports.putUser = async (id, last_name, first_name, username, email, hashedPassword, idRole) => {
  return await db.user.update(
    { last_name: last_name, first_name: first_name, email: email, username: username, hashedPassword: hashedPassword, idRol: idRole },
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
