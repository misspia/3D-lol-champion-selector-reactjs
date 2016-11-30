var jquery = require('jquery');
var fs = require('fs');
var module = require('./scrape');
var links = module.links;
var Nightmare = require('nightmare'),
  	nightmare = Nightmare();

fs.readFile('../json/links.json', 'utf8', function (err, data) {
    if (err) throw err; 
    var obj = JSON.parse(data);
	    for(i = 0; i < 1; i++){
	    	scrapeArticles(obj[i].href, i);
	    };	    	
   });

function scrapeArticles(path, num){
	var Articles = new Nightmare()
    .viewport(1000, 1000)
    .useragent("Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36")
    .goto("http://www.thescoreesports.com" + path)
    .wait(5000)
    .screenshot('esports.png')
    .evaluate(function(){
        var topnews = $('.marquee'),
            headlines = topnews.find('.marquee__navigation-tile'),
            articleHeadlines = [];

          $(headlines).each(function(i, element){
            var a = $(this).find('a');
                headline = {
                  link: a.attr('href'),
                  game: a.find('.marquee__navigation-tile__meta-data').children('span').eq(0).text(),
                  timeAgo: a.find('.marquee__navigation-tile__meta-data').children('span').eq(1).text(),
                  title: a.find('.marquee__navigation-tile__headline').text().replace(/\\/g, '') 
                };
                articleHeadlines.push(headline);
          });
          return articleHeadlines;
    })
    .end()
    .run(function (err, nightmare) {
      if (err) return console.log(err);
      console.log(nightmare);
      writeArticle(nightmare);

    });
};



function writeArticle(nightmare){
    fs.writeFile('../json/articles.json', JSON.stringify(nightmare, null, 4), function(error){
        if (error) return console.log(error);
            console.log('writing complete');
    });    
};



