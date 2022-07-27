import React from "react";
import Icon from "../atoms/Icon/Icon";
import DesktopBanner from '../../images/Product_Images/DesktopBanner.png';
import { Link } from 'react-router-dom';
import { Image, Label } from "../atoms";
import { Anchor } from '../atoms';
import { connect } from "react-redux";

// Mobile Banner Row.
function MobileHeader(props) {

    return (
        <header className='aem-Grid aem-Grid--4  aem-GridColumn--tablet--12 deskTopHide mobileheader'>
                <div className="aem-GridColumn aem-GridColumn--phone--1 menu">
                    <Anchor><Icon name="menu" className="menu"> </Icon></Anchor>
                </div>
                <div className="aem-GridColumn aem-GridColumn--phone--2 align-center">
                    <Link to={"/"} className="mobilevenia"><Label name="venia"></Label></Link>
                </div>
                <div className="aem-GridColumn aem-GridColumn--phone--1 mobileIcon align-center">
                    <Link to={"/cart"} className="shopbagicon"><Anchor><Icon name="ShopBag"> </Icon></Anchor> <span className='cart-count'> {props.carts.length}</span>  </Link>

                </div>
        </header>
    )
}

const mapStateToProps = (state) => {
    return {
        carts: state.feature.carts,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // addProductToCart: (payload) => dispatch(addProductToCart(payload)),
        // replaceCart: (payload) => dispatch(replaceCart(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MobileHeader);
