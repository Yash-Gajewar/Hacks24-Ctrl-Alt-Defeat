import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Sidebar } from 'react-pro-sidebar';
import Sidebar from "../src/components/ContracterSidebar";
import Families from "./components/Families";
import Shop from "./components/shop/Shop";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/amazon-products" element={<Shop />}></Route>
      </Routes>
    </>
  );
}

export default App;
