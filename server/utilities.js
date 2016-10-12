var champData = require('./champData');

var dataCleaner = function(results) {
  var data = [];
  for (var game in results) {
    var champion = champData.data[results[game].championId].name;
    var stats = results[game].stats;
    var utcSeconds = results[game].createDate;
    var d = new Date(utcSeconds);
    
    data.push({
      Champion: champion,
      'Game Mode': results[game].gameMode,
      'Win': stats.win,
      'Total Damage Dealt To Champions': stats.totalDamageDealtToChampions || 0,
      'Total Damage Taken': stats.totalDamageTaken || 0,
      'Wards Placed': stats.wardPlaced || 0,
      'Wards Killed': stats.wardKilled || 0,
      'Player Role': stats.playerRole,
      'Assists': stats.assists || 0,
      'Deaths': stats.numDeaths || 0,
      'Largest Multi Kill': stats.largestMultiKill || 0,
      'Kills': stats.championsKilled || 0,
      'Largest Killing Spree': stats.largestKillingSpree || 0,
      'Time Played': (stats.timePlayed / 60).toFixed(2),
      'IP Earned': results[game].ipEarned,
      'date': d.toLocaleString()
    });
  }
  return data;
};

module.exports.dataCleaner = dataCleaner;