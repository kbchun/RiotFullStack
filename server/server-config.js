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
  var profile;
  var riotId;
  var recentGameData;

  // send get request to riot
  request.get(riotEndpts.summonerID + summoner + riotEndpts.apiKey, function(err, reqRiot, profileResRiot) {
    if (JSON.parse(profileResRiot).hasOwnProperty(summoner)) {
      profile = JSON.parse(profileResRiot)[summoner];
      riotId = profile['id'];
      if (profile) {
        request.get(riotEndpts.gameLog + riotId + '/recent' + riotEndpts.apiKey, function(err, reqRiot, gamesResRiot) {
          recentGameData = util.dataCleaner(JSON.parse(gamesResRiot).games);
          var username = profile['name'];
          var data = {};
          data[username] = recentGameData;
          resClient.writeHead(201);
          resClient.end(JSON.stringify(data));
        });
      }
    } else {
      resClient.sendStatus(404).end();
    }
  });
});

console.log('Server is listening on port 1337');
app.listen(1337);
