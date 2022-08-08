const express = require('express');
const Technologies = require('../models/technologies');
const router = express.Router();

router.get('/', (req, res) => {
    Technologies.find()
        .exec()
        .then(x => res.status(200).send(x));
});

router.post('/', (req, res) => {
    Technologies.create(req.body)
        .then(x => res.status(201).send(x));
});

router.put('/:id', (req, res ) => {
    Technologies.findOneAndUpdate(req.params.id, req.body)
        .then( () => res.sendStatus(204));
});

router.get('/:id', (req, res) => {
    Technologies.findById(req.params.id)
        .exec()
        .then(x => res.status(200).send(x));
});

router.delete('/:id', (req, res ) => {
    Technologies.findOneAndDelete(req.params.id)
        .exec()
        .then(() => res.sendStatus(204));
});

module.exports = router;