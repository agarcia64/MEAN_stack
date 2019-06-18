const express = require('express');
const request = require('request');
const twitter = require('twitter');
const config = require('../config');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const client = new twitter({
    consumer_key: config.configData.consumer_key,
    consumer_secret: config.configData.consumer_secret,
    access_token_key: config.configData.access_token_key,
    access_token_secret: config.configData.access_token_secret
  });
  let path = "https://api.twitter.com/1.1/search/tweets.json";
  let params = "q=guitar";
  let tweetResponse = "";

  client.get('search/tweets', {q: 'guitar'}, function(error, tweets, response) {
    if(error) throw error;
    tweetResponse = tweets['statuses'][0]['text'];
    console.log(tweetResponse);  // The favorites.
    //console.log(response);  // Raw response object.

    res.render('tweet', { title: tweetResponse });
  });

});

module.exports = router;
