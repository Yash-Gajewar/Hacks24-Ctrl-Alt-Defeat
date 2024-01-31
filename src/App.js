import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
// import { Sidebar } from 'react-pro-sidebar';
import Sidebar from '../src/components/ContracterSidebar';


function App() {
  return (
    <>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
