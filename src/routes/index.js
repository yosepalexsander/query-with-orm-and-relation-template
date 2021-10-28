const express = require("express");

const router = express.Router();

// Controller
// import controller function here
const { addUser, getUser, getUsers } = require("../controllers/user");

// Route
router.post("/users", addUser);
router.get("/users", getUsers);
router.get("/users/:id", getUser);

module.exports = router;
