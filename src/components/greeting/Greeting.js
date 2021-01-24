import React from 'react';
import './Greeting.css';

export const Greeting = (props) => {
    return (
        <>
            <h1 className="title">
                {props.name}
            </h1>
        </>
    )
}