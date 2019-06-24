const express = require('express');
const router = express.Router();
const config = require('../config');
const twitter = require('twitter');

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/ps8db";

/* GET home page. */
router.get('/', function(req, res, next) {
    const twitterClient = new twitter({
        consumer_key: config.consumer_key,
        consumer_secret: config.consumer_secret,
        access_token_key: config.access_token_key,
        access_token_secret: config.access_token_secret
    });

    let tweetResponse = "";

    twitterClient.get('search/tweets', {q: 'guitar'}, function(error, tweets, response) {
        if(error) throw error;
        tweetResponse = tweets['statuses'][0]['text'];
        console.log(tweetResponse);  // The favorites.

        MongoClient.connect(url, function(err, db) {
           if (err) throw err;
           let dbo = db.db("ps8db");

           dbo.collection("ps8db").insertOne({'text': tweetResponse }, function(err, res){
               if (err) throw err;
               console.log("Inserted 1 doc");
               db.close();
           });
        });

        res.render('ps8', { title: tweetResponse });
    });
});

module.exports = router;
