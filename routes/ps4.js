const express = require('express');
const request = require('request');
const config = require('../config');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    console.log(config.api_key);
    const url = "https://maps.googleapis.com/maps/api/directions/json?origin=Disneyland&destination=Universal+Studios+Hollywood&key=" + config.api_key;

    request.get(url, (err, response, body) => {

        if (err) { return console.log(err); }

        let gmapsResponse = body;
        console.log(gmapsResponse);
        
        res.render('ps4', { title: 'ps4', quote: gmapsResponse });
    });

});

module.exports = router;
