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
<<<<<<< HEAD
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/modules" element={<ModulePage />} />
              <Route path="*" element={<ErrorPage />} />
              
=======
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="*" element={<ErrorPage />} />
>>>>>>> 6df8a5f4e5213810a8ca2e1f2aaf2e28fb9fc385
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
