const arrayService = require('../../src/services/arrayService');

describe('Array Service', () => {
  test('should correctly process array with mixed data types', () => {
    // Example A from requirements
    const data = ["a", "1", "334", "4", "R", "$"];
    const result = arrayService.processArrayData(data);
    
    expect(result.odd_numbers).toEqual(["1"]);
    expect(result.even_numbers).toEqual(["334", "4"]);
    expect(result.alphabets).toEqual(["A", "R"]);
    expect(result.special_characters).toEqual(["$"]);
    expect(result.sum).toBe("339");
    expect(result.concat_string).toBe("Ra");
  });

  test('should handle array with only numbers', () => {
    const data = ["1", "2", "3", "4", "5"];
    const result = arrayService.processArrayData(data);
    
    expect(result.odd_numbers).toEqual(["1", "3", "5"]);
    expect(result.even_numbers).toEqual(["2", "4"]);
    expect(result.alphabets).toEqual([]);
    expect(result.special_characters).toEqual([]);
    expect(result.sum).toBe("15");
    expect(result.concat_string).toBe("");
  });

  test('should handle array with only alphabets', () => {
    const data = ["a", "b", "c", "D", "E"];
    const result = arrayService.processArrayData(data);
    
    expect(result.odd_numbers).toEqual([]);
    expect(result.even_numbers).toEqual([]);
    expect(result.alphabets).toEqual(["A", "B", "C", "D", "E"]);
    expect(result.special_characters).toEqual([]);
    expect(result.sum).toBe("0");
    expect(result.concat_string).toBe("EdCbA");
  });

  test('should handle empty array', () => {
    const data = [];
    const result = arrayService.processArrayData(data);
    
    expect(result.odd_numbers).toEqual([]);
    expect(result.even_numbers).toEqual([]);
    expect(result.alphabets).toEqual([]);
    expect(result.special_characters).toEqual([]);
    expect(result.sum).toBe("0");
    expect(result.concat_string).toBe("");
  });

  test('should handle array with multi-character alphabetical strings', () => {
    const data = ["ABC", "DEF", "123"];
    const result = arrayService.processArrayData(data);
    
    expect(result.odd_numbers).toEqual(["123"]);
    expect(result.even_numbers).toEqual([]);
    expect(result.alphabets).toEqual(["ABC", "DEF"]);
    expect(result.special_characters).toEqual([]);
    expect(result.sum).toBe("123");
    expect(result.concat_string).toBe("FeDcBa");
  });
});
