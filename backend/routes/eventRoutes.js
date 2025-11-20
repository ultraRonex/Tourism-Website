// // const express = require('express');
// // const router = express.Router();
// // const Event = require('../models/Event');

// // // GET all events
// // router.get('/', async (req, res) => {
// //   try {
// //     const events = await Event.find();
// //     res.json(events);
// //   } catch (error) {
// //     res.status(500).json({ error: 'Failed to fetch events' });
// //   }
// // });

// // module.exports = router;


// const express = require('express');
// const router = express.Router();
// const Event = require('../models/Event');

// // POST a new event
// router.post('/', async (req, res) => {
//   try {
//     const { name, date, location, imageUrl, description } = req.body;
//     const newEvent = new Event({ name, date, location, imageUrl, description });
//     await newEvent.save();
//     res.status(201).json(newEvent);
//   } catch (error) {
//     console.error('Error saving event:', error);
//     res.status(500).json({ error: 'Failed to save event' });
//   }
// });

// module.exports = router;


// routes/eventRoutes.js
const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// GET all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch events' });
  }
});

// POST a new event
router.post('/', async (req, res) => {
  try {
    const { name, date, location, imageUrl, description } = req.body;
    const newEvent = new Event({ name, date, location, imageUrl, description });
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({ error: 'Failed to save event' });
  }
});

module.exports = router;
