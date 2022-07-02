import React from "react";
import { HeaderLabels } from "../../../config/Constant";
import Icon from '../../atoms/Icon/Icon';
import Banner from "./Banner";

import RecentView from "./RecentView";
import Estimaterow from './Estimaterow';
import { connect } from "react-redux";
import { getProductsSuccess, getCarts, hideLoader, showLoader, addProductToCart, replaceCart } from "../../../redux/actions/index.js";
import { useEffect, useState } from "react";
import Loader from "../../atoms/Loader/Loader";
import LocalService from "../../../services/LocalService/LocalService";
import PricingSummery from './PricingSummery';

function ShopingCart(props) {

    useState(async () => {
        props.showLoader();
        props.getCarts();
        props.hideLoader();
    }, []);

    let totalPrice = 0;

    props.carts.forEach(element => {
        totalPrice += element.price;
    });

    totalPrice = Math.floor(totalPrice)

    const removeProduct = (item) => {
        LocalService.removeProductCart(item);
        let cartItems = LocalService.getCart();
        props.replaceCart(cartItems);
    }

    return (
        <section>
            <Loader isLoading={props.isLoading}></Loader>
            <Banner />

            {/* Cart Page If we add item It will shown on cart page. */}
            
            <div className='aem-Grid aem-Grid--12'>
                <div className='aem-Grid aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12' >
                    {
                        props.carts.length == 0 ?
                            <div className='aem-Grid aem-GridColumn--default--8' >
                                <h1> Cart is empty. Please add product to cart. </h1>
                            </div> : null
                    }
                    {props.carts.map((item) => {
                        let title = item.title?.split(' ')[0]
                        return <div className='aem-Grid aem-GridColumn--default--8' >
                            <div className='aem-Grid aem-Grid--phone--4 cart-container aem-Grid--12'>
                                <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--11' >
                                    <div className="aem-Grid aem-Grid--4">
                                        <div className='aem-GridColumn aem-GridColumn--default--2 img_box'>
                                            <img src={item.image} className="image" />
                                        </div>
                                        <div className='aem-GridColumn aem-GridColumn--default--2 details'>
                                            <p className="title">  {title}</p>
                                            <div className="size"> Size : {item.size}</div>
                                            <div className="color"> Color : {item.color}</div>
                                            <div className="price">${item.price}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--phone--1 deskTopHide">...</div>

                                <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--11'>
                                    <div className='aem-GridColumn aem-GridColumn--default--2 cart_button button'>
                                        <Icon name="minus"> </Icon>
                                        <button className="btn1">2</button>
                                        <Icon name="plus"> </Icon>
                                    </div>
                                </div>
                                <div className='aem-GridColumn aem-GridColumn--default--4 trashIcon mobileHide'>
                                    <div className="button-spacer">
                                        <Icon name="Edit2"> </Icon>
                                        <span className="trash">Edit item</span>
                                    </div>
                                    <div className="button-spacer">
                                        <a className="remove-btn" onClick={() => removeProduct(item)}>
                                            <Icon name="trash2"> </Icon>
                                            <span className="trash">Remove</span>
                                        </a>
                                    </div>
                                    <div className="button-spacer">
                                        <Icon name="hurt"> </Icon>
                                        <span className="trash">Save for later</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                    }

                    {/* Estimating row tabel component */}

                    {
                        props.carts.length == 0 ? null :
                            <Estimaterow></Estimaterow>
                    }

                </div>

                  {/* Pricing summery tabel Component */}

                <div className="aem-Grid aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 pricingborder">
                    <PricingSummery totalPrice={totalPrice}> </PricingSummery>
                </div>
            </div>

            {/* Recent view Carousel Component */}

            <RecentView></RecentView>


        </section>
    )
}


const mapStateToProps = (state) => {
    return {
        carts: state.feature.carts,
        isLoading: state.feature.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCarts: (payload) => dispatch(getCarts(payload)),
        showLoader: (payload) => dispatch(showLoader(payload)),
        hideLoader: (payload) => dispatch(hideLoader(payload)),
        addProductToCart: (payload) => dispatch(addProductToCart(payload)),
        replaceCart: (payload) => dispatch(replaceCart(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopingCart);