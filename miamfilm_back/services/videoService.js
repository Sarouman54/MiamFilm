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

    var officialTitle = videoItems.results[0].title; 
    var released = videoItems.results[0].release_date;

    var director = null;
    var creditItems = await api.apiGetCreditByVideo(idVideo, '&language=fr-FR');
    creditItems.crew.forEach(item => {
        if(item.hasOwnProperty("job") && item.job == "Director") {
            director = item.name;
            return item;
        }
    });

    var actors = "";
    var count = 0;
    creditItems.cast.forEach(item => {
        if(count >= 10) {
            return;
        }
        if(item.known_for_department == "Acting"){
            count++;
            actors = actors + item.name + ',';
        }
    })

    var genres = "";
    var detailItems = await api.apiGetDetailByVideo(idVideo, "&language=fr-FR");
    detailItems.genres.forEach(item => {
        genres = genres + item.name + ',';
    });

    var runtime = detailItems.runtime;
    var poster = videoItems.results[0].poster_path;
    var boxOffice = detailItems.revenue; // En Millions
    var today = new Date(); // Utiliser toLocaleString('fr-FR') pou afficher au fuseau horaire français
    try {
        return await video.create({
            title: officialTitle,
            released: released,
            director: director,
            actors: actors,
            genre: genres,
            type: "Film",
            runtime: runtime,
            poster: poster,
            box_office: boxOffice,
            created_at: today,
            updated_at: today,
        })
    } catch (error) {
        console.error(error);
        throw new Error('Error to add video');
    }
}