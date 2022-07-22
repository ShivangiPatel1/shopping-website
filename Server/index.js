const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const UserRoute= require("./routes/user")
const AuthRoute= require("./routes/auth")
const productRoute= require("./routes/product")
const cartRoute= require("./routes/cart")
const orderRoute= require("./routes/order")
const paymentRoute = require("./routes/payment")
dotenv.config();
const bodyparser = require('body-parser')
mongoose
  .connect(process.env.MONGO_URL) 
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));
// allow access from frontend
// Add headers before the routes are defined
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
app.use(express.json())
app.use("/api/auth",AuthRoute);
app.use("/api/users",UserRoute);
app.use("/api/products",productRoute);
app.use("/api/carts",cartRoute);
app.use("/api/orders",orderRoute);
app.use("/api/checkout",paymentRoute);


app.listen(process.env.PORT||8080, () => {
  console.log("Backend Server is running");
});
