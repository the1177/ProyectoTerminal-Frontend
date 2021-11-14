import React, { Component } from "react";
import "./quiz.css"

export default class Quiz extends Component {
    render() {
        return (
                <div class ="main-quiz">
                    <div class ="menu">
                        
                    </div>
                    <div class ="perfil-container">
                        <div class ="quiz-logo">
                            <div class ="div-container">
                                <div class ="div1">    
                                </div>
                                <div class ="div2">                                    
                                </div>
                                <div class ="div1">                                    
                                </div>
                            </div>
                            <h2 class ="text-logo">
                                Quiz
                            </h2>
                        </div>
                        <div class="perfil-ima">
                            <div class ="container-p">
                                <div class ="perfil-photo">
                                    <img class="photo-image" src="edrey.jpg" alt="imagen"/>
                                </div>
                                <div class ="perfil-name">
                                    <div >
                                        <h2 class ="text-photo">
                                            Edrey Hernandez
                                        </h2>
                                    </div>
                                    <div class="tx-div">
                                    <h2 class ="text-range">
                                            Rango #9
                                        </h2>
                                    </div>
                                </div>
                            </div>                    
                        </div>
                    </div>
                    <div class ="quiz">
                            <div class ="question">
                                <h2 className="text-quiz">
                                    ¿Con qué juego te identificas más?
                                </h2>
                            </div>
                            <div class ="image">
                                <div class="image-container">
                                    <div class="image-change">
                                        <div class ="change-one">
                                            <img class="photo"src="wz.jpg" alt="imagen"/>
                                            <button type="submit" className="changeButton btn btn-primary btn-block">Cambiar juego</button>
                                        </div>                                    
                                    </div>
                                </div>
                                <div class="image-container">
                                    <div class="image-change">
                                        <div class ="change-one">
                                            <img class="photo"src="fg.jpg" alt="imagen"/>
                                            <button type="submit" className="changeButton btn btn-primary btn-block">Cambiar juego</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="opinion">
                            </div>                     
                    </div>               
                </div>
          
        );
    }
}