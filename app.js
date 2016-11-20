var express = require ("express");
var fs = require("fs");
var request = require('request');
var cheerio = require('cheerio');
var app = express();
var port = 3000;

app.get('/scrape',function(req,res){

    url = "http://www.imdb.com/title/tt1229340/";
    request(url,function(error,response,html){
        if(!error){
            var $ = cheerio.load(html);
            var title;
            var release;
            var rating;
            var json ={title:"",release:"",rating:""};

            $('.header').filter(function(){
                var data = $(this);
                console.log('data',data);
                 title = data.children().first().text();
                 release = data.children().last().children().text();
                json.title = title;
                json.release = release;
            });
            $('.star-box-giga-star').filter(function(){
                var data = $(this);
                  rating = data.text();
                json.rating = rating;
            });

        }
        fs.writeFile('output.json',JSON.stringify(json,null,4),function(err){
            console.log('File successfully written! - check your project directory for the output.json file')
        });
        res.send('Check your console!');
    });

});





var server = app.listen(port,function(){
   var port = server.address().port;
    console.log('server now open on port: ', port);
});
module.exports = app;