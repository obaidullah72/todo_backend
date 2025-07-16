const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Routes
const taskRoutes = require('./routes/tasks');
app.use('/tasks', taskRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('📌 Task API is running...');
});

// Start server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
