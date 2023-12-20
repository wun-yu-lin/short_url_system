const express = require("express");
app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const indexController = require("./controller/index");



//coneect to MongoDB 
mongoose
  .connect(process.env.mongoDBurl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connect to mongoDB atlas database.");
  })
  .catch((err) => {
    console.log(err);
    console.log("Error! connect to mongoDB atlas database.");
  });


  //midderwave
  app.set('view engine', 'ejs')
  app.use(express.static('./public'));
  
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())

  //首頁 導入短網址＋首頁呈現 & 短網址Redircet API
  app.use("/", indexController); 
  



  //port listener
  app.listen(8080, (req, res) => {
    console.log("Server running on port 8080 is running.");
  });
  