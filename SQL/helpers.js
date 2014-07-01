var mysql = require('mysql');
var db = require('./db.js');

module.exports.pullMessages = function(callback) {
  db.query('SELECT * from messages JOIN users on messages.user_id_users = users.user_id', function(err, rows){
    if (err) {
      throw err;
    }
    callback(rows);
  });
};

module.exports.postMessages = function(data){

}


module.exports.checkUser = function(user){
  db.query("SELECT user_id FROM users WHERE username LIKE '"+user+"'", function(err,rows){
    if(err) {
      throw err;
    }
    if(!rows[0]) {
      console.log('user does not exist inserting');
      db.query("INSERT into users (username) values('"+ user+"')",function(err,results){
        if(err){
          return err
        }
        console.log('just inserted,', user + results.insertId);
      });
    } else {
      console.log(rows[0]);
    }
  });
};

module.exports.checkRoom = function(room){
  db.query("SELECT id FROM rooms WHERE roomname LIKE '"+room+"'", function(err,rows){
      if(err) {
        throw err;
      }
      if(!rows[0]) {
        console.log('room does not exist');
        db.query("INSERT into rooms (roomname) values('"+room+"')");
      } else {
        console.log(rows[0]);
      }
  });
};


