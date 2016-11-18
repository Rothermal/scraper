var request = require('request');
var cheerio = require('cheerio');
var areaCode = 55316;
var url = "http://www.wunderground.com/cgi-bin/findweather/getForecast?&query=" + areaCode;


request(url,function(error, response, body){
    if(!error) {
        var $ = cheerio.load(response.body),
            temperture = $("[data-variable = 'temperture'].wx-value").html();
        console.log("Its " + temperture + " degrees Farenheit");
        //console.log(body);
        //console.log(response);
    }else {
        console.log("We had an error ", error);
    }
});