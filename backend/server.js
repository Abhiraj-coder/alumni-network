const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
const mongoURI = 'mongodb+srv://abhishekkaware09:abhishek246850@cluster246850.vpquy.mongodb.net/alumniNetwork?retryWrites=true&w=majority';
console.log('MongoDB URI:', mongoURI); // Optional log

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.log('MongoDB connection error: ', err));

// Routes
const registerRoute = require('./routes/register'); // Make sure the path is correct
app.use('/api', registerRoute); // This sets the base path for your routes


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
