var express = require('express');
var app = express();
var bodyParser = require('body-parser');

module.exports = function(app, db) {

  app.get("/test", function(req, res){
    console.log("test");
    res.send("test");
  });
  app.get("/product/:gtin/:targetMarket", function(req, res){
    console.log('gtin '+req.params.gtin);
    res.send(JSON.stringify("product"));
  });
  app.head("/product/:gtin/:targetMarket", function(req, res){
    console.log("productTimestamp");
    res.send(JSON.stringify(req.headers));
  });

  //app.use(express.json());
  //app.use(express.urlencoded({ extended: false }));

  app.use(bodyParser.urlencoded({ extended: true }));
  //var isExcel = /excel/;
  // var urlencodedMiddleware = bodyParser.urlencoded({ extended: true });
  // app.use(function (req, res, next) {
  //   var type = req.get('Content-Type');
  //   console.log(type)
  //   if (isExcel.test(type)) {
  //     console.log('yes')
  //     return next();
  //   } else {
  //     console.log('no')
  //     return urlencodedMiddleware(req, res, next);
  //   }
  // });

  //app.use(bodyParser.json());
  app.use(bodyParser.json({
    type: function(req) {
        return req.get('Content-Type').indexOf('multipart/form-data') !== 0;
    },
  }));

  app.post("/product",function(req,res){
    console.log(req.body);
    let gtin = req.body.gtin
    res.send(JSON.stringify("You send in request: " + gtin));
  });
  app.put("/product/:gtin/:targetMarket",function(req,res){
    console.log(req.body);
    let gtin = req.body.gtin
    res.send(JSON.stringify(gtin));
  });
  app.delete("/product/:gtin/:targetMarket",function(req,res){
    console.log(req.body);
    let gtin = req.body.gtin
    res.send(JSON.stringify(gtin));
  });
  app.patch("/product/:gtin/:targetMarket",function(req,res){
    console.log(req.body);
    let gtin = req.body.gtin
    res.send(JSON.stringify(gtin));
  });
  app.post("/products/bulk",function(req,res){
    console.log('body'),console.log(req.body);
    gtin = (req.body[0].gtin)
    res.send(JSON.stringify("You send in request: " + gtin));
  });

  app.post("/products/file",function(req,res,next){
    console.log('body'),console.log(req.body);
    console.log(req.files);
    res.send(JSON.stringify("You send in request: "));
  });
};
