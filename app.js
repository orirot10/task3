// app.js

const express = require('express');
const app = express();
const port = 3000;

// Import the messageController
const messageController = require('./controllers/messageController.js');

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', messageController.getMessages); // Home page, displays messages
app.get('/new', messageController.renderNewMessageForm); // Form to add a new message
app.post('/new', messageController.addNewMessage); // Handle the form submission

// Start the server
app.listen(port, () => {
  console.log(`App is listening on http://localhost:${port}`);
});
