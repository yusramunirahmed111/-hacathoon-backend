const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const User = require('./models/User');
const authRoutes = require('./routes/auth');

dotenv.config();

const app = express(); 

app.use(cors());       
app.use(express.json());
app.use(express.static('public'));

// Routes
app.use('/api/auth', authRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('DB error:', err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, 'localhost', () => 
  console.log(`Server running on http://localhost:${PORT}`)
);
