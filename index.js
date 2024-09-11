const express = require("express");
const app = express();

// View served to users
app.use(express.static("view"));

// User defined Routers
const productsRoute = require("./routes/ProductsRoute");
app.use('/products', productsRoute);

app.listen(3000, () => console.log(`Server listening on port: 3000`));
