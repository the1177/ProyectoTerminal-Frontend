import React, { Component } from "react";
import "./quiz.css"

export default class Quiz extends Component {
    render() {
        return (
                <div class ="main-quiz">
                    <div class ="quiz">
                            <h2 className="text-quiz">
                                ¿Con qué juego te identificas más?
                            </h2>
                            <div class ="image">
                                <div class ="containerIma">
                                    <div class ="image1">
                                        <img class="photo" src="FG.jpg" alt="imagen"/>
                                    </div>
                                    <div class ="image2">
                                        <img class="photo" src="wz.jpg" alt="imagen"/>
                                    </div>    
                                </div>
                                <div class ="ima-change">
                                    <div class ="change-one">
                                        <h5 className="text-change">
                                            ¿No lo conozces?
                                        </h5>
                                        <button type="submit" className="changeButton btn btn-primary btn-block">Cambiar</button>
                                    </div>
                                    <div class ="change-two">
                                        <h5 className="text-change-two">
                                            ¿No lo conozces?
                                        </h5>
                                        <button type="submit" className="changeButton btn btn-primary btn-block">Cambiar</button>
                                        
                                    </div>
                                </div>                                  
                            </div>
                            <div class ="vote">
                                <div class ="first-opinion">
                                    Me identifico más con: "Fallguys"
                                </div>
                                <div class ="container-botton">
                                    <div>
                                        <button type="submit" className="vote1-botton btn btn-block"></button>
                                    </div>
                                    <div>
                                        <button type="submit" className="vote2-botton btn btn-block"></button>
                                    </div>
                                    <div>
                                        <button type="submit" className="vote3-botton btn btn-block"></button>
                                    </div>
                                    <div>
                                        <button type="submit" className="vote4-botton btn btn-block"></button>
                                    </div>
                                    <div>
                                        <button type="submit" className="vote5-botton btn btn-block"></button>
                                    </div>
                                </div>
                                <div class ="second-opinion">
                                    Me identifico más con: "Warzone"
                                </div>
                            </div>                         
                    </div>               
                </div>            
        );
    }
}