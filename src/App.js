import { BrowserRouter, Routes, Route } from "react-router-dom";
import Machine from "./components/machine/machine";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<h1>สวัสดี</h1>} />
        <Route path="/:machineID" element={<Machine />} />
        <Route path="*" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
