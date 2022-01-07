import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from './assets/pages/Login/Login';
import Home from './assets/pages/Home/Home';
import CreateUser from './assets/pages/CreateUser/CreateUsr';
import Profesor from './assets/pages/Profesor/Profesor';
import Curso from './assets/pages/Profesor/Curso';
import Badgets from './assets/pages/Profesor/Badgets';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sign-up" element={<CreateUser />} />
        <Route path="/profesor" element={<Profesor />} />
        <Route path="/curso" element={<Curso />} />
        <Route path="/badgets" element={<Badgets />} />

      </Routes>
    </Router>
  );
}

export default App;
