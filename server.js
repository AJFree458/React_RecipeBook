const express = require('express');

const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());
app.use(logger('dev'));
app.use(cors());
// Add routes, both API and view
app.use(routes);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  // Define any API routes before this runs
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
  });
}

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/recipebook', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});
// Get the connection
const db = mongoose.connection;

// Bind to connection error event (to get notification of errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
