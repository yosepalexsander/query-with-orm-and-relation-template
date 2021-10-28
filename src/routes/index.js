const express = require("express");

const router = express.Router();

// Controller
// import controller function here
const { addUsers, getUsers, getUser, updateUser } = require("../controllers/user");

// Route
router.post("/users", addUsers);
router.get("/users", getUsers);
router.get("/users/:id", getUser);
router.put("/users/:id", updateUser);

module.exports = router;
