
import React from "react";
import "./index.css"
const Card = (props) => {
    return (
        <div className="App" id ="App">
           <div className='four'>{props.digitfour}</div>
           <div className='three'>{props.digitthree}</div>
           <div className='two'>{props.digittwo}</div>
           <div className='one'>{props.digitone}</div>
        </div>
      );
}

export default Card