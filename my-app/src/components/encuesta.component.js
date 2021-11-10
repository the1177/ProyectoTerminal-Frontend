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
                                        <img src="FG.jpg" alt="imagen"/>
                                    </div>
                                    <div class ="image2">
                                        <img src="wz.jpg" alt="imagen"/>
                                    </div>    
                                </div>
                                <div class ="ima-change">
                                    <div class ="change-one">
                                        <h5 className="text-change">
                                            ¿No lo conozces?
                                        </h5>
                                    </div>
                                    <div class ="change-two">
                                        <h5 className="text-change-two">
                                            ¿No lo conozces?
                                        </h5>
                                    </div>
                                </div>                                  
                            </div>                          
                    </div>               
                </div>            
        );
    }
}