const orm = require("../config/orm.js");

const burger = {
  all: function (cb) {
    orm.all("BURGERS", res => {
      cb(res);
    });
  },
  create: function (cols, vals, cb) {
    orm.create("BURGERS", cols, vals, res => {
      cb(res);
    });
  },
  update: function (objColVals, condition, cb) {
    orm.update("BURGERS", objColVals, condition, res => {
      cb(res);
    });
  },
  delete: function (condition, cb) {
    orm.delete("BURGERS", condition, res => {
      cb(res);
    });
  }
};

module.exports = burger;