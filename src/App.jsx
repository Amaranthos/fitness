import React from "react";
import { Route, BrowserRouter, Routes, Outlet } from "react-router-dom";
import { Workouts } from "@/pages/Workouts";
import { Workout } from "@/pages/Workout";

export default () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="workouts" element={<Outlet />}>
        <Route index element={<Workouts />} />
        <Route path=":slug" element={<Workout />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

function App() {
  return <Workouts />;
}
