var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.get("/friends", function(req, res){
    var friends = ["John", "Shea", "Sam", "Jessica", "Brett"];
    res.render("friends", {friends: friends});
});

app.post("/addfriend", function(req, res){
    res.send("You have reached the post route.");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started.");
});
