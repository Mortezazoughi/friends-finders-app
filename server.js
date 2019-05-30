// Pull in required dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Configure the Express application
var app = express();
var PORT = process.env.PORT || 8000;

// Expose the public directory to access CSS files
app.use(express.static(path.join(__dirname, './public')));

// Add middleware for parsing incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Add the application routes
//require(path.join(__dirname, './routes/apiRoutes'))(app);
//require(path.join(__dirname, './routes/htmlRoutes'))(app);

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// Start listening on PORT
app.listen(PORT, function() {
  console.log('Listening on PORT: ' + PORT);
});
