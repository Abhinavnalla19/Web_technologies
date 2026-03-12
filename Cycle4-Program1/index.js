const express = require('express'); // Import the Express framework
const app = express(); // Create an instance of the Express app

const router = require('./router'); // Import the router module

// Use the router for all requests starting with '/api'
app.use('/api', router);

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server started on port 3000');
});