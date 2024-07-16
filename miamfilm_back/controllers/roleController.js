const roleService = require('../services/roleService');

exports.getAllRole = (req, res, next) => {
    roleService.getRole()
        .then(role => res.status(200).json({ status: "success", message: "Rôles récupérés avec succès", data: role }))
        .catch(error => res.status(400).json({ status: "fail", message: "Impossible de récupérer les rôles", error: error }));
}

exports.getRoleById = (req, res, next) => {
    roleService.getRoleById(req.params.id)
        .then(role => res.status(200).json({ status: "success", message: "Rôle "+req.params.id+" récupéré avec succès", data: role }))
        .catch(error => res.status(404).json({ status: "fail", message: "Impossible de récupérer le rôle "+req.params.id, error: error }))
}

exports.getRoleByName = (req, res, next) => {
    roleService.getRoleByName(req.params.name)
        .then(role => res.status(200).json({ status: "success", message: "Rôle "+req.params.name+" récupéré avec succès", data: role }))
        .catch(error => res.status(404).json({ status: "fail", message: "Impossible de récupérer le rôle "+req.params.name, error: error }))
}

exports.addRole = (req, res, next) => {
    roleService.addRole(req.body.name, req.body.description)
        .then(role => res.status(201).json({ status: "success", message: "Rôle ajouté avec succès", data: role }))
        .catch(error => res.status(400).json({ status: "fail", message: "Impossible d'ajouter le rôle", error: error }))
}

exports.updateRoleById = async (req, res, next) => {
    roleService.updateRoleById(req.params.id, req.body.name, req.body.description)
        .then(role => res.status(200).json({ status: "success", message: "Rôle modifié avec succès", data: role }))
        .catch(error => res.status(400).json({ status: "fail", message: "Impossible de modifier le rôle", error: error }));
}

exports.deleteRoleById = (req, res, next) => {
    roleService.deleteRoleById(req.params.id)
        .then(res.status(200).json({ status: "success", message: "Rôle supprimé avec succès" }))
        .catch(error => res.status(400).json({ status: "fail", message: "Impossible de supprimer le rôle", error: error }))
}