require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");

const app = express();

app.use(cors())

// ✅ Middleware to parse JSON
app.use(express.json());

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch((err) => console.error('❌ MongoDB Connection Error:', err));

// ✅ Test Route
app.get('/', (req, res) => {
  res.send('API is working');
});

// ✅ Routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});