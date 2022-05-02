// express server with bugs

const express = require("express");
const app = express();
const port = 4000;

// use express json
app.use(express.json());
// use express static
app.use(express.static("public"));

// pizza routes
const pizzaRoutes = require("./routes/pizzaRoutes");
// order routes
const orderRoutes = require("./routes/orderRoutes");
// use pizza routes
app.use("/pizza", pizzaRoutes);
// use order routes
app.use("/order", orderRoutes);

app.listen(port, () => {
  console.log`Example app listening on port ${port}!`;
});

module.exports = app;
