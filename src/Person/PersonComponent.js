import React from "react";
import './PersonComponent.css';

const PersonComponent = (props) => {
    return (
        <div className='Person' onClick = {props.deletePerson}>
            <p>My name is {props.name} and age is {props.age}</p>
            <input type = 'text' onChange = {props.updatedName} value = {props.name} />
        </div>
    );
}

export default PersonComponent;