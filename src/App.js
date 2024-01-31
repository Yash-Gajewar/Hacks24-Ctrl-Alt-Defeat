import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import { Room } from './components';


function App() {
  return (
    <>
      <Routes>
      <Route exact path='/' element={ <Room /> }></Route>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
