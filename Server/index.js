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
//web-socket server
const webSocketsServerPort = 8000;
const webSocketServer = require('websocket').server;
const http = require('http');
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
//WEb socket server code
// Spinning the http server and the websocket server.
const server = http.createServer();
server.listen(webSocketsServerPort);
console.log('listening on port 8000');

const wsServer = new webSocketServer({
    httpServer: server
  });
  
  const clients = {};
  
  // This code generates unique userid for everyuser.
  const getUniqueID = () => {
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    return s4() + s4() + '-' + s4();
  };
  
  wsServer.on('request', function (request) {
    var userID = getUniqueID();
    console.log((new Date()) + ' Recieved a new connection from origin ' + request.origin + '.');
  
    // You can rewrite this part of the code to accept only the requests from allowed origin
    const connection = request.accept(null, request.origin);
    clients[userID] = connection;
    console.log('connected: ' + userID + ' in ' + Object.getOwnPropertyNames(clients));
  
    connection.on('message', function(message) {
      if (message.type === 'utf8') {
        console.log('Received Message: ', message.utf8Data);
  
        // broadcasting message to all connected clients
        for(key in clients) {
          clients[key].sendUTF(message.utf8Data);
          console.log('sent Message to: ', clients[key]);
        }
      }
    })
  });
