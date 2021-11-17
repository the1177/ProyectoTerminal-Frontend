import React, { Component } from "react";
import "./bigfive.css"

export default class Bigfive extends Component {
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
                                    <div>
                                    <h2 class ="text-range">
                                            Rango #9
                                        </h2>
                                    </div>
                                </div>
                            </div>                    

                        </div>
                    </div>
                    <div class ="quiz">
                        <div class="bg-container">
                            <div>
                                <h2 className="text-quiz">
                                    La prueba de la personalidad de los cinco grandes
                                </h2>   
                            </div>
                            <div class ="questions-container">
                                <div class="bigfive-question">
                                    <div class ="bg-question">
                                        Tengo una palabra amable para todos
                                        <div class ="vote-bf">
                                            <div class ="opinion-positive">
                                                Me identifico
                                            </div>
                                            <div class ="container-botton">
                                                <div>
                                                    <button type="submit" className="vote1 btn btn-block"></button>
                                                </div>
                                                <div>
                                                    <button type="submit" className="vote2 btn btn-block"></button>
                                                </div>
                                                <div>
                                                    <button type="submit" className="vote3 btn btn-block"></button>
                                                </div>
                                                <div>
                                                    <button type="submit" className="vote4 btn btn-block"></button>
                                                </div>
                                                <div>
                                                    <button type="submit" className="vote5 btn btn-block"></button>
                                                </div>
                                            </div>
                                            <div class ="opinion-negative">
                                                No me identifico
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                                <div class ="separator-question">
                                </div>
                                <div class="bigfive-question">
                                    <div class ="bg-question">
                                    Siempre estoy preparado
                                        <div class ="vote-bf">
                                            <div class ="opinion-positive">
                                                Me identifico
                                            </div>
                                            <div class ="container-botton">
                                                <div>
                                                    <button type="submit" className="vote1 btn btn-block"></button>
                                                </div>
                                                <div>
                                                    <button type="submit" className="vote2 btn btn-block"></button>
                                                </div>
                                                <div>
                                                    <button type="submit" className="vote3 btn btn-block"></button>
                                                </div>
                                                <div>
                                                    <button type="submit" className="vote4 btn btn-block"></button>
                                                </div>
                                                <div>
                                                    <button type="submit" className="vote5 btn btn-block"></button>
                                                </div>
                                            </div>
                                            <div class ="opinion-negative">
                                                No me identifico
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class ="separator-question">
                                </div>
                                <div class="bigfive-question">
                                    <div class ="bg-question">
                                    Me siento cómodo con la gente
                                        <div class ="vote-bf">
                                            <div class ="opinion-positive">
                                                Me identifico
                                            </div>
                                            <div class ="container-botton">
                                                <div>
                                                    <button type="submit" className="vote1 btn btn-block"></button>
                                                </div>
                                                <div>
                                                    <button type="submit" className="vote2 btn btn-block"></button>
                                                </div>
                                                <div>
                                                    <button type="submit" className="vote3 btn btn-block"></button>
                                                </div>
                                                <div>
                                                    <button type="submit" className="vote4 btn btn-block"></button>
                                                </div>
                                                <div>
                                                    <button type="submit" className="vote5 btn btn-block"></button>
                                                </div>
                                            </div>
                                            <div class ="opinion-negative">
                                                No me identifico
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class ="separator-question">
                                </div>
                                <div class="bigfive-question">
                                    <div class ="bg-question">
                                    A menudo me siento triste
                                        <div class ="vote-bf">
                                            <div class ="opinion-positive">
                                                Me identifico
                                            </div>
                                            <div class ="container-botton">
                                                <div>
                                                    <button type="submit" className="vote1 btn btn-block"></button>
                                                </div>
                                                <div>
                                                    <button type="submit" className="vote2 btn btn-block"></button>
                                                </div>
                                                <div>
                                                    <button type="submit" className="vote3 btn btn-block"></button>
                                                </div>
                                                <div>
                                                    <button type="submit" className="vote4 btn btn-block"></button>
                                                </div>
                                                <div>
                                                    <button type="submit" className="vote5 btn btn-block"></button>
                                                </div>
                                            </div>
                                            <div class ="opinion-negative">
                                                No me identifico
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                    
                    </div>               
                </div>            
        );
    }
}