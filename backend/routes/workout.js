const express = require("express");
const {
  createWorkout,
  getWorkout,
  getAllWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

// Get all workout
router.get("/", getAllWorkout);

// Get single workout
router.get("/:id", getWorkout);

// Post a new workout
router.post("/", createWorkout);

// Delete a workout
router.delete("/:id", deleteWorkout);

// Update a workout
router.patch("/:id", updateWorkout);

module.exports = router;

// Kapan menggunakan asyn dan syc dan caranya gimana
