const connection = require("../config/connection.js");

// The below helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
const printQuestionMarks = num => {
  let arr = [];

  for (let i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
const objToSql = ob => {
  let arr = [];

  for (let key in ob) {
    let value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

const orm = {
  all: function (table, cb) {
    let queryString = `SELECT * FROM ${table}`;
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create: function (table, cols, vals, cb) {
    let queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)})`
    console.log(queryString);
    connection.query(queryString, vals, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  update: function (table, objColVals, condition, cb) {
    let queryString = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition}`;

    console.log(queryString);
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  delete: function (table, condition, cb) {
    let queryString = `DELETE FROM ${table} WHERE ${condition}`;
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

module.exports = orm;