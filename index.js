const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
// const _ = require("lodash");
const app = express();
const mongoose = require("mongoose");

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", function(req, res){
    res.render("home", {});
})
app.get("/photos", function(req, res){
    res.render("photos", {});
})

app.get("/shop", function(req, res){
    res.render("shop", {});
})
app.get("/about", function(req, res){
    res.render("about", {});
})
app.get("/odop", function(req, res){
    res.render("odop", {});
})


app.listen("3000", function(req, res) {
    console.log("server is started on port 3000");
})