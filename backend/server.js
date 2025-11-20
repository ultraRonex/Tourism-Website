const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const path = require("path"); // ✅ Needed for serving uploaded images

const guideRoutes = require("./routes/guideRoutes");
const bloggerRoutes = require("./routes/bloggerRoutes");
const userRoutes = require("./routes/userRoutes");
const messageRoutes = require("./routes/messages");
const eventRoutes = require("./routes/eventRoutes");
const chatRoutes = require('./routes/chatRoutes');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' })); // ✅ Allow larger payload for base64 images
app.use(bodyParser.json());

// ✅ Serve static uploaded guide images
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/guides", guideRoutes);
app.use("/api/bloggers", bloggerRoutes);
app.use("/api/users", userRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/events", eventRoutes);
app.use('/api/chat', chatRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server running at http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));
