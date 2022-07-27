export default function InputBox(props) {
    let className = props.classValue ? props.classValue : ""
    let id = props.id
    return (

        <div>
            <label className="label" for={id}> {props.label} </label>
            <input type={props.type} className={className} name={props.type} placeholder={props.placeholder}></input>
            <span for={id}> {props.error} </span>
        </div>

    )
}