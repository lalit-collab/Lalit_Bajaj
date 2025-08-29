const express = require('express');
const router = express.Router();
const arrayController = require('../controllers/arrayController');

// Root route - for testing
router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Array Processor API is running',
    endpoints: [
      {
        method: 'POST',
        route: '/bfhl',
        description: 'Process array data'
      }
    ]
  });
});

// BFHL route - main functionality
router.post('/bfhl', arrayController.processArray);

module.exports = router;
