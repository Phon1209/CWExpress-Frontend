import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Machine from "./components/machine/machine";
import { FiChevronLeft } from "react-icons/fi";
import { MdLocalCarWash } from "react-icons/md";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-primary h-screen px-4 pb-4 pt-6 relative flex flex-col bg-opacity-50">
        <header className="flex justify-between items-center mb-20 text-lg">
          <Link to="/">
            <div className="flex flex-row items-center">
              <FiChevronLeft className="mx-2" />
              <p className="text-xl leading-none">Back</p>
            </div>
          </Link>
          <MdLocalCarWash className="w-24 h-12 fill-secondary" />
        </header>
        <Routes>
          <Route
            index
            element={<h1 className="text-3xl text-center">สวัสดี</h1>}
          />
          <Route path="/:machineID" element={<Machine />} />
          <Route path="*" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
