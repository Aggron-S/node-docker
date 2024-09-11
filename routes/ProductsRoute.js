const express = require("express");
const router = express.Router();

// User defined Controllers
// const UserController = require("../controller/UserController");
// router.get('/', UserController.get);
const GetProducts = require("../services/GetProducts");

router.get('/', (req, res) => {
  GetProducts((err, productsData) => {
    if (err) {
      console.error("putangina error:",err);
      return res.status(500).send('Error reading the file.');
    }
    res.json(productsData)
  });
  console.log("Someone gets the data from the server.");
}),

module.exports = router;