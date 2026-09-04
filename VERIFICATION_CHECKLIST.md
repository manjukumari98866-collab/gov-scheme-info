# ✅ Setup Verification Checklist

Use this checklist to verify your setup is complete and working correctly.

## Pre-Setup Requirements

- [ ] Node.js installed (v14+) - Check: `node --version`
- [ ] npm installed - Check: `npm --version`
- [ ] MongoDB installed locally OR MongoDB Atlas account
- [ ] Git installed (optional)
- [ ] Text editor/IDE (VS Code recommended)

## Backend Setup

### Step 1: Install Dependencies
```bash
cd backend
npm install
```

- [ ] No errors during npm install
- [ ] `node_modules/` folder created
- [ ] `package-lock.json` created

### Step 2: Configure Environment
```bash
cd backend
cp .env.example .env
```

Edit `.env` file and verify:
- [ ] `MONGODB_URI` is set correctly
- [ ] `JWT_SECRET` is defined
- [ ] `PORT` is 5000 (or your chosen port)
- [ ] `NODE_ENV` is set to development

### Step 3: Database Connection Test

Run this command:
```bash
node -e "const mongoose = require('mongoose'); mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/gov-schemes', {useNewUrlParser: true}).then(() => console.log('✅ MongoDB Connected')).catch(e => console.log('❌ Error:', e.message))"
```

- [ ] Output shows "✅ MongoDB Connected"

### Step 4: Seed Database

```bash
node scripts/seedSchemes.js
```

Expected Output:
```
🌱 Starting to seed schemes...
📋 Cleared existing schemes
✅ Inserted 100 / 720 schemes
✅ Inserted 200 / 720 schemes
...
🎉 Successfully seeded 720 schemes!
```

- [ ] Script runs without errors
- [ ] 700+ schemes created
- [ ] Data shows breakdown by category

### Step 5: Start Backend Server

```bash
npm start
```

Expected Output:
```
🚀 Server running on port 5000
✅ MongoDB connected successfully
```

- [ ] No errors in console
- [ ] Shows "Server running on port 5000"
- [ ] Shows "MongoDB connected successfully"

### Step 6: Test Backend Health

In a new terminal:
```bash
curl http://localhost:5000/api/health
```

Expected Response:
```json
{
  "status": "Server is running",
  "timestamp": "2026-08-26T10:30:00.000Z"
}
```

- [ ] Returns status "Server is running"
- [ ] Shows current timestamp

### Step 7: Test Scheme Endpoint

```bash
curl http://localhost:5000/api/schemes?limit=5
```

Expected Response:
```json
{
  "success": true,
  "data": [{
    "_id": "...",
    "schemeId": "SCH_1001",
    "title": {...},
    "category": "cards",
    ...
  }, ...],
  "pagination": {
    "total": 720,
    "page": 1,
    "limit": 5,
    "pages": 144
  }
}
```

- [ ] Returns success: true
- [ ] Shows scheme data array
- [ ] Shows pagination info
- [ ] Total schemes > 700

## Frontend Setup

### Step 1: Place Frontend Files

The following files should be in the root directory:
- [ ] `index.html`
- [ ] `script.js`
- [ ] `style.css`
- [ ] `manifest.json`
- [ ] `sw.js`
- [ ] `api-client.js` (NEW)

### Step 2: Start Frontend Server

```bash
# Option 1: Using Node
npx http-server

# Option 2: Using Python
python -m http.server 8000

# Option 3: Using Live Server in VS Code
# Right-click index.html → Open with Live Server
```

- [ ] Server starts on http://localhost:8000 (or similar)
- [ ] No errors in console

### Step 3: Open in Browser

Visit: `http://localhost:8000`

Verify:
- [ ] Page loads successfully
- [ ] Header displays "Gov Service Hub"
- [ ] No console errors
- [ ] Login/Register button visible
- [ ] Search bar functional

### Step 4: Test Frontend Features

#### Search
- [ ] Type in search box
- [ ] Results update
- [ ] Click on a service card

#### Language
- [ ] Click language toggle
- [ ] UI text changes
- [ ] Select different language from dropdown
- [ ] Content updates

#### Profile
- [ ] Click "Login / Register"
- [ ] Fill in profile form
- [ ] Click login
- [ ] Profile dashboard appears

#### Location
- [ ] Select city from dropdown
- [ ] City badge updates
- [ ] Content filters by city

## Integration Testing

### Step 1: End-to-End Test

1. Open frontend
2. Click "Login / Register"
3. Fill in details and submit
4. Click "Check My Eligibility"
5. Fill eligibility form
6. Click "Find Matches"

- [ ] Eligibility results appear
- [ ] Shows eligible schemes
- [ ] Shows eligibility scores

### Step 2: Checklist Test

1. From eligibility results, click "Start Checklist"
2. Check off documents
3. Upload file
4. Watch progress bar update

- [ ] Checklist modal opens
- [ ] Progress bar updates
- [ ] Submit button enables when complete
- [ ] Can download checklist

### Step 3: API Test

Using Postman or curl:

```bash
# Get single scheme
curl http://localhost:5000/api/schemes | jq '.data[0]._id' | xargs -I {} curl http://localhost:5000/api/schemes/{}
```

- [ ] Returns full scheme details

```bash
# Check eligibility
curl -X POST http://localhost:5000/api/eligibility/check-batch \
  -H "Content-Type: application/json" \
  -d '{
    "userProfile": {
      "age": 32,
      "income": 350000,
      "category": "general"
    },
    "schemeIds": []
  }'
```

- [ ] Returns eligibility results
- [ ] Shows eligible and maybeEligible schemes
- [ ] Includes scores and criteria

## Advanced Testing

### Database Queries

Open MongoDB shell or Compass:

```javascript
// Count schemes
db.schemes.countDocuments()
// Expected: ~720

// Check categories
db.schemes.aggregate([
  { $group: { _id: "$category", count: { $sum: 1 } } }
])
// Expected: Multiple categories with counts

// Check specific scheme
db.schemes.findOne({ schemeId: "SCH_1001" })
// Expected: Full scheme document with all fields
```

- [ ] Total schemes count is 700+
- [ ] All 10 categories represented
- [ ] Scheme documents have all required fields

### Performance Check

```bash
# Measure scheme list response time
time curl http://localhost:5000/api/schemes?limit=100

# Measure eligibility check
time curl -X POST http://localhost:5000/api/eligibility/check-batch \
  -H "Content-Type: application/json" \
  -d '{"userProfile": {"age": 32, "income": 350000, "category": "general"}, "schemeIds": []}'
```

Expected:
- [ ] Scheme list: < 200ms
- [ ] Eligibility check: < 500ms

## Common Issues & Solutions

### ❌ MongoDB Connection Error
```
Error: connect ECONNREFUSED 127.0.0.1:27017
```
**Solution:**
- [ ] Ensure MongoDB is running: `mongod`
- [ ] Or update MONGODB_URI to MongoDB Atlas connection string
- [ ] Verify connection string format

### ❌ Port Already in Use
```
Error: listen EADDRINUSE :::5000
```
**Solution:**
- [ ] Change PORT in .env to different number (5001, 5002)
- [ ] Or kill process: `lsof -ti:5000 | xargs kill -9` (macOS/Linux)

### ❌ npm install Fails
```
npm ERR! code ERESOLVE
```
**Solution:**
- [ ] Use Node 14+: `node --version`
- [ ] Clear cache: `npm cache clean --force`
- [ ] Use legacy resolver: `npm install --legacy-peer-deps`

### ❌ Seed Script Error
```
MongooseError: Operation `schemes.deleteMany()` buffering timed out
```
**Solution:**
- [ ] Increase MongoDB timeout
- [ ] Check MongoDB is running
- [ ] Try running script again

### ❌ CORS Error in Browser
```
Access to XMLHttpRequest blocked by CORS policy
```
**Solution:**
- [ ] Ensure backend server is running
- [ ] CORS is enabled in server.js
- [ ] Check API URL in api-client.js matches backend URL

## Final Verification

Once all checks pass, verify:

### Backend Status
```bash
# Terminal 1 - Backend should show:
🚀 Server running on port 5000
✅ MongoDB connected successfully
```

### Frontend Status
- [ ] Page loads at http://localhost:8000
- [ ] No console errors
- [ ] All UI elements visible

### Data Status
- [ ] 700+ schemes in database
- [ ] 10 categories with schemes
- [ ] Eligibility engine working
- [ ] Checklists creating successfully

### Functionality Status
- [ ] Can search schemes
- [ ] Can filter by category/city
- [ ] Can check eligibility
- [ ] Can manage checklists
- [ ] Can save schemes
- [ ] Can login/register

---

## 🎉 Success!

If all checks pass, your Government Scheme Portal is:
- ✅ Fully installed
- ✅ Properly configured
- ✅ Database populated
- ✅ Backend running
- ✅ Frontend functional
- ✅ Ready for production use!

## Next Steps

1. **Deploy Backend** - Use Heroku, AWS, or your hosting provider
2. **Deploy Frontend** - Use Netlify, Vercel, or your web server
3. **Connect to Real Data** - Integrate government APIs
4. **Setup Monitoring** - Monitor errors and performance
5. **Enable Analytics** - Track user behavior
6. **Setup Notifications** - Email/SMS for updates

---

**Questions?** See [SETUP_GUIDE.md](SETUP_GUIDE.md) or [API_TESTING.md](API_TESTING.md)

**Report Issues:** Open a GitHub issue with this checklist attached
