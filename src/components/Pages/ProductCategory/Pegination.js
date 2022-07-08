import { Anchor } from "../../atoms";

const Pagination = (props) => {

    return (
        <ul className="pagination">
            {
                [...Array(props.totalItem)].map((item, index) => {
                    return <li key={"co" + index} onClick={(e) => props.paginate(e, index + 1)}>
                        <Anchor classValue="cursor-pointer" name={index + 1}></Anchor> </li>
                })
            }
        </ul >
    )
}
export default Pagination;