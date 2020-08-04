import React from "react";
import './PersonComponent.css';

const PersonComponent = (props) => {
    return (
        <div className='Person'>
            <p className = {props.classes} onClick = {props.deletePerson}>My name is {props.name} and age is {props.age}</p>
            <input type = 'text' onChange = {props.changed} value = {props.name} />
        </div>
    );
}

export default PersonComponent;