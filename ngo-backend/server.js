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
mongoose.connect("mongodb+srv://aniket239209:<db_password>@cluster0.e9bdef0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/donations", donationRoutes);

// Server listen
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
