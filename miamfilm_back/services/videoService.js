const { video } = require('../models/indexModel');
const api = require('./fetchApi');

exports.getVideo = async () => {
    return await video.findAll();
}
exports.getVideoByTitle = async (title) => {
    return await video.findOne({
        where: {
            title: title
        }
    })
}
exports.getVideoById = async (id) => {
    return await video.findOne({
        where: {
            id: id
        }
    })
}


exports.addVideo = async (title) => {

    var videoItems = await api.apiGetVideoByTitle('&query='+title+'&language=fr-FR');
    var idVideo = videoItems.results[0].id;
    
    var released = videoItems.results[0].release_date;

    var director = null;
    var creditItems = await api.apiGetCreditByVideo(idVideo, '&language=fr-FR');
    creditItems.crew.forEach(item => {
        if(item.hasOwnProperty("job") && item.job == "Director") {
            director = item;
            return item;
        }
    });
    var actors = [];
    creditItems.cast.forEach(item => {
        if(actors.length >= 10) {
            return;
        }
        if(item.known_for_department == "Acting"){
            actors.push(item.name);
        }
    })

    var genres = [];
    var detailItems = await api.apiGetDetailByVideo(idVideo, "&language=fr-FR");
    detailItems.genres.forEach(item => {
        genres.push(item.name);
    });

    var runtime = detailItems.runtime; // À convertir en Time
    var poster = videoItems.results[0].poster_path;
    var boxOffice = detailItems.revenue; // En Millions
    var today = new Date();
    // try {
    //     await video.create({
    //         title: video.results[0].title,
    //         released: video.results[0].release_date,
    //         director: ,
    //         actors: ,
    //         genre: ,
    //         type: ,
    //         runtime: ,
    //         poster: ,
    //         box_office: ,
    //         created_at: ,
    //         updated_at: ,
    //     })
    //     return video.results[0].title;
    // } catch (error) {
    //     throw new Error('Error to add video');
    // }
}