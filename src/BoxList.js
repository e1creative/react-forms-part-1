import React, { useState } from 'react';
import Box from './Box'
import NewBoxForm from './NewBoxForm';

const BoxList = () => {
    const [boxes, updateBoxes] = useState([])

    const addBox = (backgroundColor, width, height) => {
        updateBoxes(data => [...data, { backgroundColor, width, height }]);
    }

    const removeBox = (idx) => {
        // remove the box from the boxes.array at the passed index
        updateBoxes(boxes =>  [...boxes].filter((box, i) => i !== idx ));
    }

    return (
        <>
            <NewBoxForm addBox={addBox} />
            { boxes.map((box, idx) => {
                return  <Box key={idx} backgroundColor={box.backgroundColor} width={box.width} height={box.height} removeBox={removeBox} idx={idx} />;

            }) }
        </>
    )
}

export default BoxList;