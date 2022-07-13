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

  var jak=""
  var mak=[]  
  var dak=[]
  var fir= "bitcoin"
  var dir= "tron"
  var qq=""
  var bad =""
  var te= 1
  te.toString
  var fc=""
  var sc=""
  var fn=1
  var fm=""
  var sm=""
  var ffn=""
  var ssn=""

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
        // console.log(mak)
        // response.render("home", {fan:day, fact:hj})
        var dh= ffn/ssn
    response.render("home", {fan:day, fact:qq, team:te, fun:bad, kot:jak, fm:fm, sm:sm, dh:dh, fc:fc, sc:sc, fn:fn})

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
// lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll
// const axios = require("axios");

const tions = {
  method: 'GET',
  url: 'https://coingecko.p.rapidapi.com/coins/'+ fir,
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

axios.request(tions).then(function (response) {
	// console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

// const axios = require("axios");
// llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll
const ptions = {
  method: 'GET',
  url: 'https://coingecko.p.rapidapi.com/coins/'+ dir,
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

axios.request(ptions).then(function (response) {
	// console.log(response.data);
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
    
app.post("/return", (request, response)=>{
  response.redirect("/home")
})    
var ff=""
var faith = ""
app.get("/discover-crypto", (request, response)=>{
  const axios = require("axios");
  var day=new Date().getFullYear()
  if(mak.includes(ff)){
   var tah=mak.indexOf(ff)
    console.log(dak[tah])

const options = {
  method: 'GET',
  url: 'https://coingecko.p.rapidapi.com/coins/'+ dak[tah],
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
	console.log(res.data);
  gas= res.data
  // if(mak.includes(ff)){
  //   console.log(mak.indexOf(ff))
  // }
  // console.log(ff)
  // console.log(mak)
  response.render("discover", {fan:day, fas:gas})
}).catch(function (error) {
	console.error(error);
});
  }
else{
  response.render("error", {fan:day})
}
})

app.post("/discover", (request, response)=>{ 
  // var af = request.body.current.replaceAll(" ", "-")
  // var tim = ""
  // tim= af
  // faith=tim.toLowerCase()
  // console.log(faith)
  ff= request.body.current.toLowerCase()
  // console.log(ff)
  // kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
  response.redirect("/discover-crypto")})

  app.post("/exchange", (request, response)=>{ 
    var af = request.body.current.replaceAll(" ", "-")
    var tim = ""
    tim= af
    paith=tim.toLowerCase()
    // console.log(faith)
    response.redirect("/discover-exchange")})


app.get("/signup", (request, response)=>{response.render("signup")})

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

app.post("/cover", (request, response)=>{ 
  var firstcoin= request.body.firstcoin.toLowerCase()
  var firstnumber= request.body.firstnumber.toLowerCase()
  var secondcoin= request.body.secondcoin.toLowerCase()
  // var secondnumber= request.body.secondnumber.toLowerCase()
  fc = firstcoin;
  sc= secondcoin;
  fn= firstnumber;
  // sn= secondnumber;
  console.log(firstcoin)
  const axios = require("axios");
  if(mak.includes(fc)){
    var tah=mak.indexOf(fc)
     console.log(dak[tah])
 
const potions = {
  method: 'GET',
  url: 'https://coingecko.p.rapidapi.com/coins/'+ dak[tah],
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

axios.request(potions).then(function (response) {
	fm= response.data.image["large"];
	ffn=((response.data.market_data["current_price"]["usd"])*fn);

}).catch(function (error) {
	console.error(error);
});
  }
  else if(mak.includes(fc)==false){
    var af = fc.replaceAll(" ", "-")
   //  console.log(af)
 var tim = ""
 tim= af.toLowerCase()
 console.log(tim)
   // if(dak.includes(tim)){
     // console.log(tim)
     const options = {
       method: 'GET',
       url: 'https://coingecko.p.rapidapi.com/coins/'+ tim,
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
       fm= response.data.image["large"];
       ffn= (response.data.market_data["current_price"]["usd"])*fn;
     }).catch(function (error) {
       console.error(error);
     });
 }

 if(mak.includes(sc)){
  var tah=mak.indexOf(sc)
   console.log(dak[tah])

const potions = {
method: 'GET',
url: 'https://coingecko.p.rapidapi.com/coins/'+ dak[tah],
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

axios.request(potions).then(function (response) {
sm=response.data.image["large"];
ssn=response.data.market_data["current_price"]["usd"];

}).catch(function (error) {
console.error(error);
});
}
else if(mak.includes(sc)==false){
  var af = fc.replaceAll(" ", "-")
 //  console.log(af)
var tim = ""
tim= af.toLowerCase()
console.log(tim)
 // if(dak.includes(tim)){
   // console.log(tim)
   const options = {
     method: 'GET',
     url: 'https://coingecko.p.rapidapi.com/coins/'+ tim,
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
     console.log(response.data.image["large"]);
     console.log(response.data.market_data["current_price"]["usd"]);
   }).catch(function (error) {
     console.error(error);
   });
}

  response.redirect("/home")})
app.get("/login", (request, response)=>{
    var name=request.body.username
    var pass=request.body.password
    console.log(pass)
    var day=new Date().getFullYear()
    response.render("login", {fan:day})
   })
app.post("/login",(request, response)=>{
    var name=request.body.username
    var pass=request.body.password
    console.log(pass)
    response.redirect("/")})
app.post("/", (request, response)=>{response.redirect("/home")})    
const axios = require("axios");
// jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
const coptions = {
  method: 'GET',
  url: 'https://coingecko.p.rapidapi.com/coins/list',
  headers: {
    'X-RapidAPI-Key': '3c87ec6a25msh46b7d04fc169e7dp1cc42djsnd64003f09b54',
    'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
  }
};

axios.request(coptions).then(function (response) {
  // console.log(response.data);
  jak=response.data
  for(let i=0; i<=12099; i++){
  mak.push(response.data[i].name.toLowerCase())
  }
  for(let i=0; i<=12099; i++){
    dak.push(response.data[i].id.toLowerCase())
    }

}).catch(function (error) {
  console.error(error);
});
var sfc=""
var ssc=""
var sfn=""
var sfm=""
var ssfn=""
var ssm=""
var sssn=""
// app.get("/convert", (request, response)=>{
//   var day=new Date().getFullYear()
//   var th= ssfn/sssn
//   console.log(th)
//   response.render("convert", {sfc:sfc, ssc:ssc, sfn:sfn, sfm:sfm, ssfn:ssfn, ssm:ssm, sssn:sssn, th:th, fan:day})})
// qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
app.post("/dover", (request, response)=>{ 
  var firstcoin= request.body.firstcoin.toLowerCase()
  var firstnumber= request.body.firstnumber.toLowerCase()
  var secondcoin= request.body.secondcoin.toLowerCase()
  // var secondnumber= request.body.secondnumber.toLowerCase()
  sfc = firstcoin;
  ssc= secondcoin;
  sfn= firstnumber;
  // sn= secondnumber;
  console.log(firstcoin)
  const axios = require("axios");
  if(mak.includes(sfc)){
    var tah=mak.indexOf(sfc)
     console.log(dak[tah])
 
const potions = {
  method: 'GET',
  url: 'https://coingecko.p.rapidapi.com/coins/'+ dak[tah],
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

axios.request(potions).then(function (response) {
	sfm= response.data.image["large"];
  // console.log(sfm)
	ssfn=((response.data.market_data["current_price"]["usd"])*sfn);
}).catch(function (error) {
	console.error(error);
});
  }
  else if(mak.includes(sfc)==false){
    var af = sfc.replaceAll(" ", "-")
   //  console.log(af)
 var tim = ""
 tim= af.toLowerCase()
 console.log(tim)
   // if(dak.includes(tim)){
     // console.log(tim)
     const options = {
       method: 'GET',
       url: 'https://coingecko.p.rapidapi.com/coins/'+ tim,
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
       sfm= response.data.image["large"];
       ssfn= (response.data.market_data["current_price"]["usd"])*sfn;
     }).catch(function (error) {
       console.error(error);
     });
 }

 if(mak.includes(ssc)){
  var tah=mak.indexOf(ssc)
   console.log(dak[tah])

const potions = {
method: 'GET',
url: 'https://coingecko.p.rapidapi.com/coins/'+ dak[tah],
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

axios.request(potions).then(function (response) {
ssm=response.data.image["large"];
sssn=response.data.market_data["current_price"]["usd"];

}).catch(function (error) {
console.error(error);
});
}
else if(mak.includes(ssc)==false){
  var af = ssc.replaceAll(" ", "-")
 //  console.log(af)
var tim = ""
tim= af.toLowerCase()
console.log(tim)
 // if(dak.includes(tim)){
   // console.log(tim)
   const options = {
     method: 'GET',
     url: 'https://coingecko.p.rapidapi.com/coins/'+ tim,
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
     console.log(response.data.image["large"]);
     console.log(response.data.market_data["current_price"]["usd"]);
   }).catch(function (error) {
     console.error(error);
   });
}

  response.redirect("/convert")})
  // console.log(ssfn)
  //  kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
  app.get("/convert", (request, response)=>{
    var day=new Date().getFullYear()
    var th= ssfn/sssn
    // console.log(th)
    response.render("convert", {sfc:sfc, ssc:ssc, sfn:sfn, sfm:sfm, ssfn:ssfn, ssm:ssm, sssn:sssn, th:th, fan:day})}) 

app.listen(process.env.PORT || 3000, ()=>{console.log("ready")})

