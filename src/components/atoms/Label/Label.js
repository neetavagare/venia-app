import React from 'react';

// Reusable Label Component.

export default function Label(props) {
    return (
        <a className={props.classValue} {...props}>{props.name}</a>
    )
}