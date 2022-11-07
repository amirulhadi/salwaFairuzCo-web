

import React from 'react';


function Button (props) {
    return (
        <button type="button" class={props.class}>{props.buttonName}</button>
    )
}

export default Button;