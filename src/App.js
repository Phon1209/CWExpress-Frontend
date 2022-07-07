import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Machine from "./components/machine/machine";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-white h-screen relative flex flex-col">
        <header
          className="flex flex-row justify-between items-center 
                    fixed top-0 left-0 p-3 w-full z-10
                    text-lg font-extrabold bg-white shadow-md"
        >
          <Link to="/">
            <span className="text-primary">CW</span>
            <span className="text-[#D07D00]">Express</span>
          </Link>
        </header>
        <main className="mt-6 pt-6 pb-10 px-8 h-full w-full">
          <Routes>
            <Route
              index
              element={<h1 className="text-3xl text-center">สวัสดี</h1>}
            />
            <Route path="/:machineID" element={<Machine />} />
            <Route path="/payment" element={<div>Payment</div>} />
            <Route path="*" />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
