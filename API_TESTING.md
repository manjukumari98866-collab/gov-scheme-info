# API Testing Guide

## Using Postman to Test the API

### 1. Import Collection
Create a new Postman Collection and add these requests:

## Authentication

### Register User
```
POST http://localhost:5000/api/users/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+919876543210",
  "password": "password123",
  "loginMethod": "email"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "userId": "64a1f2c3e4d5f6g7h8i9j0k1",
    "name": "John Doe",
    "email": "john@example.com",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

### Login User
```
POST http://localhost:5000/api/users/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

## Schemes

### Get All Schemes (Paginated)
```
GET http://localhost:5000/api/schemes?page=1&limit=20
```

Query Parameters:
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 20)
- `category`: Filter by category (cards, jobs, education, health, etc.)
- `city`: Filter by city (Delhi, Mumbai, Bangalore, etc.)
- `status`: Filter by status (live, updated, open, closed, upcoming)

### Get Single Scheme
```
GET http://localhost:5000/api/schemes/64a1f2c3e4d5f6g7h8i9j0k1
```

### Search Schemes
```
GET http://localhost:5000/api/schemes/search/query?q=APAAR
```

Query Parameters:
- `q`: Search query (searches in title, description, category)

### Get Schemes by Category
```
GET http://localhost:5000/api/schemes/category/cards
```

Categories:
- cards, schemes, jobs, education, health, pension, employment, agriculture, housing, disability

### Get Schemes by City
```
GET http://localhost:5000/api/schemes/city/Delhi
```

## Eligibility

### Check Single Scheme Eligibility
```
POST http://localhost:5000/api/eligibility/check/64a1f2c3e4d5f6g7h8i9j0k1
Content-Type: application/json

{
  "userProfile": {
    "dateOfBirth": "1994-05-15",
    "age": 32,
    "gender": "Male",
    "income": 350000,
    "category": "general",
    "caste": "General",
    "employmentStatus": "self-employed",
    "education": "graduation",
    "hasDisability": false,
    "aadharNumber": "1234 5678 9012",
    "bankAccountNumber": "1234567890123456"
  }
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "schemeId": "64a1f2c3e4d5f6g7h8i9j0k1",
    "schemeTitle": "APAAR Card",
    "eligibility": {
      "eligible": true,
      "eligibilityScore": 95,
      "reasons": ["✅ You appear to be eligible for this scheme"],
      "matchedCriteria": [
        "Age requirement met (32)",
        "Category 'general' is eligible"
      ],
      "missingCriteria": []
    }
  }
}
```

### Check Multiple Schemes (Batch)
```
POST http://localhost:5000/api/eligibility/check-batch
Content-Type: application/json

{
  "userProfile": {
    "dateOfBirth": "1994-05-15",
    "age": 32,
    "gender": "Male",
    "income": 350000,
    "category": "general",
    "employmentStatus": "self-employed",
    "education": "graduation",
    "hasDisability": false,
    "aadharNumber": "1234 5678 9012"
  },
  "schemeIds": [
    "64a1f2c3e4d5f6g7h8i9j0k1",
    "64a1f2c3e4d5f6g7h8i9j0k2"
  ]
}
```

Or leave `schemeIds` empty to check all schemes:
```json
{
  "userProfile": {...},
  "schemeIds": []
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "totalSchemes": 50,
    "eligible": [
      {
        "schemeId": "64a1f2c3e4d5f6g7h8i9j0k1",
        "title": "APAAR Card",
        "eligible": true,
        "eligibilityScore": 95,
        "matchedCriteria": [...],
        "missingCriteria": []
      }
    ],
    "maybeEligible": [
      {
        "schemeId": "64a1f2c3e4d5f6g7h8i9j0k2",
        "title": "PM Kisan Samman Nidhi",
        "eligible": false,
        "eligibilityScore": 72,
        "matchedCriteria": [...],
        "missingCriteria": [...]
      }
    ],
    "all": [...]
  },
  "summary": {
    "definitelyEligible": 15,
    "maybeEligible": 10,
    "notEligible": 25
  }
}
```

### Get Recommended Schemes
```
POST http://localhost:5000/api/eligibility/recommend
Content-Type: application/json

{
  "userProfile": {
    "dateOfBirth": "1994-05-15",
    "age": 32,
    "gender": "Male",
    "income": 350000,
    "category": "general",
    "employmentStatus": "self-employed"
  },
  "limit": 10
}
```

## Document Checklist

### Get/Create Checklist
```
GET http://localhost:5000/api/checklist/64a1f2c3e4d5f6g7h8i9j0k1/64a1f2c3e4d5f6g7h8i9j0k2
```

Path Parameters:
- `userId`: User's ID
- `schemeId`: Scheme's ID

### Update Checklist Item
```
PUT http://localhost:5000/api/checklist/64a1f2c3e4d5f6g7h8i9j0k1/item/0
Content-Type: application/json

{
  "completed": true,
  "fileUrl": "https://storage.example.com/document1.pdf",
  "uploadedAt": "2026-08-26T10:30:00.000Z"
}
```

### Submit All Documents
```
PUT http://localhost:5000/api/checklist/64a1f2c3e4d5f6g7h8i9j0k1/submit
```

### Get User's Checklists
```
GET http://localhost:5000/api/checklist/user/64a1f2c3e4d5f6g7h8i9j0k1
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "_id": "64a1f2c3e4d5f6g7h8i9j0k1",
      "userId": "64a1f2c3e4d5f6g7h8i9j0k1",
      "schemeId": {
        "_id": "64a1f2c3e4d5f6g7h8i9j0k2",
        "title": { "en": "APAAR Card" }
      },
      "items": [
        {
          "documentName": "Aadhaar Card",
          "documentType": "identity",
          "required": true,
          "completed": true,
          "uploadedAt": "2026-08-26T10:30:00.000Z",
          "fileUrl": "...",
          "verified": false
        }
      ],
      "completionPercentage": 80,
      "status": "in-progress",
      "createdAt": "2026-08-26T10:00:00.000Z"
    }
  ]
}
```

## User Profile

### Get User Profile
```
GET http://localhost:5000/api/users/64a1f2c3e4d5f6g7h8i9j0k1
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Update User Profile
```
PUT http://localhost:5000/api/users/64a1f2c3e4d5f6g7h8i9j0k1/profile
Content-Type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

{
  "dateOfBirth": "1994-05-15",
  "age": 32,
  "gender": "Male",
  "maritalStatus": "Single",
  "address": "123 Main St",
  "city": "Delhi",
  "state": "Delhi",
  "pincode": "110001",
  "category": "general",
  "caste": "General",
  "employmentStatus": "self-employed",
  "education": "graduation",
  "income": 350000,
  "hasDisability": false,
  "disabilityPercentage": 0,
  "bankAccountNumber": "1234567890123456",
  "ifscCode": "HDFC0000001",
  "aadharNumber": "1234 5678 9012",
  "panNumber": "ABCDE1234F"
}
```

### Save Scheme
```
POST http://localhost:5000/api/users/64a1f2c3e4d5f6g7h8i9j0k1/save/64a1f2c3e4d5f6g7h8i9j0k2
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Get Saved Schemes
```
GET http://localhost:5000/api/users/64a1f2c3e4d5f6g7h8i9j0k1/saved
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## Health Check

### Server Health
```
GET http://localhost:5000/api/health
```

**Response:**
```json
{
  "status": "Server is running",
  "timestamp": "2026-08-26T10:30:00.000Z"
}
```

## Error Responses

### 400 Bad Request
```json
{
  "success": false,
  "error": "User profile required"
}
```

### 404 Not Found
```json
{
  "success": false,
  "error": "Scheme not found"
}
```

### 500 Internal Server Error
```json
{
  "success": false,
  "error": "Internal server error",
  "message": "Detailed error message"
}
```

## Common Error Scenarios

### Missing Required Fields
```
POST /api/eligibility/check/:id
{
  "userProfile": {}
}
```
→ Returns 400: "User profile required"

### Invalid Scheme ID
```
GET /api/schemes/invalid_id
```
→ Returns 404: "Scheme not found"

### Expired Token
```
GET /api/users/123
Authorization: Bearer expired_token
```
→ Returns 401: "Invalid token"

## Performance Tips

1. **Pagination:** Always use pagination for list endpoints
   ```
   GET /api/schemes?page=1&limit=50
   ```

2. **Filtering:** Use filters to reduce data transfer
   ```
   GET /api/schemes?category=cards&city=Delhi
   ```

3. **Batch Operations:** Check eligibility for multiple schemes at once
   ```
   POST /api/eligibility/check-batch
   ```

4. **Caching:** Cache scheme data on client side for offline access

## Rate Limiting (Future)

Plans to add rate limiting:
- 100 requests per minute per IP
- 50 eligibility checks per minute per user
- 1000 requests per day per API key

---

**For more details, see SETUP_GUIDE.md**
