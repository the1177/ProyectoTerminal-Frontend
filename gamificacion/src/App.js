import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from './assets/pages/Login/Login';
import Home from './assets/pages/Home/Home';
import CreateUser from './assets/pages/CreateUser/CreateUsr';

function App() {
  return (
    <Router>
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={ <Login />} />
          <Route path="/sign-in" element={ <Login />} />
          <Route path="/home" element={ <Home />} />
          <Route path="/sign-up" element={ <CreateUser />} />
        </Routes>
=======
        <Route path="/" element={<Login />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sign-up" element={<CreateUser />} />
      </Routes>
>>>>>>> e8d92f101e7691b7e084c995b9c5f910f76006a3
    </Router>
  );
}

export default App;
