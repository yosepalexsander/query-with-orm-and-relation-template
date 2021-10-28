const express = require("express");

const router = express.Router();

// Controller
// import controller function here
const { addUsers, getUsers, getUser, updateUser, deleteUser } = require("../controllers/user");

// Route
router.post("/users", addUsers);
router.get("/users", getUsers);
router.get("/users/:id", getUser);
router.patch("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

module.exports = router;
