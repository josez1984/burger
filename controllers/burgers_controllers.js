var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(err, result) {
        burger.lastDevoured(function(err1, result1) {
            var data = {
                burgers: result,
                burgersDevoured: result1
            }
            res.render("index", { data: data });     
        })        
    });
});

router.post("/api/burgers", function(req, res) {
    var data = {
        name: req.body.name,
        devoured: 0
    };

    burger.insert(data, function(err, result) {
        res.json({ id: result.insertId });
    });
});

router.post("/api/burgers/eat", function(req, res) {
    var updateData = {
        devoured: 1
    };
    var where = {
        id: req.body.id
    }
    
    burger.update(updateData, where, function(err, result) {
        res.json(true);
    })
});

module.exports = router;