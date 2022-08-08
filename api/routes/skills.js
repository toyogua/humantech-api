const express = require('express');
const Skills = require('../models/skills');
const router = express.Router();

router.get('/', (req, res) => {
    Skills.find()
        .exec()
        .then(x => res.status(200).send(x));
});

router.post('/', (req, res) => {
    Skills.create(req.body)
        .then(x => res.status(201).send(x));
});

router.put('/:id', (req, res ) => {
    Skills.findOneAndUpdate(req.params.id, req.body)
        .then( () => res.sendStatus(204));
});

router.get('/:id', (req, res) => {
    Skills.findById(req.params.id)
        .exec()
        .then(x => res.status(200).send(x));
});

router.delete('/:id', (req, res ) => {
    Skills.findOneAndDelete(req.params.id)
        .exec()
        .then(() => res.sendStatus(204));
});

module.exports = router;