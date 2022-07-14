// Reusabel Color box Code

export default function Box(props) {
    let box = props.className ? props.className : "Box" 
    let style = props.background ? props.background : ""
    return (
        <span className={box} style= {{ background : style}} role={"note"}>{props.text}</span>
    )
}