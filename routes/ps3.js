let express = require('express');
const router = express.Router();

/* GET ps3 page. */
router.get('/', function(req, res, next) {
    let json_string = { name: "Alfredo"};

    res.render("ps3", {
        test: JSON.stringify(json_string)
    });
    return "test";
});

module.exports = router;
