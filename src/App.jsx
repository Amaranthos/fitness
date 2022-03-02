import React from "react";
import { Card } from "./Card";
import { CardList } from "./CardList";

import workouts from "./workouts.json";

export default () => (
  <>
    <header className="pt-2 flex justify-around">
      <h1 className="text-6xl font-semibold">Workouts</h1>
    </header>
    <CardList>
      {workouts.map((workout) => (
        <li key={workout.name} className="mb-2 last:mb-0">
          <Card title={workout.name} />
        </li>
      ))}
    </CardList>
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
