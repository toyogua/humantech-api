const express = require('express');
const Projects = require('../models/projects');
const router = express.Router();

router.get('/', (req, res) => {
    Projects.find()
        .populate(['categories', 'skills'])
        .exec()
        .then(x => res.status(200).send(x));
});

router.post('/', (req, res) => {
    Projects.create(req.body)
        .then(x => res.status(201).send(x));
});

router.put('/:id', (req, res ) => {
    Projects.findOneAndUpdate(req.params.id, req.body)
        .then( () => res.sendStatus(204));
});

router.get('/:id', (req, res) => {
    Projects.findById(req.params.id)
        .populate(['categories', 'skills'])
        .exec()
        .then(x => res.status(200).send(x));
});

router.delete('/:id', (req, res ) => {
    Projects.findOneAndDelete(req.params.id)
        .exec()
        .then(() => res.sendStatus(204));
});

module.exports = router;