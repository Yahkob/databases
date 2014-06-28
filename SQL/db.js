var mysql = require('mysql');
var mysql = require('mysql');
/* If the node mysql module is not found on your system, you may
 * need to do an "sudo npm install -g mysql". */

/* You'll need to fill the following out with your mysql username and password.
 * database: "chat" specifies that we're using the database called
 * "chat", which we created by running schema.sql.*/
var dbConnection = mysql.createConnection({
  host: "localhost",
  user: "pairprogram",
  password: "password",
  database: "chat"
});

dbConnection.connect(function(err) {
  if (err) {
    throw err;
  } else {
    console.log('we are listening');
  }
});
/* Now you can make queries to the Mysql database using the
 * dbConnection.query() method.
 * See https://github.com/felixge/node-mysql for more details about
 * using this module.*/

dbConnection.query('SELECT user_id FROM users', function(err, column) {
  if (err) {
    throw err
  } else {
    console.log(column);
  }
});
exports.db = dbConnection;
