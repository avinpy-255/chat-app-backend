import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

const Dashboard = lazy(() => import('./pages/Dashboard'));
import { Landing } from "./pages/Landing";

function App() {
  return (
    <BrowserRouter>
      <Appbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/dashboard"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Dashboard />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

function Appbar() {
  const navigate = useNavigate(); 

  return (
    <div style={{ background: "green" }}>
      <button onClick={() => navigate("/")}>Landing</button>
      <button onClick={() => navigate("/dashboard")}>Dashboard</button>
    </div>
  );
}

export default App;
