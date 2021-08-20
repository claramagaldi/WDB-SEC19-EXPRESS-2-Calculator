const express = require("express");
const bodyParser = require("body-parser");

const app = express();
//encoded: grabs data from form
// extended: allows us to post nested objects
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  //res.send("Hello, World!");
  //console.log(__dirname);
  res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("Result: " + result);
})

app.listen(3000, function() {
  console.log("Server up and running!");
});
