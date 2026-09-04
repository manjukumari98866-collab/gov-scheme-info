const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Register user
router.post('/register', async (req, res) => {
  try {
    const { name, email, phone, password, loginMethod } = req.body;

    if (!email && !phone) {
      return res.status(400).json({ success: false, error: 'Email or phone required' });
    }

    const userId = `USR_${Date.now()}`;
    const user = new User({
      userId,
      name,
      email,
      phone,
      password,
      loginMethod: loginMethod || 'email',
      profile: {}
    });

    await user.save();

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.json({
      success: true,
      data: { userId: user._id, name, email, token },
      message: 'User registered successfully'
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Login user
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, error: 'Email and password required' });
    }

    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ success: false, error: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    user.lastLogin = new Date();
    await user.save();

    res.json({
      success: true,
      data: { userId: user._id, name: user.name, email: user.email, token }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get user profile
router.get('/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).select('-password');
    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }
    res.json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Update user profile
router.put('/:userId/profile', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.userId,
      { profile: req.body, updatedAt: new Date() },
      { new: true }
    ).select('-password');

    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }

    res.json({ success: true, data: user, message: 'Profile updated' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Save scheme
router.post('/:userId/save/:schemeId', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.userId,
      { $addToSet: { savedSchemes: req.params.schemeId } },
      { new: true }
    );

    res.json({ success: true, data: user, message: 'Scheme saved' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get saved schemes
router.get('/:userId/saved', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate('savedSchemes');
    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }

    res.json({ success: true, data: user.savedSchemes });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
