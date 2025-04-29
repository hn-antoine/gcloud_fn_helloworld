const express = require('express');
const functions = require('@google-cloud/functions-framework');

// Create an Express app
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Define a simple route
app.get('/hello', (req, res) => {
  res.send({ message: 'Hello, World!' });
});

// Export the Express app as a Google Cloud Function
functions.http('helloApi', app);