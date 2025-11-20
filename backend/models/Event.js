// // models/Event.js
// const mongoose = require('mongoose');

// const eventSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   date: { type: String, required: true },
//   location: { type: String, required: true },
//   description: { type: String, required: true },
//   imageUrl: { type: String, required: true },
// });

// const Event = mongoose.model('Event', eventSchema);
// module.exports = Event;


const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: String,
  date: String,
  location: String,
  imageUrl: String,
  description: String,
  imageUrl: String,
});

module.exports = mongoose.model('Event', eventSchema);
