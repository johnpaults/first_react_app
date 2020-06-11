import React from "react";

const PersonComponent = (props) => {
    return (
        <div>
            <p>My name is {props.name} and age is {props.age}</p>
        </div>
    );
}

export default PersonComponent;