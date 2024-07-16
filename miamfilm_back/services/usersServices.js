const { user } = require('../models/indexModel');

exports.getUsers = async (req, res, next) => {
  return await user.findAll({
    attributes: { exclude: ["hashedPassword"] },
  })
}

exports.getUserByRoleId = async (roleId) => {
  return await user.findOne({
    where: {
      id_role: roleId,
    },
    attributes: ['id'],
  })
}

exports.addUser = async (last_name, first_name, username, email, hashedPassword, id_role) => {
  return await user.create({last_name: last_name, first_name: first_name, username: username, email: email, hashedPassword: hashedPassword, id_role: id_role, created_at: new Date(), updated_at: new Date()})
}

exports.getUserById = async (id) => {
  return await user.findOne({
    where: {
      id,
    },
    attributes: { exclude: ["hashedPassword"] },
  })
}

exports.putUser = async (id, last_name, first_name, username, email, hashedPassword, id_role) => {
  return await user.update(
    { last_name: last_name, first_name: first_name, email: email, username: username, hashedPassword: hashedPassword, id_role: id_role },
    {
      where: {
        id,
      },
    }
  )
}

exports.deleteUserById = async (id) => {
  return await user.destroy({
    where: {
      id,
    },
  })
}
