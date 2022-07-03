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

  var qq=""
  var te= 1
  te.toString
app.get("/home", (request, response)=>{

    var day=new Date().getFullYear()
    const axios = require("axios");

    const options = {
      method: 'GET',
      url: 'https://coingecko.p.rapidapi.com/coins/markets',
      params: {vs_currency: 'usd', page:" + te ", per_page: '100', order: 'market_cap_desc'},
      headers: {
        'X-RapidAPI-Key': '3c87ec6a25msh46b7d04fc169e7dp1cc42djsnd64003f09b54',
        'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (res) {
        // console.log(res.data);
        var hj= res.data
        // console.log(hj)
        qq = hj
        // response.render("home", {fan:day, fact:hj})
    }).catch(function (error) {
        // console.error(error);
        response.redirect("/")
    });
    console.log(qq)
    response.render("home", {fan:day, fact:qq, team:te})
        // const options = {
        //     "method": "GET",
        //     "hostname": "coingecko.p.rapidapi.com",
        //     "port": null,
        //     "path": "/coins/markets?vs_currency=usd&page=1&per_page=100&order=market_cap_desc",
        //     "headers": {
        //         "X-RapidAPI-Key": "3c87ec6a25msh46b7d04fc169e7dp1cc42djsnd64003f09b54",
        //         "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
        //         "useQueryString": true
        //     }
        // };
        
        // const req = http.request(options, function (res) {
        //     const chunks = [];
        
        //     res.on("data", function (chunk) {
        //         chunks.push(chunk);
        //     });
        
        //     res.on("end", function () {
        //         const body = Buffer.concat(chunks);
        //         // console.log(body.toString());
        //        var yt= body.toString()
        //        console.log(yt[2])
    
        //        response.render("home", {fan:day, fact:body.toString()})
        //     });
        // });
        // req.end();
    

    })
    //    var hj= [{"hgyfy": "ff3tt"}, {"hgyfy": "fftt4"},{"hgyfy": "ff5tt"},{"hgyfy": "fftt"}]
    //    console.log(hj[1])
    
app.post("/home", (request, response)=>{ 
  te++
  response.redirect("/home")})    
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

