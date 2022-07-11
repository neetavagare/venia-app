import React from 'react';

// Reusable Anchor Component. last time change so added new component
export default function AnchorV2(props) {
    let classNm = props.classValue ? props.classValue + " text-decoration" : "text-decoration"
    let href = props.href ? props.href : "#"
    return (
        <a className={classNm} onClick={props.onChange ? props.onChange : null} href={href}> {props.name}
            {
                props.children ? props.children : null
            }
        </a>
    )
}