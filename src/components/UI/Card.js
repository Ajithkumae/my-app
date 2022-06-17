import './Card.css';
import React from 'react';

const Card = (props) =>{

    const classes = 'card ' + props.className;

    return(
        <div className={classes}>{props.children}</div> // chilren is a reserved in react it shows the content between the card component
    )
}

export default Card