
function Loader(props) {
    let isLoading = props.isLoading;

    return (
        isLoading  ? <div className="loading">Loading&#8230;</div> : null
    );
}

export default Loader;