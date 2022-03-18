import React, { useEffect, useState } from "react";
import "./Home.css"
import Menu from '../../commons/Menu/Menu';

const Home = (props) =>{
    var { name, setName } = props;
    const [counter, setCounter] = useState(0);
    const onClick = () => {
        setName("caca");
    };
    useEffect(() => {
        var num = counter;
        num++;
        setCounter( num );
    }, [ name ]);
    return(
    <div className="div-container">
        <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />

        <div className="page-wrap">
            <div className="caja c1">
                {name}
                <button onClick={onClick}>  </button>
            </div>
            <div className="caja c2">
                { counter }
            </div>
        </div>
    </div>
    )
};

export default Home;