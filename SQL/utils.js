var prop = require('./prop.js');
var db = require('./db.js');
var helpers = require('./helpers.js');
var utils = {};

utils.defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  "Content-Type": "text/plain"
};

utils.body = function(request) {
  var body = '';

  request.on('data', function(chunk) {

    body += chunk;
  });

  request.on('end', function() {
    var data = JSON.parse(body);
    data['createdAt'] = new Date();

    var username = data.username;
    var message = data.text;
    var roomname = data.roomname;
    var createdAt = data.createdAt;
    console.log(data)
    helpers.checkUser(username);
    helpers.checkRoom(roomname);
    // helpers.postMessages(data);




    // console.log('select user_id from users where userID = ' + JSON.stringify(data.username));
    // var test = db.query(data, 'username');

    prop.results.unshift(data);
  });
};

module.exports = utils;
