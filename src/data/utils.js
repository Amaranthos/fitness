import workouts from "./workouts.json";

export function getNameAsSlug(workout) {
  return workout.name?.replaceAll(" ", "_");
}

export function getWorkoutWithSlug(slug) {
  return workouts.find((workout) => getNameAsSlug(workout) === slug);
}
