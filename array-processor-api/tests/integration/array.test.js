const request = require('supertest');
const app = require('../../src/app');

describe('Array Processor API', () => {
  test('POST /bfhl - should process valid array data', async () => {
    const response = await request(app)
      .post('/bfhl')
      .send({
        data: ["a", "1", "334", "4", "R", "$"]
      });
    
    expect(response.statusCode).toBe(200);
    expect(response.body.is_success).toBe(true);
    expect(response.body.user_id).toBeDefined();
    expect(response.body.email).toBeDefined();
    expect(response.body.roll_number).toBeDefined();
    expect(response.body.odd_numbers).toEqual(["1"]);
    expect(response.body.even_numbers).toEqual(["334", "4"]);
    expect(response.body.alphabets).toEqual(["A", "R"]);
    expect(response.body.special_characters).toEqual(["$"]);
    expect(response.body.sum).toBe("339");
    expect(response.body.concat_string).toBe("Ra");
  });

  test('POST /bfhl - should handle invalid request (missing data)', async () => {
    const response = await request(app)
      .post('/bfhl')
      .send({});
    
    expect(response.statusCode).toBe(400);
    expect(response.body.is_success).toBe(false);
  });

  test('POST /bfhl - should handle invalid request (data not an array)', async () => {
    const response = await request(app)
      .post('/bfhl')
      .send({
        data: "not an array"
      });
    
    expect(response.statusCode).toBe(400);
    expect(response.body.is_success).toBe(false);
  });

  test('GET / - should return API information', async () => {
    const response = await request(app).get('/');
    
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Array Processor API is running');
    expect(response.body.endpoints).toBeDefined();
  });
});
