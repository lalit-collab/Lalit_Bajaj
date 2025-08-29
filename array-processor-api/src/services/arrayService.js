/**
 * Process array data according to specified rules
 * @param {Array} data - Array of strings to process
 * @returns {Object} Processed data object
 */
exports.processArrayData = (data) => {
  // Initialize result object
  const result = {
    odd_numbers: [],
    even_numbers: [],
    alphabets: [],
    special_characters: [],
    sum: "0",
    concat_string: ""
  };

  // Regular expressions for classification
  const numberRegex = /^[0-9]+$/;
  const alphabetRegex = /^[a-zA-Z]$/;

  // Process each item in the array
  let numericSum = 0;
  let alphabetsArray = [];

  data.forEach(item => {
    // Convert to string if not already
    const strItem = String(item);

    // Check if item is a number
    if (numberRegex.test(strItem)) {
      const num = parseInt(strItem, 10);
      
      // Classify as odd or even
      if (num % 2 === 0) {
        result.even_numbers.push(strItem);
      } else {
        result.odd_numbers.push(strItem);
      }
      
      // Add to sum
      numericSum += num;
    } 
    // Check if item is a single alphabet
    else if (alphabetRegex.test(strItem)) {
      // Add to alphabets array (uppercase)
      result.alphabets.push(strItem.toUpperCase());
      alphabetsArray.push(strItem);
    }
    // Check if item is a string of multiple alphabets
    else if (/^[a-zA-Z]+$/.test(strItem)) {
      // Add to alphabets array (uppercase)
      result.alphabets.push(strItem.toUpperCase());
      alphabetsArray.push(strItem);
    }
    // Otherwise, it's a special character
    else if (strItem.length === 1) {
      result.special_characters.push(strItem);
    }
  });

  // Set sum as string
  result.sum = numericSum.toString();

  // Generate concatenated string in reverse order with alternating caps
  result.concat_string = createAlternatingCapsString(alphabetsArray);

  return result;
};

/**
 * Creates a string from alphabetical items in reverse order with alternating caps
 * @param {Array} alphabets - Array of alphabetical strings
 * @returns {String} Concatenated string with alternating caps
 */
function createAlternatingCapsString(alphabets) {
  // Join all alphabets and reverse
  let allChars = alphabets.join('').split('');
  let reversedChars = allChars.reverse();
  
  // Apply alternating caps
  let result = '';
  for (let i = 0; i < reversedChars.length; i++) {
    const char = reversedChars[i];
    if (i % 2 === 0) {
      result += char.toUpperCase();
    } else {
      result += char.toLowerCase();
    }
  }
  
  return result;
}
