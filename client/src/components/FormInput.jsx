import React, { useState } from 'react'
import { Form } from 'react-bootstrap';

import "./FormInput.css"
const FormInput = (props) => {

    const [focused, setFocused] = useState(false);
    const { label, errorMessage, onChange, id, ...inputProps } = props;

    const handleFocus = (e) => {
        setFocused(true)
    };

    return (

        <div className='my-2 formInput' >
            <Form.Label>{label}</Form.Label>
            <Form.Control
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() => { inputProps.name === "confirmPassword" && setFocused(true) }}
                focused={focused.toString()}
            />
            
            <span className='error '>{errorMessage}</span>
        </div>

    )
}

export default FormInput