import React from 'react';

import './Box.css'

 const Box = ({idx, backgroundColor, width, height, removeBox}) => {
    return  (
        <div className="Box">
            <button onClick={() => removeBox(idx)}>X</button>
            <div style={{ backgroundColor: backgroundColor, width: width+"px", height: height+"px" }}></div>
        </div>
    )
 }

 export default Box;