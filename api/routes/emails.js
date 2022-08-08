const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const pdf2base64 = require('pdf-to-base64');
const fs = require('fs')
require('dotenv').config({path: path.resolve(__dirname, './.env')});


//Multer and upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './tmp/my-uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.originalname)
    }
})

const upload = multer({storage: storage})

// Utils
const emails = require('../utils/emails');

const Emails = require('../models/emails');



router.post('/', (req, res) => {
    const {user, password, is_default } = req.body;
    let encryptedData = cipher.update(password, "utf-8", "hex");

    encryptedData += cipher.final("hex");
    Emails.create({
        user,
        password: encryptedData,
        is_default
    }).then( () => {
        res.send('Email creado con éxito');
    });
    // crypto.randomBytes(16, (err, salt) =>{
    //     const newSalt = salt.toString('base64');
    //     crypto.pbkdf2(password, newSalt, 10000, 64, 'sha1', (err, key)=> {
    //         const encryptedPassword = key.toString('base64');
    //
    //     });
    // });
});

router.put('/:id', (req, res ) => {
    Emails.findOneAndUpdate(req.params.id, req.body)
        .then( () => res.sendStatus(204));
});

router.delete('/:id', (req, res) => {
   console.log(req.params)
    Emails.findOneAndDelete(req.params.id)
       .exec()
       .then( () => res.sendStatus(204));

});

router.get('/', (req, res) => {
    Emails.find()
        .exec()
        .then( x => res.status(200).send(x));
});

router.post('/apply', upload.single('file'), function (req, res) {
    pdf2base64( req.file.path)
        .then(
            (response) => {
                emails(req.body, response).then(  result => res.status(200).send(result.body));
                const path = `./tmp/my-uploads/${req.file.filename}`
                fs.unlinkSync(path)
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
});

router.post('/contact', (req, res) => {
    emails(req.body).then(  result => res.status(200).send(result.body));
})

module.exports = router;