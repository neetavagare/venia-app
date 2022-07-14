import React from 'react';
// Reusable Checkbox Component

export default function CheckBox(props) {
    let id = props.text.replaceAll(/\s/g,'')
    return (
        <React.Fragment>
            <input type={props.type} id={id} className="checkbox" name={props.type}></input>
            <label for={id} className="filteroption"> {props.text} </label>
        </React.Fragment>

    )
}