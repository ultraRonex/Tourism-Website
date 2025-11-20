const express = require("express");
const router = express.Router();
const Blogger = require("../models/Blogger");

// GET all bloggers
router.get("/", async (req, res) => {
  try {
    const bloggers = await Blogger.find();
    res.json(bloggers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST new blogger
router.post("/", async (req, res) => {
  const { name, email, bio } = req.body;
  try {
    const newBlogger = new Blogger({ name, email, bio });
    await newBlogger.save();
    res.status(201).json(newBlogger);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
