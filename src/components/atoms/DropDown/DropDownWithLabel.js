import React from 'react';

// Reusable Image Component.
export default function DropDownWithLabel(props) {
    let classNm = props.classValue ? props.classValue : ""
    return (
        <div>
            <label className='label'>{props.label}</label>
            <select className={classNm} onChange={props.onChange} aria-label="Select Box">
                {
                    props.options.map((item, index) => {
                        return <option key={"in" + index} value={item.value}> {item.name} </option>
                    })
                }
            </select>
            <span> {props.error} </span>
        </div>

    )
}