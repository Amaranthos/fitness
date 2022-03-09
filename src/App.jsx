import React from "react";
import { Route, BrowserRouter, Routes, Outlet } from "react-router-dom";
import { Workouts } from "@/pages/Workouts";
import { Workout } from "@/pages/Workout";

export default () => (
  <BrowserRouter basename="fitness/">
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="workouts" element={<Outlet />}>
        <Route index element={<Workouts />} />
        <Route path=":slug" element={<Workout />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

function App() {
  console.log("Rendering App");

  return <Workouts />;
}

function NotFound() {
  console.log("Rendering NotFound");

  return <p>Page not found</p>;
}
