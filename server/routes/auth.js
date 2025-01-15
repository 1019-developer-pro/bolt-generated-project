const express = require('express');
    const router = express.Router();
    const bcrypt = require('bcrypt');
    const jwt = require('jsonwebtoken');
    const User = require('../models/User');

    router.post('/signup', async (req, res) => {
      try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPassword });
        await user.save();
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
          expiresIn: '1h',
        });
        res.status(201).json({ user: { id: user._id, name: user.name, email: user.email }, token });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });

    router.post('/login', async (req, res) => {
      try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
          return res.status(400).json({ message: 'Invalid credentials' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return res.status(400).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
          expiresIn: '1h',
        });
        res.json({ user: { id: user._id, name: user.name, email: user.email }, token });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });

    module.exports = router;
