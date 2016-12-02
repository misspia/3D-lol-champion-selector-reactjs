var fs = require('file-system');
var request = require('request');

const EventEmitter = require('events');
require('events').EventEmitter.defaultMaxListeners = Infinity;

var srcFilePath = '../../src'

fs.readFile(srcFilePath + '/json/allChampions.json', 'utf8', function (err, data) {
	if (err) throw err; 
	

	var obj = JSON.parse(data);
	// console.log(obj.data);
	// download_img('test', 1);

	// for(var champID in obj.keys){
	// 	console.log(champID + " ---> " + obj.keys[champID]);
	// 	// download_img(obj.keys[champID], 1);
	// 	// sleepFor(2000);
	// }  
	for(var champ in obj.data){
		var champObj = obj.data[champ],
			champKey = champObj.key,
			champSkins = champObj.skins;
		console.log(champKey);

		for(i = 0; i < champSkins.length; i ++){
			var skinID = champSkins[i].num;
			console.log(skinID);
			download_img(champKey, skinID, 1);
			sleepFor(3000);
		}

	}    	
});


var options = {
	baseUrl: 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?dataById=true&champData=all',
	imgBaseUrl: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/',
	access_key: '&api_key=RGAPI-55ef1ade-94f7-49f0-9f02-ea3d5ba3d415'
};


function download_img(champKey, skinID, attempts) {

	var url = options.imgBaseUrl + champKey + '_' + skinID + '.jpg';

	console.log(url);
	request(url)
		.on('error', function(err) {
		    console.log("couldn't download " );
		    download_gif(item, attempts++);

		    if (attempts > 3) {
		    	console.log("failed more than 3 times, not retrying");
		    }
		})
		.pipe(fs.createWriteStream("./img/champ-" + champKey + "_" + skinID + ".png"));
}

function sleepFor( sleepDuration ){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ /* do nothing */ } 
}




