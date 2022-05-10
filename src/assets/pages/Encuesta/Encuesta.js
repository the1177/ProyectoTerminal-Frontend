import React, { Component } from "react";
import './Encuesta.css'
import ImageSlider1 from './components/ImageSlider1';
import ImageSlider2 from './components/ImageSlider2';
import { SliderData1 , SliderData2 } from './components/SliderData';
import edrey from './components/Edrey.jpg'

import "bootstrap/dist/css/bootstrap.min.css";

//Comentar CTRL+KC
class Encuesta extends Component {

    
    render() {
        return (
                <div className ="main-quiz">
                    
                    <div className ="menu">
                    </div>
                    <div className ="perfil-container">
                        <div className ="quiz-logo">
                            <div className ="div-container">
                                <div className ="div1">    
                                </div>
                                <div className ="div2">                                    
                                </div>
                                <div className ="div1">                                    
                                </div>
                            </div>
                            <h2 className ="text-logo">
                                Quiz
                            </h2>
                        </div>
                        <div className="perfil-ima">
                            <div className ="container-p">
                                <div className ="perfil-photo">
                                    <img className="photo-image" src={edrey} alt="imagen"/>
                                </div>
                                <div className ="perfil-name">
                                    <div >
                                        <h2 className ="text-photo">
                                            Edrey Hernandez
                                        </h2>
                                    </div>
                                    <div className="tx-div">
                                    <h2 className ="text-range">
                                            Rango #9
                                        </h2>
                                    </div>
                                </div>
                            </div>                    
                        </div>
                    </div>
                    <div className ="quiz">
                            <div className ="question">
                                <h2 className="text-quiz">
                                    ¿Con qué juego te identificas más?
                                </h2>
                            </div>
                            <div className ="image">
                                <div className="image-container">
                                    <div className="image-change">
                                        <div className ="change-one">
                                            <div className ="img-chg">
                                                {/* <img className="photo"src={mario} alt="imagen"/> */}
                                                <ImageSlider1 slides={SliderData1} />
                                                {/* <button type="submit" className="changeButton btn btn-primary btn-block">Cambiar juego</button> */}
                                            </div>
                                        </div>                                    
                                    </div>
                                </div>
                                <div className="image-container">
                                    <div className="image-change">
                                        <div className ="change-one">
                                            <div className ="img-chg">
                                                <ImageSlider2 slides={SliderData2}/>
                                                {/* <img className="photo"src={fortnite} alt="imagen"/> */}
                                                {/* <button type="submit" className="changeButton btn btn-primary btn-block">Cambiar juego</button> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="opinion">
                                <div className ="container-vote">
                                        <div className ="first-opinion">
                                            Me identifico más
                                        </div>
                                        <div className ="container-botton">
                                            <div>
                                                <button type="submit" className="vote1-botton btn btn-block" value='a'></button>
                                            </div>
                                            <div>
                                                <button type="submit" className="vote2-botton btn btn-block" value='b'></button>
                                            </div>
                                            <div>
                                                <button type="submit" className="vote3-botton btn btn-block" value='c'></button>
                                            </div>
                                            <div>
                                                <button type="submit" className="vote4-botton btn btn-block"value='d'></button>
                                            </div>
                                            <div>
                                                <button type="submit" className="vote5-botton btn btn-block" value='e'></button>
                                            </div>
                                        </div>
                                        <div className ="second-opinion">
                                            Me identifico más
                                        </div>
                                </div> 
                            </div>                                            
                    </div>               
                </div>
          
        );  
    }
} 

export default Encuesta;