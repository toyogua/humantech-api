const express = require('express');
const Platforms = require('../models/platforms');
const router = express.Router();

router.get('/', (req, res) => {
    Platforms.find()
        .exec()
        .then(x => res.status(200).send(x));
});

router.post('/', (req, res) => {
    Platforms.create(req.body)
        .then(x => res.status(201).send(x));
});

router.put('/:id', (req, res ) => {
    Platforms.findOneAndUpdate(req.params.id, req.body)
        .then( () => res.sendStatus(204));
});

router.get('/:id', (req, res) => {
    Platforms.findById(req.params.id)
        .exec()
        .then(x => res.status(200).send(x));
});

router.delete('/:id', (req, res ) => {
    Platforms.findOneAndDelete(req.params.id)
        .exec()
        .then(() => res.sendStatus(204));
});

module.exports = router;