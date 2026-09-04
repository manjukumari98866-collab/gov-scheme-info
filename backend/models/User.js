const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  userId: { type: String, unique: true, required: true },
  name: String,
  email: { type: String, unique: true, sparse: true },
  phone: String,
  
  // Profile information
  profile: {
    dateOfBirth: Date,
    age: Number,
    gender: String,
    maritalStatus: String,
    address: String,
    city: String,
    state: String,
    pincode: String,
    category: String, // SC, ST, OBC, General
    caste: String,
    religion: String,
    employmentStatus: String,
    education: String,
    income: Number,
    hasDisability: Boolean,
    disabilityPercentage: Number,
    bankAccountNumber: String,
    ifscCode: String,
    aadharNumber: String,
    panNumber: String,
    rationalCardNumber: String
  },
  
  // Authentication
  password: String,
  loginMethod: { type: String, enum: ['email', 'phone', 'aadhar', 'oauth'], default: 'email' },
  isVerified: { type: Boolean, default: false },
  verificationToken: String,
  
  // Saved schemes and applications
  savedSchemes: [mongoose.Schema.Types.ObjectId],
  applications: [{
    schemeId: mongoose.Schema.Types.ObjectId,
    applicationDate: Date,
    status: String, // applied, approved, rejected, pending
    eligibilityScore: Number,
    documents: [{
      documentName: String,
      uploadedAt: Date,
      verified: Boolean,
      verifiedAt: Date
    }]
  }],
  
  // Checklists
  checklists: [{
    schemeId: mongoose.Schema.Types.ObjectId,
    createdAt: Date,
    items: [{
      document: String,
      completed: Boolean,
      uploadedAt: Date
    }]
  }],
  
  // Preferences
  preferences: {
    language: { type: String, default: 'en' },
    city: String,
    categories: [String],
    notifications: { type: Boolean, default: true }
  },
  
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  lastLogin: Date
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare password
userSchema.methods.comparePassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
