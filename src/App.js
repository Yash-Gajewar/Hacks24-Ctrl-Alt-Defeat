import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import { Room } from './components';
import { Home } from '@mui/icons-material';


function App() {
  return (
    <>
      <Routes>
      <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
