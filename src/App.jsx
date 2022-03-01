import React from "react";

import workouts from "./workouts.json";

export default () => (
  <>
    <h1 className="text-xl">Workouts</h1>
    <ul className="flex-col">
      {workouts.map((workout) => (
        <li key={workout.name}>
          <Workout workout={workout} />
        </li>
      ))}
    </ul>
  </>
);

function Workout({ workout }) {
  return (
    <>
      <h2 className="text-lg">{workout.name}</h2>
      <ol className="flex-row">
        {workout.exercises.map((exercise) => (
          <li key={`${workout.name}-${exercise.name}`}>
            <Exercise exercise={exercise} />
          </li>
        ))}
      </ol>
    </>
  );
}

function Exercise({ exercise }) {
  return <div className="text-sm">{exercise.name}</div>;
}
