const express = require("express");
const router = express.Router();
const { submitMessage } = require("../controllers/contactController");

// POST route to submit contact form
router.post("/detail", submitMessage);

module.exports = router;
