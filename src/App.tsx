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
import Navbar from "./Components/Navbar";

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
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
