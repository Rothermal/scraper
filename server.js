var request = require('request');
var cheerio = require('cheerio');
var areaCode = 55316;
var url = "http://www.wunderground.com/cgi-bin/findweather/getForecast?&query=" + areaCode;
// not having much success getting this tutorial to print out anything but null.
// going to move on to a scotch io webscaping tutorial

request(url,function(error, response, body){
    if(!error) {
        var $ = cheerio.load(body);
        var temperture = $("[data-variable='temperture'] .wx-value").html();
        console.log(temperture);
        //console.log("Its " + temperture + " degrees Farenheit");
        //console.log(body);
        //console.log(response);
    }else {
        console.log("We had an error ", error);
    }
});