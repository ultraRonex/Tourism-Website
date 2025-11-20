// const express = require("express");
// const router = express.Router();
// const Blogger = require("../models/BloggerModel");

// // GET all bloggers
// router.get("/", async (req, res) => {
//   try {
//     const bloggers = await Blogger.find();
//     res.json(bloggers);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // POST a new blogger
// router.post("/", async (req, res) => {
//   const { name, email, bio } = req.body;
//   try {
//     const newBlogger = new Blogger({ name, email, bio });
//     const savedBlogger = await newBlogger.save();
//     res.status(201).json(savedBlogger);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const Blogger = require("../models/BloggerModel");

// GET all bloggers
router.get("/", async (req, res) => {
  try {
    const bloggers = await Blogger.find();
    res.json(bloggers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new blogger
router.post("/", async (req, res) => {
  const { name, email, bio, imageUrl } = req.body; // ✅ include imageUrl
  try {
    const newBlogger = new Blogger({ name, email, bio, imageUrl }); // ✅ save it too
    const savedBlogger = await newBlogger.save();
    res.status(201).json(savedBlogger);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
