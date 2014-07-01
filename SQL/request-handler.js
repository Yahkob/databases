var results = [];
var objectId = 0;

var url = require('url');
var utils = require('./utils.js');
var prop = require('./prop.js');
// var mysql = require('mysql');
// var db = require('./db.js');
var helpers = require('./helpers.js');

  var bodyStorage = {};
exports.handleRequest = function(request, response) {

  var path = url.parse(request.url, true).path;

  var statusCode = 0;
  var headers = utils.defaultCorsHeaders;

  if (request.method === 'OPTIONS') {
    statusCode = 202;

  } else if (request.method === 'POST') {
    statusCode = 201;
    console.log(utils.body);
    utils.body(request);

  } else if (request.method === 'GET') {
    if (path.search(/classes/) !== -1) {
      var getMessages = function(rows){
        bodyStorage.results = rows;
      };
      helpers.pullMessages(getMessages);


      statusCode = 200;
    } else {
      statusCode = 404;
    }
  }


  response.writeHead(statusCode, headers);
  response.end(JSON.stringify(bodyStorage));

};
