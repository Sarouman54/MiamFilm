const commentService = require('../services/commentService');
const createError = require('http-errors');

exports.getAllComment = async (req, res, next) => {
    commentService.getComment()
        .then(comment => res.status(200).json({ status: "success", message: "Commentaires récupérés avec succès", data: comment }))
        .catch(error => res.status(400).json({ status: "fail", message: "Impossible de récupérer les commentaires", error: error }));
}

exports.getCommentById = async (req, res, next) => {
    commentService.getCommentById(req.params.id)
        .then(comment => {
            if(comment) {
                res.status(200).json({ status: "success", message: "Commentaire "+req.params.id+" récupéré avec succès", data: comment});
            } else {
                res.status(200).json({ status: "success", message: "Commentaire "+req.params.id+" inexistant"});
            }
        })
        .catch(error => res.status(404).json({ status: "fail", message: "Impossible de récupérer le commentaire "+req.params.id, error: error }));

    // const comment = await commentService.getCommentById(req.params.id);
    // if(comment) {
    //     res.json({ data: comment });
    // } else {
    //     next(createError(404, "Error no comment found for this id"));
    // }
}

exports.addComment = async (req, res, next) => {
    console.log("ici 2 " + req.body.description)
    const comment = await commentService.addComment(req.body.title, req.body.description, req.body.idVideo, req.body.idUser, req.body.idRecipe);
    if(comment) {
        res.status(201).json({id: comment.id});
    } else {
        next(createError(404, "Error when creating this comment"));
    }
}

exports.updateCommentById = async (req, res, next) => {
    commentService.updateCommentById(req.params.id, req.body.title, req.body.description)
        .then(comment => res.status(200).json({ status: "succès", message: "Commentaire modifié avec succès", data: comment }))
        .catch(error => res.status(400).json({ status: "échec", message: "Impossible de modifier le commentaire", error: error }));
}

exports.deleteCommentById = (req, res, next) => {
    try {
        commentService.deleteCommentById(req.params.id)
        res.status(204).send()
    } catch(e) {
    next(createError(404, 'Comment not found'));
    }
}