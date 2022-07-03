import React from 'react';
import Label from '../atoms/Label/Label';
import { HeaderLabels, HeaderIcons } from '../../config/Constant';
import Icon from '../atoms/Icon/Icon';
import { Link } from 'react-router-dom';
import DesktopBanner from '../../images/Product_Images/DesktopBanner.png';
import { connect } from "react-redux";
import { useEffect, useState } from "react";
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
        <header className='aem-Grid aem-Grid--12 headerborder mobileHide'>
            <div className='aem-GridColumn aem-GridColumn--default--4 venia'>
                <Link to={"/"}  ><Anchor><Image alt={""} url={DesktopBanner} classValue="venia"></Image></Anchor></Link>
            </div>
            <div className='aem-GridColumn aem-GridColumn--default--4 header_text'>
                {
                    HeaderLabels.manuItems.map((item) => {
                        return <Link className="decorationNone cursor-pointer" to={"/"} ><Label key={item.label} name={item.label} classValue={item.className}></Label></Link>
                    })
                }
            </div>
            <div className='aem-GridColumn aem-GridColumn--default--4 header_icons'>
                <div>
                    <Anchor> <Icon name="Search"> </Icon></Anchor>
                    <Anchor><Label name="Search" className="text5">
                    </Label></Anchor>
                    <Anchor><Icon name="User" /></Anchor>
                    <span><Anchor><Label name="Sign in" className="text6"></Label></Anchor> </span>
                    <Link to={"/cart"} ><Anchor><Icon name="ShopBag"> </Icon></Anchor> <span className='cart-count'> {props.carts.length}</span>  </Link>

                </div>
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
        addProductToCart: (payload) => dispatch(addProductToCart(payload)),
        replaceCart: (payload) => dispatch(replaceCart(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
