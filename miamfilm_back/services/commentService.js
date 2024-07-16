const { comment } = require('../models/indexModel');

exports.getComment = async () => {

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

exports.addComment = async (description, idUser, idVideo, idRecipe) => {

    try {
        var today = new Date(); // Utiliser toLocaleString('fr-FR') pou afficher au fuseau horaire français
        return await comment.create({
            description: description,
            created_at: today,
            updated_at: today,
            id_user: idUser,
            id_video: idVideo,
            id_recipe: idRecipe,
        })
    } catch (error) {
        console.error(error);
        throw new Error('Error to add comment');
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