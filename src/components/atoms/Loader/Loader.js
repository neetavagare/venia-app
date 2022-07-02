
function Loader(props) {
    let isLoading = props.isLoading;

    return (
        isLoading  ? <div class="loading">Loading&#8230;</div> : null
    );
}

export default Loader;