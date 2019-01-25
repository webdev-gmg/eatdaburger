const orm = require("../config/orm.js");

const burger = {
  all: function (cb) {
    orm.all("burger", res => {
      cb(res);
    });
  },
  create: function (cols, vals, cb) {
    orm.create("burger", cols, vals, res => {
      cb(res);
    });
  },
  update: function (objColVals, condition, cb) {
    orm.update("burger", objColVals, condition, res => {
      cb(res);
    });
  },
  delete: function (condition, cb) {
    orm.delete("burger", condition, res => {
      cb(res);
    });
  }
};

module.exports = burger;