import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Sidebar } from 'react-pro-sidebar';
import Sidebar from "../src/components/ContracterSidebar";

import Shop from "./components/shop/Shop"
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
        <Route exact path="/register" element={<Register />} / >
        <Route exact path="/test" element={<Shop />}></Route>
        <Route exact path="/userroom" element={<UserRoom />} />
        <Route exact path="/" element={<ContractorRoom />} />
        <Route exact path="/test" element={<Shop />} />
      </Routes>
    </>
  );
}

export default App;