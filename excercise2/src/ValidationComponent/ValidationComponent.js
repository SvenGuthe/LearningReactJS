import React from 'react';

const validationComponent = (props) => {

    const isLongEnough = props.length >= 5;
    let warning = 'Text is not long enough (min 5 character)!'

    if(isLongEnough) {
        warning = 'Text is long enough :)'
    }

    return(
        <div>
            <p>{warning}</p>
        </div>
    )

}

export default validationComponent;