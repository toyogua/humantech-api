const express = require('express');
const Members = require("../models/members");
const router = express.Router();

router.get('/', (req, res) => {
    Members.find()
        .populate(['areas', 'position'])
        .exec()
        .then(x => res.status(200).send(x));
});

router.post('/', (req, res) => {
    Members.create(req.body)
        .then(x => res.status(201).send(x));
});

router.put('/:id', (req, res ) => {
    Members.findOneAndUpdate(req.params.id, req.body)
        .then( () => res.sendStatus(204));
});

router.get('/:id', (req, res) => {
    Members.findById(req.params.id)
        .populate(['areas', 'position'])
        .exec()
        .then(x => res.status(200).send(x));
});

router.delete('/:id', (req, res ) => {
    Members.findOneAndDelete(req.params.id)
        .exec()
        .then(() => res.sendStatus(204));
});

module.exports = router;