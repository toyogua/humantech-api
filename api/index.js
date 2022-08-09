const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
require('dotenv').config({path: path.resolve(__dirname, './.env')});

const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('../swagger.json')

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
// Routes
const auth = require('./routes/auth');
const ourServices = require('./routes/our-services');
const platforms = require('./routes/platforms');
const technologies = require('./routes/technologies');
const moreServices = require('./routes/more-services');
const projects = require('./routes/projects');
const categories = require('./routes/categories');
const skills = require('./routes/skills');
const members = require('./routes/members');
const positions = require('./routes/positions');
const areas = require('./routes/areas');
const emails = require('./routes/emails');

const app = express();
const port = 3020;
app.use( bodyParser.urlencoded({ extended: true }) );
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use('./tmp/my-uploads', express.static('tmp/my-uploads'));
const MONGO_USERNAME = 'humantech';
const MONGO_PASSWORD = 'site_!2o22';
const MONGO_HOSTNAME = '127.0.0.1';
const MONGO_PORT = '27017';
const MONGO_DB = 'site';

// const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
mongoose.connect('mongodb+srv://humantech:KfeAtiultSQ4DbjC@cluster0.u6yiuhc.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.set('useFindAndModify', false);
// mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});


app.get('/health', (req, res) => {
    res.send({status: 'running'});
});

app.post('/api/upload', upload.single('report-file'), function (req, res, next) {
    const response = {
        path: req.file.path
    }
    return res.send(response)
})

app.use('/api/auth', auth);
app.use('/api/our-services', ourServices);
app.use('/api/platforms', platforms);
app.use('/api/technologies', technologies);
app.use('/api/more-services',  moreServices);
app.use('/api/projects', projects);
app.use('/api/categories', categories);
app.use('/api/skills', skills);
app.use('/api/members', members);
app.use('/api/positions', positions);
app.use('/api/areas', areas);
app.use('/api/emails', emails);
app.use(
    '/swagger',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);

app.listen(port, () => {
    console.info(`Server running in http://localhost:${port}`)
})
module.exports = app;
