const express= require("express")
const body= require("body-parser");
const ejs = require("ejs")
const { request, response } = require("express");
const http = require("https");
// const { request, response } = require("express")


var app =express()
app.use(body.urlencoded({extended:true}));
app.use(express.static("public"))
app.set("view engine", "ejs");

app.get("/", (request, response)=>{

    var day=new Date().getFullYear()
    response.render("index", {fan:day})})

app.get("/home", (request, response)=>{response.send("Anticipate")})   

app.get("/signup", (request, response)=>{response.render("signup")})

app.get("/login", (request, response)=>{
    var day=new Date().getFullYear()
    response.render("login", {fan:day})})

app.post("/", (request, response)=>{response.redirect("/home")})    

app.listen(process.env.PORT || 3000, ()=>{console.log("ready")})

