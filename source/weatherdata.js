var http = require('http');

var options = {
  host: 'api.openweathermap.org',
  path: '/data/2.5/weather?q=Albany,US'
};

callback = function(response) {

  response.on('data', function (inputdata) {
    var jsonstr = JSON.parse(inputdata);
    console.log(JSON.stringify(jsonstr,null,2));
  });

}

http.request(options, callback).end();
