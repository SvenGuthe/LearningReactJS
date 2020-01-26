import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {

    const paragraphStyle = {
        fontSize: '2em'
    }

    return (
        <div className="UserOutput">
            <p>First Paragraph: {props.username}</p>
            <p style={paragraphStyle}>Second Paragraph</p>
        </div>
    );

}

export default userOutput;