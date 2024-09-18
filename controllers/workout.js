const Workout = require("../models/Workout");
const { errorHandler } = require("../auth");

module.exports.addWorkout = (req, res) => {
    const newWorkout = new Workout({
        userId: req.user.id,
        name: req.body.name,
        duration: req.body.duration,
        status: "pending",
        dateAdded: new Date()
    });
    return newWorkout.save()
        .then((workout) => res.status(201).send(workout))
        .catch(error => errorHandler(error, req, res));
};

module.exports.getMyWorkouts = (req, res) => {
    return Workout.find({ userId: req.user.id })
        .then(workouts => res.status(200).send({ workouts }))
        .catch(error => errorHandler(error, req, res));
};

module.exports.updateWorkout = (req, res) => {
    return Workout.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(workout => res.status(200).send({ message: 'Workout updated successfully', workout }))
        .catch(error => errorHandler(error, req, res));
};

module.exports.deleteWorkout = (req, res) => {
    return Workout.findByIdAndDelete(req.params.id)
        .then(() => res.status(200).send({ message: 'Workout deleted successfully' }))
        .catch(error => errorHandler(error, req, res));
};

module.exports.completeWorkoutStatus = (req, res) => {
    return Workout.findByIdAndUpdate(req.params.id, { status: "complete" }, { new: true })
        .then(workout => res.status(200).send({ message: 'Workout status updated successfully', workout }))
        .catch(error => errorHandler(error, req, res));
};
