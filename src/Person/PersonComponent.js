import React from "react";

const PersonComponent = (props) => {
    return (
        <div>
            <p onClick = {props.click}>My name is {props.name} and age is {props.age}</p>
        </div>
    );
}

export default PersonComponent;