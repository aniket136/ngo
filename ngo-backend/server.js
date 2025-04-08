const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const contactRoutes = require("./routes/contactRoutes.js");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Add this: Root route to avoid "Cannot GET /"
app.get("/", (req, res) => {
  res.send("🚀 Backend is running!");
});

// ✅ MongoDB connection (updated: removed deprecated options)
mongoose.connect("mongodb://localhost:27017/contactform")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.use("/api/contact", contactRoutes);

// Server listen
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
