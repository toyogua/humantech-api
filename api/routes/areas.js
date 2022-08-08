const express = require('express');
const Areas = require('../models/areas');
const router = express.Router();

router.get('/', (req, res) => {
    Areas.find()
        .populate(['members'])
        .exec()
        .then(x => res.status(200).send(x));
});

router.post('/', (req, res) => {
    Areas.create(req.body)
        .then(x => res.status(201).send(x));
});

router.put('/:id', (req, res ) => {
    Areas.findOneAndUpdate(req.params.id, req.body)
        .then( () => res.sendStatus(204));
});

router.get('/:id', (req, res) => {
    Areas.findById(req.params.id)
        .populate(['members'])
        .exec()
        .then(x => res.status(200).send(x));
});

router.delete('/:id', (req, res ) => {
    Areas.findOneAndDelete(req.params.id)
        .exec()
        .then(() => res.sendStatus(204));
});

module.exports = router;