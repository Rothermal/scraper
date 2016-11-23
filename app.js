var express = require ("express");
var fs = require("fs");
var needle = require('needle');
var request = require('request');
var cheerio = require('cheerio');
var app = express();
var port = 3000;

app.get('/scrape',function(req,res){
console.log('hit route');
   var url = "http://www.imdb.com/title/tt1229340/";
    needle.get( url,function(error,response){
        if(!error){
            var $ = cheerio.load(response.body);
            console.log(cheerio.load(response.body));
            var title;
            var release;
            var rating;
            var json ={title:"why",release:"dont",rating:"you work!"};

            $('.title_wrapper').filter(function(){
                var data = $(this);
                console.log('data',data);
                 title = data.children().first().text().trim();
                 release = data.children().last().children().text().trim();
                json.title = title;
                json.release = release;
            });
            $('.ratingValue').filter(function(){
                var data = $(this);
                console.log("hello");
                  rating = data.text().trim();
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