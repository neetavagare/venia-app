export default function Button(props) {
    return (
        <button onClick={props.onClick?props.onClick : null} className={props.classValue ? props.classValue : ""} >
            {props.children ? props.children : null}
        </button>
    )
}