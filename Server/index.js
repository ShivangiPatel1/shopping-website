const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const UserRoute= require("./routes/user")
const AuthRoute= require("./routes/auth")
dotenv.config();
mongoose
  .connect(process.env.MONGO_URL) 
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

app.use(express.json())
app.use("/api/auth",AuthRoute)
app.listen(process.env.PORT||8080, () => {
  console.log("Backend Server is running");
});
app.use("/api/user",UserRoute)
