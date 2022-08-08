const express = require('express');
const Positions = require('../models/positions');
const router = express.Router();

router.get('/', (req, res) => {
    Positions.find()
        .exec()
        .then(x => res.status(200).send(x));
});

router.post('/', (req, res) => {
    Positions.create(req.body)
        .then(x => res.status(201).send(x));
});

router.put('/:id', (req, res ) => {
    Positions.findOneAndUpdate(req.params.id, req.body)
        .then( () => res.sendStatus(204));
});

router.get('/:id', (req, res) => {
    Positions.findById(req.params.id)
        .exec()
        .then(x => res.status(200).send(x));
});

router.delete('/:id', (req, res ) => {
    Positions.findOneAndDelete(req.params.id)
        .exec()
        .then(() => res.sendStatus(204));
});

module.exports = router;