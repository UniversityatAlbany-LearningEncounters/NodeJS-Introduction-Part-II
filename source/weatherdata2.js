var http = require('http');

var city    = process.argv[2];
var country = process.argv[3];

var options = {
  host: 'api.openweathermap.org',
  path: '/data/2.5/weather?q=' + city + ',' + country
};

callback = function(response) {

  response.on('data', function (inputdata) {
    var jsonstr = JSON.parse(inputdata);
    console.log(JSON.stringify(jsonstr,null,2));
  });

}

http.request(options, callback).end();
