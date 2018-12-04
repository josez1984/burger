var orm = require("../config/orm.js");
var table = "burgers";

var burger = {
    all: function(cb) {
        orm.all(table, function(err, result) {
            cb(err, result);
        })
    },
    insert: function(data, cb) {
        orm.insert(table, data, function(err, result) {
            cb(err, result);
        })
    },
    update: function(data, where, cb) {
        orm.update(table, data, where, function(err, result) {
            cb(err, result);
        })
    },
    lastDevoured: function(cb) {
        orm.lastDevoured(function(err, result) {
            cb(err, result);
        })
    }
}

module.exports = burger;