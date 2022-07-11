import { Anchor, Image, Icon } from '../../atoms';
import { Link } from 'react-router-dom';

export default function ProductItem(props) {
    let item = props.item
    let title = item.title.substring(0, 16)
    return (
        <div className="productItem">
            <div className="productMainImage">
                <Link to={"/product/" + item.id} >
                    <Image alt={title} url={item.image} classValue="productimage"></Image>
                </Link>
            </div>
            <Link to={"/product/" + item.id} className="product-anc" ><p className="producttitle">{title}</p></Link>
            <div className="productprice">${item.price}</div>
            <div className="ProductIcon"><Anchor><Icon name="hurt"> </Icon></Anchor></div>
        </div>
    )
}