const { video } = require('../models/indexModel');
const { addTag } = require('../services/tagService');
const api = require('./fetchApiService');

exports.getVideo = async () => {

    try {
        return await video.findAll();
    } catch (error) {
        console.error(error);
        throw new Error('Error to get all videos');
    }

}

exports.getVideoById = async (id) => {

    try {
        return await video.findOne({
            where: {
                id: id
            }
        })
    } catch (error) {
        console.error(error);
        throw new Error('Error to get video by id');
    }

}

exports.getVideoByTitle = async (title) => {

    try {
        return await video.findOne({
            where: {
                title: title
            }
        }) 
    } catch (error) {
        console.error(error);
        throw new Error('Error to get video by title');
    }

}

exports.addVideo = async (title) => {

    var movieItems = await api.apiGetMovieByTitle('&query='+title+'&language=fr-FR');
    var serieItems = await api.apiGetSerieByTitle('&query='+title+'&language=fr-FR');

    //if(movieItems.results[0] && (movieItems.results[0].title.toLowerCase() == title.toLowerCase())) {
        var idMovie = movieItems.results[0].id;

        var officialTitle = movieItems.results[0].title; 
        var released = movieItems.results[0].release_date;

        var director = null;
        var creditItems = await api.apiGetCreditByMovie(idMovie, '&language=fr-FR');
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
        var synopsis = movieItems.results[0].overview;

        var genres = "";
        var detailItems = await api.apiGetDetailByMovie(idMovie, "&language=fr-FR");
        detailItems.genres.forEach(item => {
            genres = genres + item.name + ',';
            addTag(item.name, "#ff0000");
        });

        var runtime = detailItems.runtime;
        var poster = movieItems.results[0].poster_path;
        var boxOffice = detailItems.revenue; // En Millions
    // } else if(serieItems.results[0] && serieItems.results[0].title.toLowerCase() == title.toLowerCase()) {
    //     var idSerie = serieItems.results[0].id;

    //     var officialTitle = serieItems.results[0].title; 
    //     var released = movieItems.results[0].first_air_date;

    //     var director = null;
    //     var creditItems = await api.apiGetCreditByMovie(idMovie, '&language=fr-FR');
    //     creditItems.crew.forEach(item => {
    //         if(item.hasOwnProperty("job") && item.job == "Director") {
    //             director = item.name;
    //             return item;
    //         }
    //     });

    //     var actors = "";
    //     var count = 0;
    //     creditItems.cast.forEach(item => {
    //         if(count >= 10) {
    //             return;
    //         }
    //         if(item.known_for_department == "Acting"){
    //             count++;
    //             actors = actors + item.name + ',';
    //         }
    //     })

    //     var genres = "";
    //     var detailItems = await api.apiGetDetailByMovie(idMovie, "&language=fr-FR");
    //     detailItems.genres.forEach(item => {
    //         genres = genres + item.name + ',';
    //     });

    //     var runtime = detailItems.runtime;
    //     var poster = movieItems.results[0].poster_path;
    //     var boxOffice = detailItems.revenue; // En Millions
    // }
        
    var today = new Date(); // Utiliser toLocaleString('fr-FR') pou afficher au fuseau horaire français

    try {
        return await video.create({
            title: officialTitle,
            released: released,
            director: director,
            actors: actors,
            synopsis: synopsis,
            genre: genres,
            type: "Film",
            runtime: runtime,
            poster: poster,
            box_office: boxOffice,
            created_at: today,
            updated_at: today,
        });
    } catch (error) {
        console.error(error);
        throw new Error('Error to add video');
    }

}

exports.updateVideoById = async (id, title, released, director, actors,synopsis, genres, type, runtime, poster, boxOffice) => {

    try {
        var today = new Date();
        return await video.update(
            {
                title: title,
                released: released,
                director: director,
                actors: actors,
                synopsis: synopsis,
                genre: genres,
                type: type,
                runtime: runtime,
                poster: poster,
                box_office: boxOffice,
                updated_at: today,
            }, 
            {where: {id: id}}
        );
    } catch (error) {
        console.error(error);
        throw new Error('Error to update video');
    }

}

exports.deleteVideoById = async (id) => {

    try {
        return await video.destroy({
          where: {
            id
          },
        });
    } catch (error) {
        throw new Error(
            `Une erreur s'est produite lors de la suppression de l'utilisateur de critiques : ${error}`
        );
    }

}