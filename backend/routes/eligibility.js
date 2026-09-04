const express = require('express');
const Scheme = require('../models/Scheme');
const EligibilityEngine = require('../services/eligibilityEngine');
const router = express.Router();

// Check eligibility for a specific scheme
router.post('/check/:schemeId', async (req, res) => {
  try {
    const { userProfile } = req.body;
    
    if (!userProfile) {
      return res.status(400).json({ success: false, error: 'User profile required' });
    }

    const scheme = await Scheme.findById(req.params.schemeId);
    if (!scheme) {
      return res.status(404).json({ success: false, error: 'Scheme not found' });
    }

    const eligibility = EligibilityEngine.evaluateEligibility(userProfile, scheme);

    res.json({
      success: true,
      data: {
        schemeId: scheme._id,
        schemeTitle: scheme.title.en,
        eligibility
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Check eligibility for multiple schemes (batch)
router.post('/check-batch', async (req, res) => {
  try {
    const { userProfile, schemeIds } = req.body;

    if (!userProfile || !schemeIds) {
      return res.status(400).json({ success: false, error: 'User profile and scheme IDs required' });
    }

    // If no specific schemes, get all
    let query = {};
    if (schemeIds.length > 0) {
      query._id = { $in: schemeIds };
    }

    const schemes = await Scheme.find(query).limit(100);
    const results = EligibilityEngine.evaluateBatch(userProfile, schemes);

    const eligible = results.filter(r => r.eligible);
    const maybeEligible = results.filter(r => !r.eligible && r.eligibilityScore >= 70);

    res.json({
      success: true,
      data: {
        totalSchemes: results.length,
        eligible: eligible,
        maybeEligible: maybeEligible,
        all: results
      },
      summary: {
        definitelyEligible: eligible.length,
        maybeEligible: maybeEligible.length,
        notEligible: results.length - eligible.length - maybeEligible.length
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get recommended schemes based on user profile
router.post('/recommend', async (req, res) => {
  try {
    const { userProfile, limit = 10 } = req.body;

    if (!userProfile) {
      return res.status(400).json({ success: false, error: 'User profile required' });
    }

    const allSchemes = await Scheme.find({ status: 'live' }).limit(500);
    const recommendations = EligibilityEngine.recommendSchemes(userProfile, allSchemes, limit);

    res.json({
      success: true,
      data: recommendations.map(r => ({
        schemeId: r.scheme._id,
        schemeTitle: r.scheme.title.en,
        schemeCategory: r.scheme.category,
        eligibilityScore: r.eligibility.eligibilityScore,
        matchedCriteria: r.eligibility.matchedCriteria,
        missingCriteria: r.eligibility.missingCriteria
      }))
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
