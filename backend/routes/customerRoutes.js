const express = require("express");
const router = express.Router();
const { addCustomer, getCustomers } = require("../controllers/customerController");
const auth = require("../middleware/authMiddleware");

router.post("/", auth, addCustomer);
router.get("/", auth, getCustomers);

module.exports = router;
