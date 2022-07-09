import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Machine from "./components/machine/machine";
import ConfirmationPage from "./components/payment/confirmation";
import Payment from "./components/payment/payment";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-white h-screen relative flex flex-col">
        <header
          className="flex flex-row justify-center items-center 
                    fixed top-0 left-0 p-3 pt-6 w-full z-10
                    text-lg font-extrabold bg-white"
        >
          <Link to="/">
            <span className="text-[#45A0A6]">CW</span>
            <span className="text-[#4B5768]">Express</span>
          </Link>
        </header>
        <main className="mt-6 pt-6 pb-10 px-8 h-full w-full">
          <Routes>
            <Route
              index
              element={<h1 className="text-3xl text-center">สวัสดี</h1>}
            />
            <Route path="machines">
              <Route path=":machineID" element={<Machine />} />
            </Route>
            <Route path="payment" element={<Payment />} />
            <Route path="confirm" element={<ConfirmationPage />} />
            <Route path="*" />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
