var jquery = require('jquery');
var fs = require('fs');
var Nightmare = require('nightmare'),
  	nightmare = Nightmare();


fs.readFile('../json/links.json', 'utf8', function (err, data) {
    if (err) throw err; 
    var obj = JSON.parse(data);
	    for(i = 0; i < obj.length; i++){
	    	url = "http://www.thescoreesports.com" + obj[i].href;
	    	console.log(url);
	    	// scrapeArticles(obj[i].href, i);
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
        return "http://www.thescoreesports.com" + path;


        // return links;

    })
    .end()
    .run(function (err, nightmare) {
      if (err) return console.log(err);
      console.log(nightmare);

      // writeLinks(nightmare);
    });
}


function writeArticle(nightmare){
    fs.writeFile('../json/links.json', JSON.stringify(nightmare, null, 4), function(error){
        if (error) return console.log(error);
            console.log('writing complete');
    });    
};
