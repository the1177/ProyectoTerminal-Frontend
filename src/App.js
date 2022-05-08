// Imports de React
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Imports de Componentes
import Login from "./assets/pages/Login/Login";
import Home from "./assets/pages/Home/Home";
import CreateUser from "./assets/pages/CreateUser/CreateUsr";
import Encuesta from "./assets/pages/Encuesta/Encuesta";

// Vistas Profesor
import Profesor from "./assets/pages/Profesor/Profesor";
import CrearCurso from "./assets/pages/Profesor/CrearCurso";
import Cursos from "./assets/pages/Profesor/Cursos";
import Badgets from "./assets/pages/Profesor/Badgets";
import Misiones from "./assets/pages/Profesor/Misiones";
import Dashboard from "./assets/pages/Profesor/Dashboard";
import Calendario from "./assets/pages/Profesor/Calendario";
import CrearActividad from "./assets/pages/Profesor/Actvidad";

// Vistas Alumno
import Alumno from "./assets/pages/Alumno/Alumno";
import CursoAlumno from "./assets/pages/Alumno/CursoAlumno";
import BadgetsAlumno from "./assets/pages/Alumno/BadgetsAlumno";
import MisionesAlumno from "./assets/pages/Alumno/MisionesAlumno";
import DashboardAlumno from "./assets/pages/Alumno/DashboardAlumno";


function App() {
  return (
    <Router>
      <Routes>
        {/** Rutas globales */}
        <Route path="/" element={<Login />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sign-up" element={<CreateUser />} />
        <Route path="/encuesta" element={<Encuesta />} />

        {/** Rutas Alumno */}
        <Route path="/alumno" element={<Alumno />} />
        <Route path="/dashboardalumno" element={<DashboardAlumno />} />
        <Route path="/cursoalumno" element={<CursoAlumno />} />
        <Route path="/misionesalumno" element={<MisionesAlumno />} />
        <Route path="/badgetsalumno" element={<BadgetsAlumno />} />
        
        {/** Rutas Profesor */}
        <Route path="/profesor" element={<Profesor />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/crearcurso" element={<CrearCurso />} />
        <Route path="/misiones" element={<Misiones />} />
        <Route path="/crearactividad" element={<CrearActividad />} />
        <Route path="/badgets" element={<Badgets />} />
        <Route path="/calendario" element={<Calendario />} />
      </Routes>
    </Router>
  );
}

export default App;
