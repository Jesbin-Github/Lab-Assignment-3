Express CRUD Assignment - Group 6
=====================================

This project demonstrates how to:

Set up a basic Express.js server

Handle CRUD operations using a JSON file as a data source

📂 Project Structure

A3_Group6_Jesbin & Rojin/
│
├── data/
│   └── sampleData.json    # JSON file for CRUD operations
│
├── public/
│   ├── styles.css         # CSS file for styling
│   ├── Jesbin Jobi.jpg    # Profile image
│   └── Rojin Babu.jpg     # Profile image
│
├── views/
│   └── index.html         # HTML file displayed on the home page
│
├── file1.js               # Static website server using Express
├── file2.js               # Reads JSON file and displays it
├── file3.js               # Full CRUD operations using Express
├── package.json           # Node project file
└── README.md              # Project instructions

🚀 How to Run the Project
Step 1: Install Node.js and Express

Then, install Express by running:

npm install express

Step 2: Run Files with Nodemon or Node


📄 Run file1.js - Static Web Page

nodemon file1.js
Visit: http://localhost:3000

This page displays group member names with profile images and CSS styling.

📄 Run file2.js - Display JSON

nodemon file2.js
Visit: http://localhost:3000/fruits

This displays JSON data from the sampleData.json file.

📄 Run file3.js - CRUD Operations

nodemon file3.js
Visit: http://localhost:3000

Use Postman to test the following routes:

Postman Routes:

Add a new fruit:
POST http://localhost:3000/fruits

Example Body:

json

{ "id": 3, "name": "Orange", "origin": "Canada" }


Update a fruit:

PUT http://localhost:3000/fruits/3

Example Body:

json

{  "id": 3, "name": "Rasberry", "origin": "Canada" }

Delete a fruit:
DELETE http://localhost:3000/fruits/3

⚙️ Notes

Static files (CSS, images) must be inside the public folder.

The HTML file should be inside the views folder.

JSON data is stored inside the data folder.

