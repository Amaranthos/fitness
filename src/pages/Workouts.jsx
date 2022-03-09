import { Card, CardList } from "@/components";
import { getNameAsSlug } from "@/data/utils";
import workouts from "@/data/workouts.json";
import React from "react";
import { Link } from "react-router-dom";

export function Workouts() {
  return (
    <>
      <header className="pt-2 flex justify-around">
        <h1 className="text-6xl font-semibold">Workouts</h1>
      </header>
      <CardList>
        {workouts.map((workout) => (
          <li key={workout.name} className="mb-2 last:mb-0">
            <Link to={`/workouts/${getNameAsSlug(workout)}`}>
              <Card title={workout.name} />
            </Link>
          </li>
        ))}
      </CardList>
    </>
  );
}
