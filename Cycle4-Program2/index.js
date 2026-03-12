const express = require('express');
// Import module to parse JSON data
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse JSON
app.use(bodyParser.json());

// Import router
const router = require('./route/bookRoute');

// Use router for /books endpoint
app.use('/books', router);

// Start the server
app.listen(3001, () => {
  console.log('Server running on port 3001');
});