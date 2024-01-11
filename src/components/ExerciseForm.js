import React, { useState } from 'react';

const ExerciseForm = ({ onAdd, onCancel }) => {
  const [exercise, setExercise] = useState({
    name: '',
    duration: '',
  });

  const handleChange = (e) => {
    setExercise({ ...exercise, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(exercise);
    setExercise({ name: '', duration: '' });
  };

  return (
    <div className="exercise-form">
      <h2>Add Exercise</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Exercise Name:
          <input type="text" name="name" value={exercise.name} onChange={handleChange} required />
        </label>
        <label>
          Duration (minutes):
          <input
            type="number"
            name="duration"
            value={exercise.duration}
            onChange={handleChange}
            required
          />
        </label>
        <div className="button-group">
          <button type="submit">Add</button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExerciseForm;
