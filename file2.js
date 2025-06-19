// Import Express and Framework for creating the server
const express = require('express');

// creating an instance of Express app
const app = express();

// defining the port number
const port = 3000;

// Importing Nodes.js file system module to read
const fs = require('fs');

// Define a GET route to handle requests to the '/fruits' URL path
app.get('/fruits', (req, res) => {
    // Reading the json file from data folder
    fs.readFile('./data/sampleData.json', 'utf8', (err, data) => {
        // if any error,  it will stop the execution
        if (err) throw err;
        res.json(JSON.parse(data)); // Displays raw JSON data
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
