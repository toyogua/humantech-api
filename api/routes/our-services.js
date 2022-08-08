const express = require('express');
const OurServices = require('../models/our-services');
const router = express.Router();

router.get('/', (req, res) => {
    OurServices.find()
        .exec()
        .then(x => res.status(200).send(x));
});

router.post('/', (req, res) => {
    OurServices.create(req.body)
        .then(x => res.status(201).send(x));
});

router.put('/:id', (req, res ) => {
    OurServices.findOneAndUpdate(req.params.id, req.body)
        .then( () => res.sendStatus(204));
});

router.get('/:id', (req, res) => {
    OurServices.findById(req.params.id)
        .exec()
        .then(x => res.status(200).send(x));
});

router.delete('/:id', (req, res ) => {
    OurServices.findOneAndDelete(req.params.id)
        .exec()
        .then(() => res.sendStatus(204));
});

module.exports = router;