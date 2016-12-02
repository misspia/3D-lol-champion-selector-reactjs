var fs = require('file-system');
var request = require('request');


var options = {
	baseUrl: 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?dataById=true&champData=all',
	access_key: '&api_key=RGAPI-55ef1ade-94f7-49f0-9f02-ea3d5ba3d415'
};

var srcFilePath = '../../src'
var url = options.baseUrl + options.access_key;

request( url, function(error, response, html){
	if(!error && response.statusCode == 200){
		var raw = JSON.stringify(JSON.parse(html), null, 2);
		// console.log(raw);
		
		fs.writeFile(srcFilePath + '/json/allChampions.json', raw, function(error){
			if (error) return console.log(error);
			console.log('download complete');
		});
	} else {
			console.log(response.statusCode);
		}
});