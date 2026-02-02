require("dotenv").config();
require("./src/config/databaseConnection");

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./src/routes/workouts");
const userRoutes = require("./src/routes/user");

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);

app.listen(process.env.PORT, () => {
  console.log("connected to db & listening on port", process.env.PORT);
});
