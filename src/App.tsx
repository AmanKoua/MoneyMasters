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
import Portfolio from "./Pages/Portfolio";
import ModulePage from "./Pages/ModulePage";
import BudgetingPage from "./Pages/BudgetingPage";

import "./styles.css";
import B_1 from "./components/Exercises/Budgeting/B_1";
import B_2 from "./components/Exercises/Budgeting/B_2";

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
              <Route path="/modules" element={<ModulePage />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
