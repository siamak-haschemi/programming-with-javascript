const express = require('express');
const router = express.Router();
const authService = require('./auth.service');

// routes
router.post('/authenticate', authenticate);
router.post('/logout', logout);

module.exports = router;

function authenticate(req, res, next) {
  authService.authenticate(req)
  .then(user => res.json(user))
  .catch(next);
}

function logout(req, res, next) {
  authService.logout(req.body)
  .then(response => res.json(response))
  .catch(next);
}
