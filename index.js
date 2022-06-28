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

app.get("/home", (request, response)=>{
    var day=new Date().getFullYear()
    const options = {
        "method": "GET",
        "hostname": "coingecko.p.rapidapi.com",
        "port": null,
        "path": "/coins/markets?vs_currency=usd&page=1&per_page=100&order=market_cap_desc",
        "headers": {
            "X-RapidAPI-Key": "3c87ec6a25msh46b7d04fc169e7dp1cc42djsnd64003f09b54",
            "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
            "useQueryString": true
        }
    };
    
    const req = http.request(options, function (res) {
        const chunks = [];
    
        res.on("data", function (chunk) {
            chunks.push(chunk);
        });
    
        res.on("end", function () {
            const body = Buffer.concat(chunks);
            // console.log(body.toString());
            // var dave=body.toString()
            // response.render("home", {fd:dave})
            response.render("home", {fan:day})
        });
    });
    
    req.end();
})   

app.get("/signup", (request, response)=>{response.render("signup")})
app.get("/convert", (request, response)=>{response.render("convert")})


app.get("/login", (request, response)=>{
    var name=request.body.username
    var pass=request.body.password
    console.log(pass)
    var day=new Date().getFullYear()
    response.render("login", {fan:day}
    )
   })
app.post("/login",(request, response)=>{
    var name=request.body.username
    var pass=request.body.password
    console.log(pass)
    response.redirect("/")})
app.post("/", (request, response)=>{response.redirect("/home")})    

app.listen(process.env.PORT || 3000, ()=>{console.log("ready")})

