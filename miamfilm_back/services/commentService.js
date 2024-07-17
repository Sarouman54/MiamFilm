const { comment } = require('../models/indexModel');

exports.getAllComment = async () => {

    try {
        return await comment.findAll();
    } catch (error) {
        console.error(error);
        throw new Error('Error to get all comments');
    }

}

exports.getCommentById = async (id) => {

    try {
        return await comment.findOne({
            where: {
                id: id
            }
        })
    } catch (error) {
        console.error(error);
        throw new Error('Error to get comment by id');
    }

}

exports.addComment = async (title, description, idVideo, idUser, idRecipe) => {
    console.log('ici 3 '+ title, description, idVideo, idUser, idRecipe)
    try {
        var today = new Date(); // Utiliser toLocaleString('fr-FR') pou afficher au fuseau horaire français
        return await comment.create({
            title: title,
            description: description,
            created_at: today,
            updated_at: today,
            id_video: idVideo,
            id_user: idUser,
            id_recipe: idRecipe,
        })
    } catch (error) {
        console.error(error);
        throw new Error('Error to add comment');
    }

}

exports.updateCommentById = async (id, title, description) => {

    try {
        var today = new Date();
        return await comment.update(
            {
                title: title,
                description: description,
                updated_at: today,
            }, 
            {where: {id: id}}
        );
    } catch (error) {
        console.error(error);
        throw new Error('Error to update comment');
    }

}

exports.deleteCommentById = async (id) => {

    try {
        return await comment.destroy({
          where: {
            id: id,
          },
        });
    } catch (error) {
        console.error(error);
        throw new Error('Error to delete comment by id'); // Affichage de l'erreur "${error}"
    }
    
}