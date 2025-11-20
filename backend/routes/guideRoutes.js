// const express = require("express");
// const router = express.Router();
// const Guide = require("../models/Guide");

// // GET all guides
// router.get("/", async (req, res) => {
//   try {
//     const guides = await Guide.find();
//     res.json(guides);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // POST a new guide
// router.post("/", async (req, res) => {
//   const { name, experience, languages, location, contact, imageUrl } = req.body;

//   const newGuide = new Guide({
//     name,
//     experience,
//     languages,
//     location,
//     contact,
//     imageUrl,
//   });

//   try {
//     const savedGuide = await newGuide.save();
//     res.status(201).json(savedGuide);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// module.exports = router;
const express = require("express");
const router = express.Router();
const Guide = require("../models/Guide");

// POST a new guide
router.post("/", async (req, res) => {
  try {
    const guide = new Guide(req.body);
    await guide.save();
    res.status(201).json(guide);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET all guides
router.get("/", async (req, res) => {
  try {
    const guides = await Guide.find();
    res.json(guides);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
