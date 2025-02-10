require('dotenv').config();  // Add this line at the top

const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const session = require('express-session');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const port = process.env.PORT || 3000;
const app = express();
const cross = require('cors');
app.use(cross());

// Middleware setup
app.use(bodyParser.json());
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Import Routes
const patientRoutes = require("./routes/patientRoutes");
// const organizationRoutes = require("./routes/organizationRoutes");

// Use Routes
app.use("/api/patients", patientRoutes);
// app.use("/api/organizations", organizationRoutes);
// Routes
app.use('/auth', authRoutes);
app.use('/user', userRoutes);

// Connect to DB and start server
const startServer = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log('Server running on http://localhost:3000');
  });
};

startServer();
