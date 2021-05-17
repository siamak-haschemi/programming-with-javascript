const express = require('express');
const router = express.Router();
const counterService = require('./counter.service');

// routes
router.post('/incrementByValue', incrementByValue);
router.post('/reset', reset);

module.exports = router;

function incrementByValue(req, res, next) {
  counterService.incrementByValue(req)
  .then(counter => res.json(counter))
  .catch(next);
}

function reset(req, res, next) {
  counterService.reset(req.body)
  .then(response => res.json(response))
  .catch(next);
}
