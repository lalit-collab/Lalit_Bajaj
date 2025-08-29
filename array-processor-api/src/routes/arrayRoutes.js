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

router.get('/bfhl', (req, res) => {
  res.status(200).json({
    message: 'This endpoint requires a POST request with array data',
    example_request: {
      data: ["a", "1", "334", "4", "R", "$"]
    },
    documentation: "See the root path (/) for API information"
  });
});
// BFHL route - main functionality
router.post('/bfhl', arrayController.processArray);

module.exports = router;
