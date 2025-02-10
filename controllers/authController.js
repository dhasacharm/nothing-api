const passport = require('passport');
const jwt = require('jsonwebtoken');
const { User } = require('../models/user');
const bcrypt = require('bcrypt');

// Register a new user
exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hashedPassword });
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
};

// Login user and issue a JWT
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log('This is a log message',username);
    console.log('This is a log message',password);
    const user = await User.findOne({ username: username  });
    console.log('This is a log message',user);

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
};
