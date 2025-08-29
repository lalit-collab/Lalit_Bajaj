const arrayService = require('../services/arrayService');
const validator = require('../utils/validator');

exports.processArray = (req, res) => {
  try {
    // Validate request body
    const { isValid, error } = validator.validateRequest(req.body);
    if (!isValid) {
      return res.status(400).json({
        is_success: false,
        error: error
      });
    }

    // Extract data from request
    const { data } = req.body;

    // Process array data
    const result = arrayService.processArrayData(data);

    // Add user information
    result.user_id = process.env.USER_ID;
    result.email = process.env.EMAIL;
    result.roll_number = process.env.ROLL_NUMBER;
    result.is_success = true;

    // Return response
    return res.status(200).json(result);
  } catch (error) {
    console.error('Error processing array:', error);
    return res.status(500).json({
      is_success: false,
      error: 'Internal server error'
    });
  }
};
