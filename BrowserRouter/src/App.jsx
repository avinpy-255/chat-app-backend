import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Landing } from "./pages/Landing";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route  path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Appbar() {
  const navi = useNavigate();
  return <div>
    <div style={{ background: "green" }}>
      <button
        onClick={() => {
          navi("/");
        }}
      >
        Landing
      </button>
      <button
        onClick={() => {
          navi("/dashboard");
        }}
      >
        dashboard
      </button>
    </div>
  </div>;
}
export default App;
