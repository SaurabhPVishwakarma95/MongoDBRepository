const mongoose = require('mongoose');
const express = require('express');
const app = express();

// Built-in body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const uri = "mongodb+srv://Saurabh:saurabh%402025@cluster0.l5fu00e.mongodb.net/User?retryWrites=true&w=majority&appName=Cluster0";
const userRoutes = require('./router');
app.use('/users', userRoutes);

mongoose.connect(uri).then(() => {
  console.log("✅ Connected to MongoDB Atlas");
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
}).catch((err) => {
  console.error("❌ Connection error:", err.message);
});
