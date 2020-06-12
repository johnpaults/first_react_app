import React from "react";
import './PersonComponent.css';

const PersonComponent = (props) => {
    return (
        <div className='Person'>
            <p onClick = {props.click}>My name is {props.name} and age is {props.age}</p>
            <input type = 'text' onChange = {props.updatedName} value = {props.name} />
        </div>
    );
}

export default PersonComponent;