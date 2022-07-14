
function Loader(props) {
    let isLoading = props.isLoading;

    return (
        isLoading  ? <div className="loading" role={"alert"}>Loading&#8230;</div> : null
    );
}

export default Loader;