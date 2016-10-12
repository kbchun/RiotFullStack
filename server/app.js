var express = require('express'),
  _ = require('underscore'),
  Promise = require('bluebird'),
  request = require('request'),
  bodyParser = require('body-parser'),
  env = require('env'),
  mysql = require('mysql'),
  util = require('./utilities');


var app = express();
var riotEndpts = {
  summonerID: 'https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/',
  gameLog: 'https://na.api.pvp.net/api/lol/na/v1.3/game/by-summoner/',
  apiKey: '?api_key=4a99a25b-dd7e-4698-8256-9b3b773fa3ed'
}

//================================================================================
  // Middleware
//================================================================================


//================================================================================
  // Routing
//================================================================================
app.use(express.static( __dirname + '/../client'));

app.get('/name', function(req, response) {
  console.log('receive GET request')
  var summoner = req.url.slice(req.url.indexOf('?') + 1);
  var riotId;
  var recentGameData;

  request.get(riotEndpts.summonerID + summoner + riotEndpts.apiKey, function(err, req, res) {
    riotId = JSON.parse(res)[summoner]['id'];
    if(JSON.parse(res)[summoner]) {
      request.get(riotEndpts.gameLog + riotId + '/recent' + riotEndpts.apiKey, function(err, req, res) {
        recentGameData = util.dataCleaner(JSON.parse(res).games);
        response.writeHead(201);
        response.end(JSON.stringify(recentGameData));
      })
    }
  });
})

console.log('Server is listening on port 1337');
app.listen(1337);
