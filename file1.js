// Import the Express framework 
const express = require('express');

// Create an Express application instance
const app = express();

// Define the port number where the server will listen
const port = 3000;

const path = require('path');


// Serve static files from the 'public' folder (CSS, images, JS)
app.use(express.static('public'));


/**
 * GET method to fetch group info from views/index.html
 * This route is set to the home page 
 */

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});



// Start the Express server and listen on the defined port
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
