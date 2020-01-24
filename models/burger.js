let orm = require('../config/orm.js');

let burger = {
    selectAll: (cb) => {
        orm.selectAll('burgers', cols, vals, (res) => {
            cb(res);
        });
    },

  insertOne: (cols, vals, cb) => {
    orm.insertOne('burgers', cols, vals, (res) => {
      cb(res);
    });
  },

  updateOne: (objColVals, condition, cb) => {
    orm.updateOne('burgers', objColVals, condition, (res) => {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgerController.js).
module.exports = burger;