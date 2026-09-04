const mongoose = require('mongoose');

const checklistSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  schemeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Scheme', required: true },
  
  // Document checklist items
  items: [{
    documentId: mongoose.Schema.Types.ObjectId,
    documentName: String,
    documentType: String,
    required: Boolean,
    completed: Boolean,
    uploadedAt: Date,
    fileUrl: String,
    verified: Boolean,
    verifiedBy: String,
    verificationNotes: String,
    rejectionReason: String
  }],
  
  // Overall status
  completionPercentage: Number,
  allDocumentsSubmitted: Boolean,
  allDocumentsVerified: Boolean,
  
  // Timeline
  createdAt: { type: Date, default: Date.now },
  lastUpdated: Date,
  submissionDate: Date,
  
  // Status tracking
  status: {
    type: String,
    enum: ['not-started', 'in-progress', 'documents-submitted', 'verification-pending', 'verified', 'rejected', 'completed'],
    default: 'not-started'
  }
});

checklistSchema.index({ userId: 1, schemeId: 1 }, { unique: true });

module.exports = mongoose.model('ApplicationChecklist', checklistSchema);
