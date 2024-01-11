
import React from 'react';

const WorkoutSummary = ({ exercises }) => {
  const totalDuration = exercises.reduce((total, exercise) => total + parseInt(exercise.duration), 0);

  return (
    <div className="workout-summary">
      <h2>Workout Summary</h2>
      <p>Total Duration: {totalDuration} minutes</p>
      <p>Number of Exercises: {exercises.length}</p>
    </div>
  );
};

export default WorkoutSummary;
