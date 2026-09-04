const express = require('express');
const Scheme = require('../models/Scheme');
const router = express.Router();

// Get all schemes with filters
router.get('/', async (req, res) => {
  try {
    if (Scheme.db.readyState !== 1) {
      return res.status(503).json({
        success: false,
        offline: true,
        error: 'Database is unavailable. The frontend should use its local service data.'
      });
    }

    const { category, city, status, page = 1, limit = 20 } = req.query;
    let query = {};

    if (category) query.category = category;
    if (city) query.applicableCities = city;
    if (status) query.status = status;

    const skip = (page - 1) * limit;
    const schemes = await Scheme.find(query)
      .limit(Number(limit))
      .skip(skip)
      .sort({ createdAt: -1 });

    const total = await Scheme.countDocuments(query);

    res.json({
      success: true,
      data: schemes,
      pagination: {
        total,
        page: Number(page),
        limit: Number(limit),
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get single scheme
router.get('/:id', async (req, res) => {
  try {
    const scheme = await Scheme.findById(req.params.id);
    if (!scheme) {
      return res.status(404).json({ success: false, error: 'Scheme not found' });
    }
    
    // Increment views
    scheme.views += 1;
    await scheme.save();
    
    res.json({ success: true, data: scheme });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Search schemes
router.get('/search/query', async (req, res) => {
  try {
    const { q } = req.query;
    const schemes = await Scheme.find({
      $or: [
        { 'title.en': { $regex: q, $options: 'i' } },
        { 'title.hi': { $regex: q, $options: 'i' } },
        { 'description.en': { $regex: q, $options: 'i' } },
        { category: { $regex: q, $options: 'i' } }
      ]
    }).limit(20);

    res.json({ success: true, data: schemes });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get schemes by category
router.get('/category/:category', async (req, res) => {
  try {
    const schemes = await Scheme.find({ category: req.params.category })
      .limit(50);
    res.json({ success: true, data: schemes });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get schemes by city
router.get('/city/:city', async (req, res) => {
  try {
    const schemes = await Scheme.find({ applicableCities: req.params.city })
      .limit(50);
    res.json({ success: true, data: schemes });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
