const mongoose = require('mongoose');

const alumniSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // Additional fields specific to alumni can go here
});

module.exports = mongoose.model('Alumni', alumniSchema);
