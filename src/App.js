import React, { useState } from 'react';
import ExerciseList from './components/ExerciseList';
import ExerciseForm from './components/ExerciseForm';
import WorkoutSummary from './components/WorkoutSummary';
import './styles.css';

const App = () => {
  const [exercises, setExercises] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const addExercise = (exercise) => {
    setExercises([...exercises, exercise]);
  };

  const deleteExercise = (index) => {
    const updatedExercises = [...exercises];
    updatedExercises.splice(index, 1);
    setExercises(updatedExercises);
  };

  return (
    <div className="app-container">
      <h1>Fitness Tracker</h1>
      <WorkoutSummary exercises={exercises} />
      <ExerciseList exercises={exercises} onDelete={deleteExercise} />
      {showForm ? (
        <ExerciseForm onAdd={addExercise} onCancel={() => setShowForm(false)} />
      ) : (
        <button onClick={() => setShowForm(true)}>Add Exercise</button>
      )}
    </div>
  );
};

export default App;
