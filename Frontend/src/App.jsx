import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Result from "./Pages/Result";
import BuyCredit from "./Pages/BuyCredit";
import Navbar from "./Components/navbar";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import { AppContext } from "./context/AppContext";

const App = () => {
  const {showLogin} = useContext(AppContext)
  return (
    <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50">
      <Navbar/>
      {showLogin && <Login/>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/buy" element={<BuyCredit />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
