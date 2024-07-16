const tagService = require('../services/tagService');
const createError = require('http-errors');

exports.getAllTag = async (req, res, next) => {
    const tags = await tagService.getTag();
    if(tags) {
        res.json({ data: tags });
    } else {
        next(createError(404, "Error no tag found"));
    }
}

exports.getTagById = async (req, res, next) => {
    const tag = await tagService.getTagById(req.params.id);
    if(tag) {
        res.json({ data: tag });
    } else {
        next(createError(404, "Error no tag found for this id"));
    }
}

exports.getTagByName = async (req, res, next) => {
    const tag = await tagService.getTagByName(req.params.name);
    if(tag) {
        res.json({ data: tag });
    } else {
        next(createError(404, "Error no tag found for this name"));
    }
}

exports.addTag = async (req, res, next) => {
    const tag = await tagService.addTag(req.body.name, req.body.color);
    if(tag) {
        res.status(201).json({id: tag.id});
    } else {
        next(createError(404, "Error when creating this tag"));
    }
}

exports.updateTagById = async (req, res, next) => {
    tagService.updateTagById(req.params.id, req.body.name, req.body.color)
        .then(tag => res.status(200).json({ status: "succès", message: "Tag modifié avec succès", data: tag }))
        .catch(error => res.status(400).json({ status: "échec", message: "Impossible de modifier le tag", error: error }));
}

exports.deleteTagById = (req, res, next) => {
    try {
        tagService.deleteTagById(req.params.id)
        res.status(204).send()
    } catch(e) {
    next(createError(404, `Tag not found`));
    }
}