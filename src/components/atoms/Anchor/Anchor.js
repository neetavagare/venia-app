import React from 'react';

// Reusable Image Component.
export default function Anchor(props) {
    let classNm = props.classValue ? props.classValue : ""

    return (
        <a className={classNm} > {props.name}
            {
                props.children ? props.children : null
            }
        </a>
    )
}