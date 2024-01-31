import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login, Register, Room, Home } from './components';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/room" element={<Room />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
