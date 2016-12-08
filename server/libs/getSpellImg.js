var fs = require('file-system');
var request = require('request');

const EventEmitter = require('events');
require('events').EventEmitter.defaultMaxListeners = Infinity;

var srcFilePath = '../../src';

fs.readFile(srcFilePath + '/json/allChampions.json', 'utf8', function (err, data) {
	if (err) throw err; 
	
	var obj = JSON.parse(data);

	for(var champ in obj.data){
		var champObj = obj.data[champ],
			champKey = champObj.key,
			champSpells = champObj.spells;

		// console.log("------------------------->" + champKey);
		
		for(var i = 0; i < champSpells.length; i ++){
			var imgName = champSpells[i].image.full;
			console.log(imgName);
			download_img(imgName, 1);
			sleepFor(1000);
		}
	}    	
});

var options = {
	baseUrl: 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?dataById=true&champData=all',
	imgBaseUrl: 'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/',
	access_key: '&api_key=RGAPI-55ef1ade-94f7-49f0-9f02-ea3d5ba3d415'
};


function download_img(imgName, attempts) {

	var url = options.imgBaseUrl + imgName;

	console.log(url);
	request(url)
		.on('error', function(err) {
		    console.log("couldn't download " );
		    download_gif(item, attempts++);

		    if (attempts > 3) {
		    	console.log("failed more than 3 times, not retrying");
		    }
		})
		.pipe(fs.createWriteStream( srcFilePath + "/img/spell/spell-" + imgName));
}

function sleepFor( sleepDuration ){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ /* do nothing */ } 
}




