const express = require("express");
const { addUser } = require("../controllers/user");

const router = express.Router();

// Controller

// Route
router.post("/users", addUser);

module.exports = router;
