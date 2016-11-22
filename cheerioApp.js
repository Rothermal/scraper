var cheerio = require('cheerio');
var request = require('request');

request({method:'get',
url : 'http://github.com/showcases'
}, function(err, response, body){
    if (err) {
        return console.error(err);
    }
    $ = cheerio.load(body);
    $('li.collection-card').each(function() {
        var href = $('a.collection-card-image', this).attr('href');
        if (href.lastIndexOf('/') > 0) {
            console.log($('h3', this).text());
        }
    });
});
