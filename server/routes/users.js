/* user.js
Students's name: Arish Qureshi
StudentID: 301176321
Date: 22 June, 2022
Web app name: COMP229-F2022-MidTerm-301176321
*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;
