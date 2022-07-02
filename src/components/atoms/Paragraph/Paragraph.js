import React from 'react';

// Reusable Line Component.

export default function Paragraph(props) {
    return (
        <p className={props.classValue} {...props}>{props.name}</p>
    )
}