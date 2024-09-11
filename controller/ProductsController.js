const GetProducts = require("../services/GetProducts");

module.exports = {
  get: (req, res) => {
    GetProducts((err, productsData) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error reading the file.');
      }
      res.send(productsData);
    });
    console.log("Someone gets the data from the server.");
  },
};