import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from './assets/pages/Login/Login';
import Home from './assets/pages/Home/Home';
import CreateUser from './assets/pages/CreateUser/CreateUsr';

import Profesor from './assets/pages/Profesor/Profesor';
import Perfil from './assets/pages/Profesor/Profile';
import CrearCurso from './assets/pages/Profesor/CrearCurso';
import Table from './assets/pages/Profesor/Table';
import Cursos from './assets/pages/Profesor/Cursos'
import Badgets from './assets/pages/Profesor/Badgets';
import Misiones from './assets/pages/Profesor/Misiones';
import Dashboard from './assets/pages/Profesor/Dashboard';
import CrearActividad from './assets/pages/Profesor/Actividad';
import Componentes from './assets/pages/Profesor/Componentes';
import Calendario from './assets/pages/Profesor/Calendario';

import Alumno from './assets/pages/Alumno/Alumno';
import CursoAlumno from './assets/pages/Alumno/CursoAlumno';
import BadgetsAlumno from './assets/pages/Alumno/BadgetsAlumno';
import MisionesAlumno from './assets/pages/Alumno/MisionesAlumno';
import DashboardAlumno from './assets/pages/Alumno/DashboardAlumno';
import EditarUsuario from './assets/pages/Alumno/EditarUsuario'
import Encuesta from './assets/pages/Encuesta/Encuesta';
import Alumnos from './assets/pages/Alumno/components/EditarUser/alumnoslist'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sign-up" element={<CreateUser />} />
        <Route path="/profesor" element={<Profesor />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/badgets" element={<Badgets />} />
        <Route path="/misiones" element={<Misiones />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/crearcurso" element={<CrearCurso />} />
        <Route path="/crearactividad" element={<CrearActividad />} />
        <Route path="/table" element={<Table />} />
        <Route path="/profile" element={<Perfil />} />
        <Route path="/componentes" element={<Componentes />} />
        <Route path="/calendario" element={<Calendario />} />
        <Route path="/alumno" element={<Alumno />} />
        <Route path="/cursoalumno" element={<CursoAlumno />} />
        <Route path="/badgetsalumno" element={<BadgetsAlumno />} />
        <Route path="/misionesalumno" element={<MisionesAlumno /> } />
        <Route path="/dashboardalumno" element={<DashboardAlumno /> } />
        <Route path="/encuesta" element={<Encuesta />} />
        <Route path="/editarUsuario" element={<EditarUsuario /> } />
        <Route path="/list" element={<Alumnos /> } />
      </Routes>
    </Router>
  );
}

export default App;
