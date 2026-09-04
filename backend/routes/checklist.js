const express = require('express');
const ApplicationChecklist = require('../models/ApplicationChecklist');
const Scheme = require('../models/Scheme');
const router = express.Router();

// Create or get checklist for a scheme
router.get('/:userId/:schemeId', async (req, res) => {
  try {
    const { userId, schemeId } = req.params;
    
    let checklist = await ApplicationChecklist.findOne({ userId, schemeId });

    if (!checklist) {
      // Create new checklist
      const scheme = await Scheme.findById(schemeId);
      if (!scheme) {
        return res.status(404).json({ success: false, error: 'Scheme not found' });
      }

      checklist = new ApplicationChecklist({
        userId,
        schemeId,
        items: scheme.documents.map(doc => ({
          documentName: doc.name,
          documentType: doc.type,
          required: doc.required,
          completed: false
        })),
        completionPercentage: 0,
        allDocumentsSubmitted: false,
        allDocumentsVerified: false,
        status: 'not-started'
      });

      await checklist.save();
    }

    res.json({ success: true, data: checklist });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Update checklist item
router.put('/:checklistId/item/:itemIndex', async (req, res) => {
  try {
    const { checklistId, itemIndex } = req.params;
    const { completed, fileUrl, uploadedAt } = req.body;

    const checklist = await ApplicationChecklist.findByIdAndUpdate(
      checklistId,
      {
        $set: {
          [`items.${itemIndex}.completed`]: completed,
          [`items.${itemIndex}.fileUrl`]: fileUrl,
          [`items.${itemIndex}.uploadedAt`]: uploadedAt || new Date(),
          lastUpdated: new Date()
        }
      },
      { new: true }
    );

    if (!checklist) {
      return res.status(404).json({ success: false, error: 'Checklist not found' });
    }

    // Update completion percentage
    const completedItems = checklist.items.filter(i => i.completed).length;
    checklist.completionPercentage = Math.round((completedItems / checklist.items.length) * 100);
    checklist.allDocumentsSubmitted = checklist.items.every(i => i.completed);
    
    // Update status
    if (checklist.allDocumentsSubmitted && checklist.status === 'in-progress') {
      checklist.status = 'documents-submitted';
      checklist.submissionDate = new Date();
    } else if (completedItems > 0 && checklist.status === 'not-started') {
      checklist.status = 'in-progress';
    }

    await checklist.save();

    res.json({ success: true, data: checklist });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Submit all documents
router.put('/:checklistId/submit', async (req, res) => {
  try {
    const checklist = await ApplicationChecklist.findByIdAndUpdate(
      req.params.checklistId,
      {
        status: 'documents-submitted',
        submissionDate: new Date(),
        allDocumentsSubmitted: true,
        lastUpdated: new Date()
      },
      { new: true }
    );

    if (!checklist) {
      return res.status(404).json({ success: false, error: 'Checklist not found' });
    }

    res.json({ success: true, data: checklist, message: 'Documents submitted for verification' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get all checklists for a user
router.get('/user/:userId', async (req, res) => {
  try {
    const checklists = await ApplicationChecklist.find({ userId: req.params.userId })
      .populate('schemeId', 'title');

    res.json({ success: true, data: checklists });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
