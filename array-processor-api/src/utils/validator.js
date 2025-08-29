/**
 * Validates the request body for the array processor API
 * @param {Object} requestBody - The request body to validate
 * @returns {Object} Validation result with isValid flag and optional error message
 */
exports.validateRequest = (requestBody) => {
  // Check if request body exists
  if (!requestBody) {
    return {
      isValid: false,
      error: 'Request body is required'
    };
  }

  // Check if data property exists
  if (!requestBody.data) {
    return {
      isValid: false,
      error: 'Data array is required'
    };
  }

  // Check if data is an array
  if (!Array.isArray(requestBody.data)) {
    return {
      isValid: false,
      error: 'Data must be an array'
    };
  }

  // Check if array contains valid elements
  for (const item of requestBody.data) {
    if (item === null || item === undefined) {
      return {
        isValid: false,
        error: 'Array contains null or undefined values'
      };
    }
  }

  // If all checks pass, return valid
  return {
    isValid: true
  };
};
