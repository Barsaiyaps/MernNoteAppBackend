require('dotenv').config()
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const URL=process.env.MONGO_URL
const PORT=5000

const authRoutes = require("./routes/authRoutes");
const noteRoutes = require("./routes/noteRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/notes", noteRoutes);

// Connect to MongoDB and start server
app.listen(PORT,async()=>{  
   await mongoose.connect(URL)
    console.log("Server is running on port 5000")
})
