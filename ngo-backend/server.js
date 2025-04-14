const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const contactRoutes = require("./routes/contactRoutes.js"); // only if created
const donationRoutes = require("./routes/donationRoutes.js");

const app = express();
app.use(cors());
app.use(express.json());


// ✅ Add this: Root route to avoid "Cannot GET /"
app.get("/", (req, res) => {
  res.send("🚀 Backend is running!");
});

// ✅ MongoDB connection (updated: removed deprecated options)
mongoose.connect("mongodb://atlas-sql-67f360075ce5ed4cfe296802-s3p6p.a.query.mongodb.net/sample_mflix?ssl=true&authSource=admin")
.then(() => {
  console.log("✅ MongoDB connected");

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
})
.catch((err) => {
  console.error("❌ MongoDB connection error:", err);
});
// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/donations", donationRoutes);

// Server listen

