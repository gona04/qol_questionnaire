const express = require('express');
const router = express.Router();
const analysisController = require('../controllers/analysis-controller');

router.post('/analyze', analysisController.analyze);

module.exports = router;
