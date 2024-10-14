const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// Assuming you have two different models for Alumni and Student
const Alumni = require('../models/Alumni');
const Student = require('../models/Student');

router.post('/register', async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    if (role === 'alumni') {
      // Register as Alumni
      const newAlumni = new Alumni({ name, email, password });
      await newAlumni.save();
      res.status(201).json({ message: 'Alumni registered successfully' });
    } else if (role === 'student') {
      // Register as Student
      const newStudent = new Student({ name, email, password });
      await newStudent.save();
      res.status(201).json({ message: 'Student registered successfully' });
    } else {
      res.status(400).json({ message: 'Invalid role' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
});

module.exports = router;
