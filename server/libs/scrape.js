var jquery = require('jquery');
var fs = require('fs');
var Nightmare = require('nightmare'),
  nightmare = Nightmare();


var url = "http://www.thescoreesports.com";

var scrapeLinks = new Nightmare()
    .viewport(1000, 1000)
    .useragent("Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36")
    .goto(url + "/top_news")
    .wait(5000)
    .screenshot('esports.png')
    .evaluate(function(){
        
        var menu = $('.site-menu__nav-section.site-menu__nav-section--leagues').find('a'),
            links = [];
        
        $(menu).each(function(i, element){
            var linkObj = {
                href: $(this).attr('href'),
                title: $(this).children('span').text()
            };
            links.push(linkObj);
        });

        return links;

    })
    .end()
    .run(function (err, nightmare) {
      if (err) return console.log(err);
      console.log(nightmare);

      writeLinks(nightmare);
    });

function writeLinks(nightmare){
    fs.writeFile('../json/links.json', JSON.stringify(nightmare, null, 4), function(error){
        if (error) return console.log(error);
            console.log('writing complete');
    });    
};










