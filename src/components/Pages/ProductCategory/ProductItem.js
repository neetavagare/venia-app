import { Anchor, Image, Icon } from '../../atoms';
import { Link } from 'react-router-dom';

export default function ProductItem(props) {
    let item = props.item
    return (
        <div className="productItem">
            <div className="productMainImage"> <Image alt={""} url={item.image} classValue="productimage"></Image></div>
            <Link to={"/product/" + item.id} className="product-anc" ><p className="producttitle">{item.title.substring(0, 16)}</p></Link>
            <div className="productprice">${item.price}</div>
            <div className="ProductIcon"><Anchor><Icon name="hurt"> </Icon></Anchor></div>
        </div>
    )
}