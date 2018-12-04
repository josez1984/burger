var connection = require("./connection.js");
var orm = {
    all: function(table, cb) {
        var query = `SELECT * FROM ${table}`;
        connection.query(query, function(err, result) {
            cb(err, result);
        });
    },
    insert: function(table, data, cb) {
        var query = `INSERT INTO ${table}(`;
        var cols = [];
        var vals = [];
        var plHolder = [];
        for(var col in data) {
            var val = data[col];
            cols.push(col);
            vals.push(val);
            plHolder.push('?');
        }        
        query += cols.toString() + ')';
        query += ' VALUES(';
        query += plHolder.toString() + ')';
        connection.query(query, vals, function(err, result) {
            cb(err, result);
        })
    },
    update: function(table, data, where, cb) {
        var query = `UPDATE ${table} SET `;
        var values = [];
        var whereVals = [];
        var params = [];
        for(var col in data) {
            var val = data[col];
            values.push(`${col} = ?`);
            params.push(val);
        }
        query += values.toString();
        query += ' WHERE 1 = 1 AND ';
        for(var col in where) {
            var val = where[col];
            whereVals.push(`${col} = ?`);
            params.push(val);
        }
        query += whereVals.toString(" AND ");        
        connection.query(query, params, function(err, result) {
            cb(err, result);
        });
    },
    lastDevoured: function(cb) {
        var query = "SELECT * FROM burgers WHERE devoured = 1 ORDER BY id DESC LIMIT 5";
        connection.query(query, function(err, result) {
            cb(err, result);
        });
    }
};

// Usage
// orm.all("burgers", function(err, result) {
//     console.log(result);
// });

// orm.insert("burgers", { name: "Melanie Burger", devoured: 0 }, function(err, result) {
//     console.log(result);
// });

// orm.update("burgers", { devoured: 1 }, { name: "Melanie Burger" }, function(err, result) {
//     console.log(result);
// })

module.exports = orm;