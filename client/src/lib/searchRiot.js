var searchServer = (options, callback) => {
  $.ajax({
    url: 'http://127.0.0.1:1337/name',
    type:'GET',
    data: options.summoner,
    success: function(data) {
      callback(JSON.parse(data));
    },
    error: function(error) {
      console.log('error: ' + JSON.stringify(error));
    }
  })
};

window.searchServer = searchServer;
