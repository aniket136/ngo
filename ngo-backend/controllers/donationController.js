// controllers/donationController.js
const Donation = require("../models/donationModel");

const createDonation = async (req, res) => {
  const { name, email, amount, purpose, method } = req.body;

  try {
    const donation = new Donation({
      name,
      email,
      amount,
      purpose,
      method,
      date: new Date()
    });

    await donation.save();
    res.status(201).json({ message: "Donation recorded successfully" });
  } catch (error) {
    console.error("Donation Save Error:", error);
    res.status(500).json({ message: "Server Error: Unable to save donation" });
  }
};

module.exports = { createDonation };
