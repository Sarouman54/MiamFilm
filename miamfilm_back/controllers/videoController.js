const videoService = require('../services/videoService');
const createError = require('http-errors');

exports.getAllVideo = async (req, res, next) => {
    const videos = await videoService.getVideo();
    if(videos) {
        res.json({ data: videos });
    } else {
        next(createError(404, "Error no video found"));
    }
}

exports.getVideoById = async (req, res, next) => {
    const video = await videoService.getVideoById(req.params.id);
    if(video) {
        res.json({ data: video });
    } else {
        next(createError(404, "Error no video found for this id"));
    }
}

exports.getVideoByTitle = async (req, res, next) => {
    const video = await videoService.getVideoByTitle(req.params.title);
    if(video) {
        res.json({ data: video });
    } else {
        next(createError(404, "Error no video found for this title"));
    }
}

exports.addVideo = async (req, res, next) => {
    const videoCreated = await videoService.addVideo(req.body.title);
    if(videoCreated) {
        res.status(201).json({id: videoCreated.id});
    } else {
        next(createError(404, "Error when creating this video"));
    }
}

exports.updateVideoById = async (req, res, next) => {
    videoService.updateVideoById(req.params.id, req.body.title, req.body.released, req.body.director, req.body.actors, req.body.synopsis, req.body.genre, req.body.type, req.body.runtime, req.body.poster, req.body.box_office, req.body.average)
        .then(video => res.status(200).json({ status: "succès", message: "Vidéo modifiée avec succès", data: video }))
        .catch(error => res.status(400).json({ status: "échec", message: "Impossible de modifier la vidéo", error: error }));
}

exports.deleteVideoById = (req, res, next) => {
    try {
        videoService.deleteVideoById(req.params.id)
        res.status(204).send()
     } catch(e) {
        next(createError(404, `Video not found`));
     }
}