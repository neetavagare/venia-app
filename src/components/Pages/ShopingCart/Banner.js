import React from "react";
import '../../../scss/main.scss';

// Shopping Bag Banner Component.

function Banner(props) {
  return (
    <section>
      <h1 className="banner"> {props.text}</h1>
      <div className="dotborder"></div>
    </section>
  )
}

export default Banner;