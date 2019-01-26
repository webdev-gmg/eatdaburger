// dependencies
var mysql = require("mysql");
var connection;

// uses JawsDB to configure connection
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
  });
}

// make connection
connection.connect(function(err) {
  if (err) {
    console.log("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id: " + connection.threadId);
});

// export connection for ORM
module.exports = connection;