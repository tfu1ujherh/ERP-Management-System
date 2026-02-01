// const express = require("express");
// const router = express.Router();

// const authMiddleware = require("../middleware/authMiddleware");
// const roleMiddleware = require("../middleware/roleMiddleware");

// // Only logged-in users
// router.get("/", authMiddleware, (req, res) => {
//   res.json("All products");
// });

// // Only Admin can add product
// router.post(
//   "/",
//   authMiddleware,
//   roleMiddleware("Admin"),
//   (req, res) => {
//     res.json("Product added");
//   }
// );

// module.exports = router;


const express = require("express");
const router = express.Router();
const { addProduct, getProducts } = require("../controllers/productController");
const auth = require("../middleware/authMiddleware");

router.post("/", auth, addProduct);
router.get("/", auth, getProducts);

module.exports = router;
