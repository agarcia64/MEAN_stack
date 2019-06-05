const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/ps4', function(req, res, next) {
    res.render('ps4', { displayText: 'UwU' });
});

module.exports = router;
