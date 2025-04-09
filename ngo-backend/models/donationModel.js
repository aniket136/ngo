// models/donationModel.js
const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  amount: { type: Number, required: true },
  purpose: { type: String, default: "General" },
  method: { type: String, default: "UPI" },
  date: { type: Date, default: Date.now },
});

const Donation = mongoose.model("Donation", donationSchema);

module.exports = Donation;
