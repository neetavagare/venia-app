import ReactStars from "react-rating-stars-component";

// Rating Star Component

function RatingStar(props) {

    return <ReactStars
        count={props.count}
        // onChange={(

        // )}
        size={24}
        activeColor="black"
    />

}

export default RatingStar;