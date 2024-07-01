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

exports.getVideoByTitle = async (req, res, next) => {
    const video = await videoService.getVideoByTitle(req.params.title);
    if(video) {
        res.json({ data: video });
    } else {
        next(createError(404, "Error no video found for this title"));
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

exports.addVideo = async (req, res, next) => {
    const videoCreated = videoService.addVideo(req.body.title);
    if(videoCreated) {
        res.status(201).json({id: videoCreated.id});
    } else {
        next(createError(404, "Error when creating this video"))
    }
}