import React from 'react';
import Label from '../atoms/Label/Label';
import { HeaderLabels } from '../../config/Constant';
import Icon from '../atoms/Icon/Icon';
import { Link } from 'react-router-dom';
import DesktopBanner from '../../images/Product_Images/DesktopBanner.png';
import { connect } from "react-redux";
import { useEffect } from "react";
import { addProductToCart, replaceCart } from "../../redux/actions/index";
import LocalService from '../../services/LocalService/LocalService';
import { Image } from "../atoms";
import { Anchor } from '../atoms';


function Header(props) {
    useEffect(() => {
        checkBrowerRefresh()
    }, []);
    const checkBrowerRefresh = (e) => {
        let itemData = LocalService.getCart();
        props.replaceCart(itemData);
    };

    // Header Of all Pages Banner row.
    return (
        <div className='container container-header'>
            <header className='aem-Grid aem-Grid--12 max-width-header mobileHide '>
                {/* <nav role="navigation"> */}
                <div className='aem-GridColumn aem-GridColumn--default--4 venia'>
                <Link className="decorationNone cursor-pointer" to={"/"} ><Label name="venia" className="logo"></Label></Link>
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--4 header_text'>
                    <ul>
                        {
                            HeaderLabels.manuItems.map((item) => {
                                return <li><Link className="decorationNone cursor-pointer" to={"/category"} ><Label key={item.label} name={item.label} classValue={item.className}></Label></Link></li>
                            })
                        }
                    </ul>
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--4 header_icons'>
                    <ul >
                        <li><Link to={"/cart"} ><Anchor><Icon name="ShopBag"> </Icon></Anchor><span className='cart-count'> {props.carts.length}</span></Link></li>

                    </ul>
                </div>
            </header>
        </div>

    )
}
const mapStateToProps = (state) => {
    return {
        carts: state.feature.carts,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addProductToCart: (payload) => dispatch(addProductToCart(payload)),
        replaceCart: (payload) => dispatch(replaceCart(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
