const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({nome: 'Raoni', idade: 25});
});


router.post('/create', (req, res) => {


	return res.json(req.body, 201);


});

module.exports = router;
