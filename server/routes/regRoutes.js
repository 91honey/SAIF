const express = require('express');
const router = express.Router();
const { createRegistration } = require('../controllers/regController');

// POST /api/reg
router.post('/', createRegistration);

module.exports = router;