require('dotenv').config();
    const express = require('express');
    const mongoose = require('mongoose');
    const authRoutes = require('./routes/auth');
    const cors = require('cors');

    const app = express();
    const PORT = 3000;

    app.use(cors());
    app.use(express.json());

    mongoose
      .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log('Connected to MongoDB'))
      .catch((err) => console.error('Could not connect to MongoDB', err));

    app.use('/api/auth', authRoutes);

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
