const express = require("express");

const router = express.Router();

// Controller
const { addUsers, getUsers, getUser, updateUser, deleteUser } = require("../controllers/user");
const { getProducts, addProduct } = require("../controllers/product");
const { getTransactions, addTransaction } = require("../controllers/transaction");
// import controller function here

// Route
router.post("/users", addUsers);
router.get("/users", getUsers);
router.get("/users/:id", getUser);
router.patch("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

// add route here
router.get("/products", getProducts);
router.post("/products", addProduct);

router.get("/transactions", getTransactions);
router.post("/transactions", addTransaction);
module.exports = router;
