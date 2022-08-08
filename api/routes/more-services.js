const express = require('express');
const MoreServices = require('../models/more-services');
const router  = express.Router();

router.get('/', (req, res) => {
    MoreServices.find()
        .populate(['platforms', 'technologies'])
        .exec()
        .then(x => res.status(200).send(x));
});

router.post('/', (req, res) => {
    MoreServices.create(req.body)
        .then(x => res.status(201).send(x));
});

router.put('/:id', (req, res ) => {
    MoreServices.findOneAndUpdate(req.params.id, req.body,)
        .then( () => res.sendStatus(204));
});

router.get('/:id', (req, res) => {
    MoreServices.findById(req.params.id)
        .populate(['platforms', 'technologies'])
        .exec()
        .then(x => res.status(200).send(x));
});

router.delete('/:id', (req, res ) => {
    MoreServices.findOneAndDelete(req.params.id,)
        .exec()
        .then(() => res.sendStatus(204));
});

module.exports = router;