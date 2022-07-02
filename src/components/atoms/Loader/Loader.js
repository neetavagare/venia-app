import ClipLoader from "react-spinners/ClipLoader";

// Loader Component

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "black",
};

function Loader(props) {
    let isLoading = props.isLoading;

    return (
        isLoading  ? <div class="loading">Loading&#8230;</div> : null
    );
}

export default Loader;