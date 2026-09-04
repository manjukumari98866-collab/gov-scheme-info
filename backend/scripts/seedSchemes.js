const mongoose = require('mongoose');
const Scheme = require('../models/Scheme');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/gov-schemes', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Sample scheme templates to generate 1000+ variations
const schemeTemplates = [
  // CARDS
  {
    title: { en: "APAAR Card", hi: "अपार कार्ड" },
    category: "cards",
    description: { en: "Student identity card for academic records", hi: "शैक्षणिक रिकॉर्ड के लिए छात्र पहचान पत्र" },
    eligibility: { ageMin: 5, ageMax: 30, category: ["student"], aadharRequired: true },
    documents: [
      { name: "Aadhaar Card", type: "identity", required: true, formats: ["PDF", "JPG"] },
      { name: "School/College ID", type: "education", required: true, formats: ["PDF", "JPG"] }
    ]
  },
  {
    title: { en: "Ayushman Vay Vandana Card 70+", hi: "आयुष्मान वय वंदना कार्ड 70+" },
    category: "cards",
    description: { en: "Healthcare coverage for senior citizens 70+", hi: "70+ वरिष्ठ नागरिकों के लिए स्वास्थ्य कवरेज" },
    eligibility: { ageMin: 70, category: ["senior"], aadharRequired: true },
    documents: [
      { name: "Aadhaar Card", type: "identity", required: true, formats: ["PDF", "JPG"] },
      { name: "Age Proof", type: "identity", required: true, formats: ["PDF"] }
    ]
  },
  {
    title: { en: "e-Shram Card", hi: "ई-श्रेम कार्ड" },
    category: "cards",
    description: { en: "Registration card for unorganised workers", hi: "असंगठित श्रमिकों के लिए पंजीकरण कार्ड" },
    eligibility: { ageMin: 16, ageMax: 60, employmentStatus: ["unemployed", "self-employed", "worker"] },
    documents: [
      { name: "Aadhaar Card", type: "identity", required: true, formats: ["PDF", "JPG"] },
      { name: "Bank Account Details", type: "financial", required: true, formats: ["PDF"] }
    ]
  },
  // SCHEMES
  {
    title: { en: "PM Kisan Samman Nidhi", hi: "पीएम किसान सम्मान निधि" },
    category: "schemes",
    description: { en: "Direct financial support to eligible farmers", hi: "अर्हताप्राप्त किसानों को सीधी वित्तीय सहायता" },
    eligibility: { ageMin: 18, category: ["farmer"], maxIncome: 400000, aadharRequired: true },
    documents: [
      { name: "Aadhaar Card", type: "identity", required: true, formats: ["PDF", "JPG"] },
      { name: "Land Records", type: "property", required: true, formats: ["PDF"] },
      { name: "Bank Passbook", type: "financial", required: true, formats: ["JPG", "PDF"] }
    ]
  },
  {
    title: { en: "PM Awas Yojana", hi: "प्रधानमंत्री आवास योजना" },
    category: "schemes",
    description: { en: "Subsidised housing assistance for families", hi: "परिवारों के लिए सब्सिडी आधारित आवास सहायता" },
    eligibility: { ageMin: 18, maxIncome: 300000, aadharRequired: true },
    documents: [
      { name: "Income Certificate", type: "income", required: true, formats: ["PDF"] },
      { name: "Property Documents", type: "property", required: true, formats: ["PDF"] }
    ]
  },
  {
    title: { en: "Pradhan Mantri Matritva Vandana Yojana", hi: "प्रधानमंत्री मातृत्व वंदना योजना" },
    category: "schemes",
    description: { en: "Cash support to pregnant women", hi: "गर्भवती महिलाओं को नकद सहायता" },
    eligibility: { ageMin: 18, ageMax: 45, gender: ["Female"], aadharRequired: true },
    documents: [
      { name: "Aadhaar Card", type: "identity", required: true, formats: ["PDF", "JPG"] },
      { name: "Medical Certificate", type: "health", required: true, formats: ["PDF"] }
    ]
  },
  {
    title: { en: "Indira Gandhi National Old Age Pension Scheme", hi: "इंदिरा गांधी राष्ट्रीय वृद्धावस्था पेंशन योजना" },
    category: "schemes",
    description: { en: "Pension for elderly people above 60", hi: "60 वर्ष से अधिक बुजुर्ग लोगों को पेंशन" },
    eligibility: { ageMin: 60, maxIncome: 200000, aadharRequired: true },
    documents: [
      { name: "Aadhaar Card", type: "identity", required: true, formats: ["PDF", "JPG"] },
      { name: "Age Proof", type: "identity", required: true, formats: ["PDF"] },
      { name: "Income Certificate", type: "income", required: true, formats: ["PDF"] }
    ]
  },
  // JOBS
  {
    title: { en: "SSC CGL 2026 Recruitment", hi: "एसएससी सीजीएल 2026 भर्ती" },
    category: "jobs",
    description: { en: "Central government vacancy notices", hi: "केंद्रीय सरकारी रिक्तियों की सूचना" },
    eligibility: { ageMin: 18, ageMax: 32, education: ["12th", "graduation"] },
    documents: [
      { name: "Aadhaar Card", type: "identity", required: true, formats: ["PDF", "JPG"] },
      { name: "Educational Certificate", type: "education", required: true, formats: ["PDF"] }
    ]
  },
  {
    title: { en: "UPSC Civil Services Exam", hi: "यूपीएससी सिविल सेवा परीक्षा" },
    category: "jobs",
    description: { en: "All India Civil Services recruitment", hi: "अखिल भारतीय सिविल सेवा भर्ती" },
    eligibility: { ageMin: 21, ageMax: 32, education: ["graduation"] },
    documents: [
      { name: "Graduation Certificate", type: "education", required: true, formats: ["PDF"] },
      { name: "Aadhaar Card", type: "identity", required: true, formats: ["PDF", "JPG"] }
    ]
  },
  // EDUCATION
  {
    title: { en: "National Scholarship Scheme", hi: "राष्ट्रीय छात्रवृत्ति योजना" },
    category: "education",
    description: { en: "Scholarship for meritorious students", hi: "मेधावी छात्रों के लिए छात्रवृत्ति" },
    eligibility: { ageMin: 14, ageMax: 25, education: ["10th", "12th", "graduation"], maxIncome: 250000 },
    documents: [
      { name: "Marks Card", type: "education", required: true, formats: ["PDF", "JPG"] },
      { name: "Income Certificate", type: "income", required: true, formats: ["PDF"] }
    ]
  },
  // HEALTH
  {
    title: { en: "Ayushman Bharat - PM-JAY", hi: "आयुष्मान भारत - पीएम-जय" },
    category: "health",
    description: { en: "Healthcare scheme for all", hi: "सभी के लिए स्वास्थ्य सेवा योजना" },
    eligibility: { maxIncome: 500000, aadharRequired: true },
    documents: [
      { name: "Aadhaar Card", type: "identity", required: true, formats: ["PDF", "JPG"] },
      { name: "Income Certificate", type: "income", required: false, formats: ["PDF"] }
    ]
  }
];

// Cities and States
const states = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa",
  "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala",
  "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
  "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
  "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi"
];

const cities = [
  "Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune",
  "Lucknow", "Jaipur", "Chandigarh", "Ahmedabad", "Surat", "Kanpur", "Indore",
  "Bhopal", "Nagpur", "Kochi", "Patna", "Guwahati", "Visakhapatnam"
];

// Generate 1000+ unique schemes
async function seedSchemes() {
  try {
    console.log('🌱 Starting to seed schemes...');

    // Clear existing schemes
    await Scheme.deleteMany({});
    console.log('📋 Cleared existing schemes');

    const schemes = [];
    let schemeId = 1000;

    // Generate schemes based on templates
    for (let i = 0; i < schemeTemplates.length; i++) {
      const template = schemeTemplates[i];

      // Create enough variations to keep the catalogue above 1000 records.
      const variationsPerTemplate = 100;

      for (let j = 0; j < variationsPerTemplate; j++) {
        schemeId++;

        const randomState = states[Math.floor(Math.random() * states.length)];
        const randomCities = cities.sort(() => Math.random() - 0.5).slice(0, Math.floor(Math.random() * 3) + 1);
        const statuses = ['live', 'updated', 'open', 'closed', 'upcoming'];
        const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

        const scheme = {
          schemeId: `SCH_${schemeId}`,
          title: {
            ...template.title,
            en: template.title.en + (j > 0 ? ` (${randomState} - Variant ${j})` : ` (${randomState})`)
          },
          description: template.description,
          category: template.category,
          status: randomStatus,
          applicableCities: randomCities,
          applicableStates: [randomState],
          eligibility: {
            ...template.eligibility,
            maxIncome: template.eligibility.maxIncome ? template.eligibility.maxIncome + Math.random() * 100000 : undefined
          },
          documents: template.documents,
          applicationSteps: [
            { step: 1, title: "Check Eligibility", description: "Verify you meet all criteria", estimatedTime: "5 mins" },
            { step: 2, title: "Gather Documents", description: "Collect required documents", estimatedTime: "2-3 days" },
            { step: 3, title: "Online Application", description: "Fill and submit application", estimatedTime: "15 mins" },
            { step: 4, title: "Document Upload", description: "Upload required documents", estimatedTime: "10 mins" },
            { step: 5, title: "Verification", description: "Official verification process", estimatedTime: "7-15 days" }
          ],
          benefits: {
            description: `Benefits for ${template.category} scheme`,
            cashAssistance: Math.floor(Math.random() * 100000) + 5000,
            healthCoverage: Math.random() > 0.5,
            educationSupport: Math.random() > 0.5,
            housingSupport: Math.random() > 0.6,
            employmentOpportunities: Math.random() > 0.7
          },
          applicationStartDate: new Date(),
          applicationDeadline: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
          resultDate: new Date(Date.now() + 120 * 24 * 60 * 60 * 1000),
          officialWebsite: `https://scheme.gov.in/scheme_${schemeId}`,
          helplineNumber: `1800-2${Math.floor(Math.random() * 8)}0000`,
          email: `support@scheme${i}.gov.in`,
          views: Math.floor(Math.random() * 10000),
          applications: Math.floor(Math.random() * 5000),
          saves: Math.floor(Math.random() * 2000)
        };

        schemes.push(scheme);
      }
    }

    // Insert in batches
    const batchSize = 100;
    for (let i = 0; i < schemes.length; i += batchSize) {
      const batch = schemes.slice(i, i + batchSize);
      await Scheme.insertMany(batch);
      console.log(`✅ Inserted ${i + batch.length} / ${schemes.length} schemes`);
    }

    console.log(`\n🎉 Successfully seeded ${schemes.length} schemes!`);
    console.log('📊 Scheme Summary:');
    console.log(`   - Total Schemes: ${schemes.length}`);
    console.log(`   - States Covered: ${states.length}`);
    console.log(`   - Cities Covered: ${cities.length}`);

    // Get statistics
    const stats = await Scheme.aggregate([
      { $group: { _id: '$category', count: { $sum: 1 } } }
    ]);

    console.log('\n📈 Schemes by Category:');
    stats.forEach(stat => {
      console.log(`   - ${stat._id}: ${stat.count}`);
    });

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding schemes:', error);
    process.exit(1);
  }
}

seedSchemes();
