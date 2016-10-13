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
};

//================================================================================
  // Middleware
//================================================================================


//================================================================================
  // Routing
//================================================================================
app.use(express.static( __dirname + '/../client'));

// handle get request from client
app.get('/name', function(reqClient, resClient) {
  console.log('receive GET request');
  var summoner = reqClient.url.slice(reqClient.url.indexOf('?') + 1);
  var riotId;
  var recentGameData;

  // send get request to riot
  request.get(riotEndpts.summonerID + summoner + riotEndpts.apiKey, function(err, reqRiot, resRiot) {
    if (JSON.parse(resRiot).hasOwnProperty(summoner)) {
      riotId = JSON.parse(resRiot)[summoner]['id'];
      if (JSON.parse(resRiot)[summoner]) {
        request.get(riotEndpts.gameLog + riotId + '/recent' + riotEndpts.apiKey, function(err, reqRiot, resRiot) {
          recentGameData = util.dataCleaner(JSON.parse(resRiot).games);
          resClient.writeHead(201);
          resClient.end(JSON.stringify(recentGameData));
        });
      }
    } else {
      resClient.send(404).end();
    }
  });
});

console.log('Server is listening on port 1337');
app.listen(1337);
