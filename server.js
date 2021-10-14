const express = require("express");
const app = express();

app.use(express.static('public'));

app.set("view engine", "ejs")
app.set("views", "./views")

var server = require("http").Server(app);
server.listen(3000)

app.get("/", function(res,req) {
    req.render("home.ejs")
  });
