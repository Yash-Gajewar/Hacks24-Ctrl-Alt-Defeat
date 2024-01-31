import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import UserRoom from "./components/UserRoom";
import ContractorRoom from "./components/ContractorRoom";
// import Shop from "./components/shop/Shop";
import GetStarted from "./components/GetStarted";
import Families from "./components/Families";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/userroom" element={<UserRoom />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/" element={<ContractorRoom />} />
        <Route exact path="/test" element={<GetStarted />} />
      </Routes>
    </>
  );
}

export default App;