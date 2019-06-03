var express = require('express');
var router = express.Router();

/* GET ps3 page. */
router.get('/', function(req, res, next) {
    let json_string = {"name": "Alfredo"};
    res.render("ps3", {
        test: JSON.stringify(json_string)
    });
    return "test";
});

module.exports = router;
