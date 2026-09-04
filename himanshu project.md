# 🏛️ Government Scheme Portal - Complete Setup Guide

This is a comprehensive Government Services Portal with **1000+ schemes**, **backend database connection**, **smart eligibility engine**, and **document checklist system**.

## 📋 Features

✅ **1000+ Government Schemes** - Cards, Jobs, Education, Health, Pension, Housing, etc.  
✅ **Smart Eligibility Engine** - AI-powered scheme matching based on user profile  
✅ **Document Checklist** - Track required documents and upload status  
✅ **Multi-language Support** - 22+ Indian languages  
✅ **Backend API** - Node.js/Express with MongoDB  
✅ **User Authentication** - Profile management and saved schemes  
✅ **Real-time Eligibility Check** - Instant scheme recommendations  
✅ **Mobile-Optimized** - PWA with offline support  

## 🚀 Quick Start

### Prerequisites
- Node.js (v14+)
- MongoDB (local or cloud - MongoDB Atlas)
- npm or yarn

### Step 1: Install Backend Dependencies

```bash
cd backend
npm install
```

### Step 2: Configure Environment

Create `.env` file in `backend/` folder:

```env
MONGODB_URI=mongodb://localhost:27017/gov-schemes
JWT_SECRET=your_super_secret_jwt_key_here_12345
PORT=5000
NODE_ENV=development
```

**For MongoDB Atlas (Cloud):**
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/gov-schemes?retryWrites=true&w=majority
```

### Step 3: Seed Database with 1000+ Schemes

```bash
cd backend
node scripts/seedSchemes.js
```

This will:
- Create 700+ unique schemes across 10 categories
- Distribute schemes across 29 states and 20+ cities
- Generate eligibility criteria and document requirements
- Set up indexes for fast querying

Expected Output:
```
🌱 Starting to seed schemes...
📋 Cleared existing schemes
✅ Inserted 100 / 720 schemes
✅ Inserted 200 / 720 schemes
...
🎉 Successfully seeded 720 schemes!
```

### Step 4: Start Backend Server

```bash
cd backend
npm start
# or with auto-reload
npm run dev
```

Server will run on: `http://localhost:5000`

### Step 5: Test Backend Health

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

### Step 6: Open Frontend

Open `index.html` in a browser or start a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node
npx http-server
```

Access at: `http://localhost:8000`

## 🎯 Key Features Explained

### 1. Smart Eligibility Engine

The engine evaluates eligibility based on:
- Age criteria (min/max)
- Income limits
- Category (SC/ST/OBC/General)
- Employment status
- Education level
- Gender requirements
- Disability status
- Custom rules

**How to use:**
1. Click "✅ Check My Eligibility" button
2. Fill your profile details
3. Engine matches you with eligible schemes
4. See eligibility score for each scheme

### 2. Document Checklist

Track document submission status:
- Shows all required documents
- Progress bar tracking
- Upload status for each document
- Verification tracking
- Download checklist as PDF/TXT

**How to use:**
1. Select a scheme from eligibility results
2. Click "📋 Start Checklist"
3. Check off documents as you gather them
4. Upload documents directly
5. Submit for verification

### 3. User Profile Management

- Save schemes for quick access
- Track application status
- Store personal details securely
- View saved documents
- Application history

## 📊 API Endpoints

### Schemes
```
GET  /api/schemes                    - List all schemes (paginated)
GET  /api/schemes/:id                - Get scheme details
GET  /api/schemes/search/query?q=    - Search schemes
GET  /api/schemes/category/:cat      - Get by category
GET  /api/schemes/city/:city         - Get by city
```

### Eligibility
```
POST /api/eligibility/check/:id      - Check single scheme
POST /api/eligibility/check-batch    - Check multiple schemes
POST /api/eligibility/recommend      - Get recommendations
```

### Checklists
```
GET  /api/checklist/:userId/:schemeId       - Get checklist
PUT  /api/checklist/:id/item/:index         - Update item
PUT  /api/checklist/:id/submit              - Submit all
GET  /api/checklist/user/:userId            - User's checklists
```

### Users
```
POST /api/users/register             - Create account
POST /api/users/login                - Login
GET  /api/users/:id                  - Get profile
PUT  /api/users/:id/profile          - Update profile
POST /api/users/:id/save/:schemeId   - Save scheme
GET  /api/users/:id/saved            - Get saved schemes
```

## 📈 Database Schema

### Scheme Model
```javascript
{
  schemeId: "SCH_1234",
  title: { en, hi, bn, te, ... },     // 22 languages
  category: "cards|jobs|education|...",
  eligibility: {
    ageMin, ageMax,
    maxIncome, minIncome,
    category: [...],
    education: [...],
    employmentStatus: [...],
    customRules: [...]
  },
  documents: [{
    name, type, required, formats
  }],
  applicationSteps: [...],
  benefits: {...},
  applicableCities: [...],
  applicableStates: [...]
}
```

### User Model
```javascript
{
  userId, name, email, phone,
  profile: {
    age, gender, income,
    category, caste, employmentStatus, education,
    bankAccountNumber, aadharNumber, panNumber, ...
  },
  savedSchemes: [...],
  applications: [...],
  checklists: [...]
}
```

## 🔒 Security Features

- JWT Authentication
- Password hashing (bcryptjs)
- CORS enabled
- Input validation
- Rate limiting (can be added)
- Secure headers

## 📱 Frontend Features

- **Search & Filter** - Find schemes by keywords
- **Language Support** - 22+ Indian languages
- **Voice Search** - Speak to search
- **Location Detection** - Automatic city detection
- **Offline Support** - Service Worker for offline access
- **Responsive Design** - Mobile-first approach
- **Accessibility** - WCAG compliant

## 🛠️ Customization

### Add More Schemes
Edit `backend/scripts/seedSchemes.js` and add scheme templates:

```javascript
{
  title: { en: "Your Scheme", hi: "आपकी योजना" },
  category: "schemes",
  eligibility: { ageMin: 18, maxIncome: 300000 },
  documents: [{ name: "Aadhaar", type: "identity", required: true }],
  // ...
}
```

### Modify Eligibility Rules
Edit `backend/services/eligibilityEngine.js` and add new evaluation logic:

```javascript
// Add custom rule evaluation
if (elig.customField !== undefined) {
  // Add logic
}
```

### Change Frontend Settings
Update API base URL in `api-client.js`:

```javascript
const api = new APIClient('https://your-api.com/api');
```

## 🐛 Troubleshooting

### MongoDB Connection Error
```
❌ MongoDB connection error
```
**Solution:** 
- Ensure MongoDB is running: `mongod`
- Or update `MONGODB_URI` with correct connection string

### Port Already in Use
```
Error: listen EADDRINUSE :::5000
```
**Solution:**
```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9
# Or change port in .env
PORT=5001
```

### CORS Error
```
Access to XMLHttpRequest blocked by CORS policy
```
**Solution:**
- CORS is enabled in `server.js`
- If using different domain, update CORS origin:

```javascript
app.use(cors({
  origin: 'https://your-domain.com',
  credentials: true
}));
```

### Seed Script Fails
```
❌ Error seeding schemes
```
**Solution:**
```bash
# Clear existing data
db.schemes.deleteMany({})

# Re-run seed
node scripts/seedSchemes.js
```

## 📞 Support & Resources

- **Documentation:** See inline code comments
- **API Testing:** Use Postman or curl
- **Database Viewer:** MongoDB Compass
- **Frontend Debugging:** Browser DevTools

## 📄 License

MIT - Free for educational and government use

## 🎓 Learning Resources

This project demonstrates:
- RESTful API design
- Database schema design
- Eligibility algorithms
- User authentication
- Progressive Web Apps
- Multi-language support
- Document management

---

**Happy Coding! 🚀 Contribute to make government services more accessible!**
