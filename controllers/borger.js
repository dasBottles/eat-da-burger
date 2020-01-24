const express = require('express');
const router = require('router');

let burger = require('../models/burger.js');

router.get('/', (req, res) => {
    burger.selectAll((data) => {
        let hbsObject = {
            burgers: data
        };
        res.render('index', hbsObject);
    })
});

router.post('/burgers', function(req, res) {
    burger.insertOne([
      'burger_name'
    ], [
      req.body.burger_name
    ], function(data) {
      res.redirect('/');
    });
  });
  
  router.put('/burgers/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;
  
    burger.updateOne({
      devoured: true
    }, condition, function(data) {
      res.redirect('/');
    });
  });
  
  module.exports = router;