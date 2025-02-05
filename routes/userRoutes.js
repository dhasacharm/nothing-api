const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

// Protected route (requires authentication)
router.get('/profile', authMiddleware, (req, res) => {
  res.json({ message: 'This is your profile data', user: req.user });
});

module.exports = router;
