import React from 'react';

// Reusable Line Component.

export default function Line(props) {
    return (
        <a className={props.classValue} {...props}>{props.name}</a>
    )
}