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
<<<<<<< HEAD
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/modules" element={<ModulePage />} />
              <Route path="/modules/budgeting" element={<BudgetingPage/>}>
                <Route index element = {<Navigate replace to="ex1"/>}/>
                <Route path="ex1" element={<B_1/>} />
                <Route path="ex2" element={<B_2/>} />
              </Route>

=======
              <Route path="/modules" element={<ModulePage />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/portfolio" element={<Portfolio />} />
>>>>>>> f48c18372524ac284af1486859c995d986206e46
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
