import * as React from 'react';
import "./ProgressBar.css"


export default function  Progress  ({done}) {
const [style,setStyle]=React.useState({});
    setTimeout(() =>{
        const newStyle ={
            opacity:1,
            width: `${done}%`
        }
        setStyle(newStyle)
    },400);

    return(    
    <div className='progress_c'>
    <div className='progress-done' style={style}>
      {done}%
    </div>
  </div>
  )

};

// ReactDOM.render(<Progress />, document.getElementById('DashboardContent'));