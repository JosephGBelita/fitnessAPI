const express = require("express");
const workoutController = require("../controllers/workout");
const { verify } = require("../auth");

const router = express.Router();

// Add a new workout (protected route)
router.post("/addWorkout", verify, workoutController.addWorkout);

// Get all workouts for the logged-in user (protected route)
router.get("/getMyWorkouts", verify, workoutController.getMyWorkouts);

// Update a specific workout by its ID (protected route)
router.patch("/updateWorkout/:id", verify, workoutController.updateWorkout);

// Delete a specific workout by its ID (protected route)
router.delete("/deleteWorkout/:id", verify, workoutController.deleteWorkout);

// Mark a workout as complete (protected route)
router.post("/completeWorkoutStatus/:id", verify, workoutController.completeWorkoutStatus);

module.exports = router;