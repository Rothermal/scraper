var express = require ("express");
var fs = require("fs");
var request = require('request');
var cheerio = require('cheerio');
var app = express();
var port = 3000;

app.get('/scrape',function(req,res){

});





var server = app.listen(port,function(){
   var port = server.address().port;
    console.log('server now open on port: ', port);
});
module.exports = app;