# Array Processor API

A REST API that processes arrays and returns various computed results.

## Objective

This API takes in an array of items and processes them to return:
1. Operation status
2. User ID
3. Email ID
4. College Roll Number
5. Array of even numbers
6. Array of odd numbers
7. Array of alphabets (converted to uppercase)
8. Array of special characters
9. Sum of numbers
10. Concatenation of alphabetical characters in reverse order with alternating caps

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/`      | Returns API information and available endpoints |
| POST   | `/bfhl`  | Processes array data according to requirements |

## Running the API

```bash
# Install dependencies
npm install

# Run in development mode with auto-reload
npm run dev

# Run in production mode
npm start

# Run tests
npm test
```

## Example Usage

### POST /bfhl

Request:
```bash
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["a", "1", "334", "4", "R", "$"]}'
```

Response:
```json
{
  "is_success": true,
  "user_id": "lalit_bajaj_29082025",
  "email": "lalit@example.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

### GET /

Request:
```bash
curl -X GET http://localhost:3000/
```

Response:
```json
{
  "message": "Array Processor API is running",
  "endpoints": [
    {
      "method": "POST",
      "route": "/bfhl",
      "description": "Process array data"
    }
  ]
}
```

## Technology Stack

- Node.js
- Express.js

## Deployment

The API is deployed on Vercel.

## Installation and Local Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file with required environment variables
4. Run the server: `npm run dev`

## Testing

Run tests with: `npm test`
