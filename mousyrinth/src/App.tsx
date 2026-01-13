import { Routes, Route } from "react-router-dom";

import { Level1 } from "./levels/Level1";
import { Level2 } from "./levels/Level2";
import { Level3 } from "./levels/Level3";
import { Level4 } from "./levels/Level4";
import { Level5 } from "./levels/Level5";
import { Level6 } from "./levels/Level6";
import { ZapperSpiral } from "./levels/ZapperSpiral"
import { Victory } from "./levels/Victory";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Level1 />} />
      <Route path="/level/2" element={<Level2 />} />
      <Route path="/level/3" element={<Level3 />} />
      <Route path="/level/4" element={<Level4 />} />
      <Route path="/level/5" element={<Level5 />} />
      <Route path="/level/6" element={<Level6 />} />
      <Route path="/level/zapper-spiral" element={<ZapperSpiral />} />
      <Route path="/level/Victory" element={<Victory />} />
    </Routes>
  );
}

export default App;
