
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/olympi-server'
require('dotenv').config();
const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const passport     = require('passport');

const session       = require('express-session');
const MongoStore = require('connect-mongo');

const app_name = require('./package.json').name;

mongoose
.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

// const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// ADD CORS SETTINGS HERE TO ALLOW CROSS-ORIGIN INTERACTION:
const cors = require('cors');
app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000']
}))

// Enable authentication using session + passport
app.use(session({
  secret: `${app_name}-shhhhhhht`,
  resave: true,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: MONGODB_URI,
  })
}))
require('./passport')(app);


// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');
// // app.use(express.static(path.join(__dirname, 'public')));
// app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));


// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';


// ROUTES MIDDLEWARE STARTS HERE:

const authRoutes = require('./routes/auth-routes');
app.use('/auth', authRoutes);

const videosRoutes = require('./routes/videos-routes');
app.use('/videos', videosRoutes);

const notifRoutes = require('./routes/notif-routes');
app.use('/notifications', notifRoutes);

// Serve static files from client/build folder
app.use(express.static('olympi-client/build'));

// For any other routes: serve client/build/index.html SPA
app.use((req, res, next) => {
  res.sendFile(`${__dirname}/olympi-client/build/index.html`, err => {
    if (err) next(err)
  })
});


module.exports = app;
