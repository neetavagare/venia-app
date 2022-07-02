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
                <Link to={"/"} ><img src={DesktopBanner} className="venia" /></Link>
            </div>
            <div className='aem-GridColumn aem-GridColumn--default--4 header_text'>
                {
                    HeaderLabels.manuItems.map((item) => {
                        return <Label key={item.label} name={item.label} classValue={item.className}></Label>
                    })
                }
            </div>
            <div className='aem-GridColumn aem-GridColumn--default--4 header_icons'>
                <div>
                    <Icon name="Search"> </Icon>
                    <Label name="Search" className="text5">
                    </Label>
                    <Icon name="User" />
                    <span><Label name="Sign in" className="text6"></Label> </span>
                    <Link to={"/cart"} ><Icon name="ShopBag"> </Icon> <span className='cart-count'> {props.carts.length}</span>  </Link>

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

