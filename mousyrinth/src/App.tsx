import { Routes, Route } from "react-router-dom";

import { Level1 } from "./levels/Level1";
import { Level2 } from "./levels/Level2";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Level1 />} />
      <Route path="/level/2" element={<Level2 />} />
    </Routes>
  );
}

export default App
