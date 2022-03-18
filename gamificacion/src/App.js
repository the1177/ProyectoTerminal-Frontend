// Imports de React
import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Imports de Componentes
import Login from "./assets/pages/Login/Login";
import Home from "./assets/pages/Home/Home";
import CreateUser from "./assets/pages/CreateUser/CreateUsr";
import Profesor from "./assets/pages/Profesor/Profesor";
import CrearCurso from "./assets/pages/Profesor/CrearCurso";
import Cursos from "./assets/pages/Profesor/Cursos";
import Badgets from "./assets/pages/Profesor/Badgets";
import Misiones from "./assets/pages/Profesor/Misiones";
import Dashboard from "./assets/pages/Profesor/Dashboard";
import CrearActividad from "./assets/pages/Profesor/Actvidad";
import Alumno from "./assets/pages/Alumno/Alumno";
import CursoAlumno from "./assets/pages/Alumno/CursoAlumno";
import BadgetsAlumno from "./assets/pages/Alumno/BadgetsAlumno";
import MisionesAlumno from "./assets/pages/Alumno/MisionesAlumno";
import DashboardAlumno from "./assets/pages/Alumno/DashboardAlumno";
import Encuesta from "./assets/pages/Encuesta/Encuesta";

function App() {
  const [name, setName] = useState("hola");
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/home" element={<Home name={name} setName={setName} />} />
        <Route path="/sign-up" element={<CreateUser />} />
        <Route path="/profesor" element={<Profesor />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/badgets" element={<Badgets />} />
        <Route path="/misiones" element={<Misiones />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/crearcurso" element={<CrearCurso />} />
        <Route path="/crearactividad" element={<CrearActividad />} />
        <Route path="/alumno" element={<Alumno />} />
        <Route path="/cursoalumno" element={<CursoAlumno />} />
        <Route path="/badgetsalumno" element={<BadgetsAlumno />} />
        <Route path="/misionesalumno" element={<MisionesAlumno />} />
        <Route path="/dashboardalumno" element={<DashboardAlumno />} />
        <Route path="/encuesta" element={<Encuesta />} />
      </Routes>
    </Router>
  );
}

export default App;
