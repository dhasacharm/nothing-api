require('dotenv').config();  // Add this line at the top

const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const session = require('express-session');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware setup
app.use(bodyParser.json());
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/auth', authRoutes);
app.use('/user', userRoutes);

// Connect to DB and start server
const startServer = async () => {
  await connectDB();
  app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
  });
};

startServer();
