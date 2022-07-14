import React from 'react';

// Reusable Image Component.
export default function DropDown(props) {
    let classNm = props.classValue ? props.classValue : ""

    return (
        <select className={classNm} onChange={props.onChange} aria-label="Select Box">
            {
                props.options.map((item, index) => {
                    return <option key={"in" + index} value={item.value}> {item.name} </option>
                })
            }

            {/* <option value="women's clothing">Women</option>
            <option value="men's clothing">Men</option>
            <option value="jewelery">Jwellery</option>
            <option value="electronics">Electronics</option> */}
        </select>
    )
}