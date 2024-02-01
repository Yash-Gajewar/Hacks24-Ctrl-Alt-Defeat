import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Sidebar } from 'react-pro-sidebar';
import Sidebar from "../src/components/ContracterSidebar";
import Families from "./components/Families";
import Shop from "./components/shop/Shop"
import UserRoom from "./components/UserRoom";
import ContractorRoom from "./components/ContractorRoom";
import Contractors from "./components/Contractors";
import ContracterSidebar from "../src/components/ContracterSidebar";
import GetStarted from "./components/GetStarted";
import ContractorUserDashboard from "./components/ContractorUserDashboard";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/userroom" element={<UserRoom />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/shop" element={<Shop />}></Route>
        <Route exact path="/amazon-products" element={<Shop />}></Route>
        <Route exact path="/userroom" element={<UserRoom />} />
        <Route exact path="/home" element={<ContractorRoom />} />
        <Route exact path="/families" element={<Families />} />
        <Route exact path="/contractors" element={<Contractors />} />
        <Route exact path="/contractor-user-dashboard" element={<ContractorUserDashboard />} />
        <Route exact path="/get-started" element={<GetStarted />} />
      </Routes>
    </>
  );
}

export default App;