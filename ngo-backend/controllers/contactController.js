const Message = require("../models/Message");

const submitMessage = async (req, res) => {
  try {
    console.log("Received body:", req.body); // DEBUG

    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Required fields missing" });
    }

    const newMessage = new Message({ name, email, phone, message });
    await newMessage.save();

    res.status(201).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { submitMessage };
