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

/* POST test page */
router.post('/', function(req, res){
    console.log("Post");
    let og = req.body;

    res.render("ps3c", {
        original: JSON.stringify(og)
    });

    console.log(JSON.stringify(og));
    return og;
});

module.exports = router;
