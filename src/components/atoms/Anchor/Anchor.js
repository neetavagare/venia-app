import React from 'react';

// Reusable Anchor Component.
export default function Anchor(props) {
    let classNm = props.classValue ? props.classValue : ""

    return (
        <a className={classNm} onClick={props.onChange ? props.onChange : null}> {props.name}
            {
                props.children ? props.children : null
            }
        </a>
    )
}