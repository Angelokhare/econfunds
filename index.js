const express= require("express")
const body= require("body-parser");
const ejs = require("ejs")
const { request, response } = require("express");
const http = require("https");
const _ =require("lodash")
// const { request, response } = require("express")


var app =express()
app.use(body.urlencoded({extended:true}));
app.use(express.static("public"))
app.set("view engine", "ejs");

app.get("/", (request, response)=>{

    var day=new Date().getFullYear()
    response.render("index", {fan:day})})

  var qq=""
  var bad =""
  var te= 1
  te.toString
app.get("/home", (request, response)=>{


    var day=new Date().getFullYear()
    const axios = require("axios");

    const options = {
      method: 'GET',
      url: 'https://coingecko.p.rapidapi.com/coins/markets',
      params: {vs_currency: 'usd', page:te, per_page: '100', order: 'market_cap_desc'},
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
        console.log(bad)
        // response.render("home", {fan:day, fact:hj})
    response.render("home", {fan:day, fact:qq, team:te, fun:bad})

    }).catch(function (error) {
        // console.error(error);
        response.redirect("/")
    });
    // console.log(qq)
    // response.render("home", {fan:day, fact:qq, team:te})
    // const axios = require("axios");

const option = {
  method: 'GET',
  url: 'https://coingecko.p.rapidapi.com/exchanges',
  headers: {
    'X-RapidAPI-Key': '3c87ec6a25msh46b7d04fc169e7dp1cc42djsnd64003f09b54',
    'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
  }
};

axios.request(option).then(function (response) {
	// console.log(response.data);
  bad= response.data

}).catch(function (error) {
	console.error(error);
});
  })
   
    

app.post("/home", (request, response)=>{ 
  te+=1
  response.redirect("/home")})  

  app.post("/back", (request, response)=>{ 
    te-=1
    response.redirect("/home")}) 


var paith = ""
    app.get("/discover-exchange", (request, response)=>{
      const axios = require("axios");
      var day=new Date().getFullYear()
      const options = {
        method: 'GET',
        url: 'https://coingecko.p.rapidapi.com/exchanges/'+ paith,
        headers: {
          'X-RapidAPI-Key': '3c87ec6a25msh46b7d04fc169e7dp1cc42djsnd64003f09b54',
          'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (res) {
        // console.log(response.data);
        var tras= res.data
        response.render("exchange", {fan:day, fas:tras})
      }).catch(function (error) {
        console.error(error);
      });
    })
    
    
var faith = ""
app.get("/discover-crypto", (request, response)=>{
  const axios = require("axios");
  var day=new Date().getFullYear()
const options = {
  method: 'GET',
  url: 'https://coingecko.p.rapidapi.com/coins/'+ faith,
  params: {
    localization: 'true',
    tickers: 'true',
    market_data: 'true',
    community_data: 'true',
    developer_data: 'true',
    sparkline: 'false'
  },
  headers: {
    'X-RapidAPI-Key': '3c87ec6a25msh46b7d04fc169e7dp1cc42djsnd64003f09b54',
    'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
  }
};

axios.request(options).then(function (res) {
	// console.log(res.data);
  gas= res.data
  response.render("discover", {fan:day, fas:gas})
}).catch(function (error) {
	console.error(error);
});

})

app.post("/discover", (request, response)=>{ 
  var af = request.body.current.replaceAll(" ", "-")
  var tim = ""
  tim= af
  faith=tim.toLowerCase()
  // console.log(faith)
  response.redirect("/discover-crypto")})

  app.post("/exchange", (request, response)=>{ 
    var af = request.body.current.replaceAll(" ", "-")
    var tim = ""
    tim= af
    paith=tim.toLowerCase()
    // console.log(faith)
    response.redirect("/discover-exchange")})


app.get("/signup", (request, response)=>{response.render("signup")})
app.get("/convert", (request, response)=>{response.render("convert")})

app.get("/home/crypto/:hop", (request, response)=>{
  const axios = require("axios");
  var day=new Date().getFullYear()
const options = {
  method: 'GET',
  url: 'https://coingecko.p.rapidapi.com/coins/'+ request.params.hop,
  params: {
    localization: 'true',
    tickers: 'true',
    market_data: 'true',
    community_data: 'true',
    developer_data: 'true',
    sparkline: 'false'
  },
  headers: {
    'X-RapidAPI-Key': '3c87ec6a25msh46b7d04fc169e7dp1cc42djsnd64003f09b54',
    'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
  }
};

axios.request(options).then(function (res) {
	// console.log(res.data);
  gas= res.data
  response.render("search", {fan:day, fas:gas})
}).catch(function (error) {
	console.error(error);
});
  // df=request.params.hop
  // response.send(df+ "is a boy")
})


app.get("/home/exchange/:top", (request, response)=>{
  const axios = require("axios");
  var day=new Date().getFullYear()

  const options = {
    method: 'GET',
    url: 'https://coingecko.p.rapidapi.com/exchanges/'+ request.params.top,
    headers: {
      'X-RapidAPI-Key': '3c87ec6a25msh46b7d04fc169e7dp1cc42djsnd64003f09b54',
      'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (res) {
    // console.log(response.data);
    var tras= res.data
    response.render("exchange", {fan:day, fas:tras})
  }).catch(function (error) {
    console.error(error);
  });
})


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

