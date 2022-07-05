const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const UserRoute= require("./routes/user")

dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));


app.listen(3000, () => {
  console.log("Backend Server is running");
});
app.use("/api/user",UserRoute)
