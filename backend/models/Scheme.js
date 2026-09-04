const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  name: String,
  type: String,
  required: Boolean,
  description: String,
  formats: [String]
}, { _id: false });

const benefitsSchema = new mongoose.Schema({
  type: String,
  cashAssistance: Number,
  healthCoverage: Boolean,
  educationSupport: Boolean,
  housingSupport: Boolean,
  employmentOpportunities: Boolean,
  description: String
}, { _id: false });

const schemeSchema = new mongoose.Schema({
  schemeId: { type: String, unique: true, required: true },
  title: {
    en: String,
    hi: String,
    bn: String,
    te: String,
    mr: String,
    ta: String,
    gu: String,
    kn: String,
    pa: String,
    ml: String
  },
  description: {
    en: String,
    hi: String
  },
  category: {
    type: String,
    enum: ['cards', 'schemes', 'jobs', 'education', 'health', 'pension', 'employment', 'agriculture', 'housing', 'disability'],
    required: true
  },
  status: {
    type: String,
    enum: ['live', 'updated', 'open', 'closed', 'upcoming'],
    default: 'live'
  },
  applicableCities: [String],
  applicableStates: [String],
  
  // Eligibility criteria
  eligibility: {
    ageMin: Number,
    ageMax: Number,
    minIncome: Number,
    maxIncome: Number,
    category: [String], // student, farmer, senior, worker, etc.
    education: [String], // 10th, 12th, graduation, etc.
    employmentStatus: [String], // employed, unemployed, self-employed, etc.
    caste: [String], // SC, ST, OBC, General, etc.
    gender: [String], // Male, Female, Other, Any
    maritalStatus: [String],
    disability: Boolean,
    bankAccountRequired: Boolean,
    aadharRequired: Boolean,
    customRules: [{
      field: String,
      operator: String, // equals, greaterThan, lessThan, contains, includes
      value: mongoose.Schema.Types.Mixed
    }]
  },
  
  // Required documents
  documents: [documentSchema],
  
  // Application process
  applicationSteps: [{
    step: Number,
    title: String,
    description: String,
    estimatedTime: String
  }],
  
  // Scheme benefits
  benefits: benefitsSchema,
  
  // Dates
  applicationStartDate: Date,
  applicationDeadline: Date,
  resultDate: Date,
  
  // Contact info
  officialWebsite: String,
  helplineNumber: String,
  email: String,
  
  // Analytics
  views: { type: Number, default: 0 },
  applications: { type: Number, default: 0 },
  saves: { type: Number, default: 0 },
  
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

schemeSchema.index({ category: 1, status: 1 });
schemeSchema.index({ applicableCities: 1 });
schemeSchema.index({ 'eligibility.maxIncome': 1 });

module.exports = mongoose.model('Scheme', schemeSchema);
