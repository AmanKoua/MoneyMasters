import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import AboutUs from "./Pages/AboutUs";
import Leaderboard from "./Pages/Leaderboard";
import ErrorPage from "./Pages/errorPage";
import ModulePage from "./Pages/ModulePage";

import "./styles.css";

function App() {
  return (
    <>
      <div className="w-full h-screen scroll-smooth bg-gradient-to-b from-white via-white to-moneyBackgroundBlue overflow-y-hidden">
        <BrowserRouter>
          <Navbar></Navbar>
          <div>
            <Routes>
              <Route path="/login" element={<Login></Login>} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/" element={<Home />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/module" element={<ModulePage />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
