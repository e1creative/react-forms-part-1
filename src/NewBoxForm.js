import React, { useState } from 'react';
import './NewBoxForm.css'

const NewBoxForm = ({addBox}) => {
    // JMT: initialize state to an empty object holding our values
    const INITIAL_STATE = { backgroundColor: "", height: "", width: ""}
    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleFormDataChange = e => {
        const { name, value } = e.target
        setFormData(data => {
            return ({...data, [name]: value})
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // JMT: destructure formData since it contains all the current values
        const { backgroundColor, width, height } = formData;
        /**
         * JMT: NOTE about formData vs. e.target - if we use e.target, we are NOT 
         * doing things the react-y way.  we would be relying on the form itself as
         * the source of truth, rather than the form's state.  By using formData we
         * rely on the state as the source of truth
         */
        addBox(backgroundColor, width, height)
        // setFormData(INITIAL_STATE)
    }

    return (
        <form className="NewBoxForm" onSubmit={handleSubmit}>
            <h1 className="NewBoxForm-title">New Box Form</h1>

            <label htmlFor="backgroundColor">Background Color:</label>
            <input type="text" id="backgroundColor" name="backgroundColor" value={formData.backgroundColor} onChange={handleFormDataChange} />

            <label htmlFor="width">Width:</label>
            <input type="number" id="width" name="width" value={formData.width} onChange={handleFormDataChange}/>

            <label htmlFor="height">Height:</label>
            <input type="number" id="height" name="height" value={formData.height} onChange={handleFormDataChange}/>

            <button>Create Box</button>
        </form>
    )
}

export default NewBoxForm;