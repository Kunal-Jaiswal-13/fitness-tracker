import React from 'react';

const ExerciseList = ({ exercises, onDelete }) => {
  return (
    <div className="exercise-list">
      <h2>Exercise List</h2>
      <ul>
        {exercises.map((exercise, index) => (
          <li key={index}>
            {exercise.name} - {exercise.duration} minutes
            <button onClick={() => onDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExerciseList;
