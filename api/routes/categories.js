const express = require('express');
const Categories = require('../models/categories');
const router = express.Router();

router.get('/', (req, res) => {
    Categories.find()
        .exec()
        .then(x => res.status(200).send(x));
});

router.post('/', (req, res) => {
    Categories.create(req.body)
        .then(x => res.status(201).send(x));
});

router.put('/:id', (req, res ) => {
    Categories.findOneAndUpdate(req.params.id, req.body)
        .then( () => res.sendStatus(204));
});

router.get('/:id', (req, res) => {
    Categories.findById(req.params.id)
        .exec()
        .then(x => res.status(200).send(x));
});

router.delete('/:id', (req, res ) => {
    Categories.findOneAndDelete(req.params.id)
        .exec()
        .then(() => res.sendStatus(204));
});

module.exports = router;