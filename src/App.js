import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import AppProvider from "./context/appContext";
import Machine from "./components/machine/machine";
import Payment from "./components/payment/payment";
import ConfirmationPage from "./components/payment/confirmation";
import Success from "./components/payment/success";
import Homepage from "./components/pages/homepage";

function App() {
  return (
    <AppProvider>
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
          <main className="mt-6 pt-6 pb-10 h-full w-full">
            <Routes>
              <Route
                element={
                  <div className="px-8 h-full w-full">
                    <Outlet />
                  </div>
                }
              >
                <Route index element={<Homepage />} />
                <Route path="machines">
                  <Route path=":machineID" element={<Machine />} />
                </Route>
                <Route path="payment" element={<Payment />} />
                <Route path="confirm" element={<ConfirmationPage />} />
              </Route>
              <Route path="success" element={<Success />} />
              <Route path="*" />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
