const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const apiRouter = require('./api-router');

// const db = require('./db');
// make a new express app
const app = express();
// take the default port from the PORT environment variable or use 8080 if not set
const port = process.env.PORT || 8080;

// use body parsing middleware to turn the body of requests with type application/json into a json object
app.use(bodyParser.json());

// serve files from /client/build as static assets
app.use(express.static(path.resolve(__dirname, '../client/build')));

// make the server use our router
app.use(apiRouter);

// any get requests that are not picked up by our router should be sent the client/build/index.html file
app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

// start the application and listen on the specified port
app.listen(port, '0.0.0.0', () => console.log(`Listening on ${port}`)); // eslint-disable-line no-console
