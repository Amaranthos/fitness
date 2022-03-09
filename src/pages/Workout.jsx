import { CardList } from "@/components/CardList";
import { getWorkoutWithSlug } from "@/data/utils";
import React from "react";
import { useParams } from "react-router-dom";

export function Workout() {
  const params = useParams();
  const workout = getWorkoutWithSlug(params.slug);

  return (
    <>
      <header className="flex justify-around pt-2">
        <h1 className="text-6xl font-semibold">{workout.name}</h1>
      </header>
      <CardList>
        {workout.exercises.map((exercise) => (
          <li
            key={`${workout.name}-${exercise.name}`}
            className="mb-2 last:mb-0"
          >
            {exercise.type === "gauntlet" ? (
              <Gauntlet exercise={exercise} />
            ) : (
              <section className="p-6 bg-white border-b border-gray-400 rounded cursor-pointer hover:bg-gray-200">
                <span className="flex flex-row items-baseline">
                  <h3 className="text-lg font-semibold text-gray-800 whitespace-nowrap">
                    {exercise.reps?.sets && `${exercise.reps.sets} x `}
                    {exercise.reps?.count && `${exercise.reps.count} x `}
                    {exercise.reps?.duration &&
                      `${getDuration(exercise.reps.duration)} - `}
                    {exercise?.duration &&
                      `${getDuration(exercise.duration)} - `}
                    {exercise.name}&nbsp;
                  </h3>
                  {exercise.reps?.desc && (
                    <>
                      {" "}
                      <span className="text-gray-700 text-md whitespace-nowrap">
                        {exercise.reps?.desc}
                      </span>
                    </>
                  )}
                </span>
              </section>
            )}
          </li>
        ))}
      </CardList>
    </>
  );
}

function getDuration({ mins = 0, secs = 0, ...duration }) {
  if (mins && secs) return `${mins}:${secs} mins`;
  if (mins && !secs) return `${mins} mins`;
  if (!mins && secs) return `${secs} secs`;

  throw new Error(`${duration} invalid`);
}

function Gauntlet({ exercise }) {
  return (
    <section className="p-6 bg-white border-b border-gray-400 rounded cursor-pointer hover:bg-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 whitespace-nowrap">
        {exercise.reps?.sets && `${exercise.reps.sets} x `}
        {exercise.reps?.count && `${exercise.reps.count} x `}
        {exercise.reps?.duration && `${getDuration(exercise.reps.duration)} - `}
        {exercise?.duration && `${getDuration(exercise.duration)} - `}
      </h3>
      {exercise.name.map((name, i) => (
        <p>
          {i > 0 && "↳ ".padStart(2 * i, "\xa0")}
          {name}
        </p>
      ))}
    </section>
  );
}
