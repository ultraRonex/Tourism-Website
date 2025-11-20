// routes/events.js
const express = require('express');
const Event = require('../models/Event');
const router = express.Router();

// POST request to add a new event
router.post('/add', async (req, res) => {
  try {
    const { name, date, location, description, imageUrl } = req.body;

    const newEvent = new Event({
      name,
      date,
      location,
      description,
      imageUrl,
    });

    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    console.error('Error adding event:', error);
    res.status(500).send('Server error');
  }
});

// GET request to fetch all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).send('Server error');
  }
});

module.exports = router;
