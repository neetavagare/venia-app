import React from "react";

export default function Product(props){
    return(
        <a className={props.classvalue} {...props}>{props.name}</a>
    )
}