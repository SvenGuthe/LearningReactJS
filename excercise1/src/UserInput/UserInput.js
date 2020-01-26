import React from 'react';
import "./UserInput.css";

const userInput = (props) => {

    const buttonStyle = {
        border: 'dashed 2px red'
    }

    return (
        <div className="UserInput">
            <input 
                type="text" 
                onChange={props.changeName} 
                value={props.default}
                style={buttonStyle}></input>
        </div>
    );

}

export default userInput;