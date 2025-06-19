const express = require('express');
const app = express();
const port = 3000;

// To handle JSON data from Postman
app.use(express.json());

// Load data from JSON file
let fruits = require('./data/sampleData.json');

// Displaying a welcome message in the root URL
app.get('/', (req, res) => {
    res.send('<h1>Welcome to CRUD Operations</h1><p>Use Postman to test CRUD routes.</p>');
});

// READ - Get all fruits
// Method: GET
// Sending the list of fruit as a Json

app.get('/fruits', (req, res) => {
    res.json(fruits);
});

// CREATE - Add a new fruit
// Method: POST
// Sending the new fruit as a Json

app.post('/fruits', (req, res) => {
    const newFruit = req.body; // Getting the new fruit data from req.body

    // Validate incoming data with the same ID 
    if (!newFruit || !newFruit.id || !newFruit.name) {
        return res.status(400).json({ message: 'Invalid fruit data. Please provide id and name.' });
    }

    // Check if fruit with same id already exists
    const exists = fruits.find(fruit => fruit.id === newFruit.id);
    if (exists) {
        return res.status(400).json({ message: 'Fruit with this ID already exists' });
    }

    fruits.push(newFruit);
    res.json({ message: 'Fruit added successfully', data: newFruit });
});

// UPDATE - Edit a fruit by id
// Method: PUT
// Sending the updated fruit as a Json

app.put('/fruits/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedFruit = req.body;

    if (!updatedFruit || !updatedFruit.name) {
        return res.status(400).json({ message: 'Invalid data. Please provide name.' });
    }

    const fruitIndex = fruits.findIndex(fruit => fruit.id === id);

    if (fruitIndex !== -1) {
        fruits[fruitIndex].name = updatedFruit.name;
        res.json({ message: 'Fruit updated successfully', data: fruits[fruitIndex] });
    } else {
        res.status(404).json({ message: 'Fruit not found' });
    }
});

// DELETE - Remove a fruit by id
// Method: DELETE
// Sending the id of the fruit to be deleted as a Json

app.delete('/fruits/:id', (req, res) => {
    const id = parseInt(req.params.id); // Extract ID from URL

    // FInd the index of the fruit with the matching ID
    const fruitIndex = fruits.findIndex(fruit => fruit.id === id);

    if (fruitIndex !== -1) {
        const removedFruit = fruits.splice(fruitIndex, 1); // Removing the fruit by ID
        res.json({ message: 'Fruit deleted successfully', data: removedFruit });
    } else {
        // If not found, returning error
        res.status(404).json({ message: 'Fruit not found' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
