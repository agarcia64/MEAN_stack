const express = require('express');
const uid = require('uid-safe');

const router = express.Router();

/* GET a guid. */
router.get('/', function(req, res, next)
{
  let strUid = uid.sync(18);

  res.json({guid: strUid});
});

module.exports = router;
