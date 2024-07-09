import { user } from "../models/indexModel"

export async function getUsers() {
  return await user.findAll({
    attributes: { exclude: ["hashedPassword"] },
  })
}

export async function addUser(last_name, first_name, username, email, hashedPassword) {
  return await user.create({last_name: last_name, first_name: first_name, username: username, email: email, hashedPassword: hashedPassword,})
}

export async function getUserById(id) {
  return await user.findOne({
    where: {
      id,
    },
    attributes: { exclude: ["hashedPassword"] },
  })
}

export async function putUser(id, username, hashedPassword, email) {
  return await user.update(
    { username: username, hashedPassword: hashedPassword, email: email },
    {
      where: {
        id,
      },
    }
  )
}

export async function deleteUserById(id) {
  return await user.destroy({
    where: {
      id,
    },
  })
}
