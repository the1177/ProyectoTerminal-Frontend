import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import Quizz from "./quiz"
//Para probar solo el quiz se cambia app por quiz
ReactDOM.render(
    <BrowserRouter>
        <Quizz />
    </BrowserRouter>,
    document.getElementById("root")
);
