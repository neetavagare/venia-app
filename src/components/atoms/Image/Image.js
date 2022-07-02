import React from 'react';

// Reusable Image Component.
export default function Image(props) {
    let classNm = props.classValue ? props.classValue : ""

    return (
        <img className={classNm} alt={props.alt ? props.alt : ""} src={props.url} />
    )
}