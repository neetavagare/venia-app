import React from "react";
import { connect } from "react-redux";
import { getCarts, hideLoader, showLoader, addProductToCart, replaceCart } from "../../../redux/actions/index.js";
import { useState } from "react";
import Loader from "../../atoms/Loader/Loader";
import PricingSummery from '../ShopingCart/PricingSummery';
import Banner from '../ShopingCart/Banner';
import { DropDownOption, StateOption } from '../../../config/Constant';
import InputBox from "../../atoms/InputBox/InputBox";
import DropDownWithLabel from "../../atoms/DropDown/DropDownWithLabel";
import { Link } from "react-router-dom";
import Icon from '../../atoms/Icon/Icon';

function Guestcheckout(props) {

    let [isPayment, setIsPayment] = useState(false)
    let [isShipping, setIsShipping] = useState(false)
    let [checkout, setCheckout] = useState(true)

    useState(async () => {
        props.showLoader();
        props.getCarts();
        props.hideLoader();
    }, []);

    let totalPrice = 0;

    props.carts.forEach(element => {
        totalPrice += element.price;
    });

    totalPrice = Math.round(totalPrice)

    const shippingToMethod = () => {
        setCheckout(false)
        setIsShipping(true);
        setIsPayment(false);
    }
    const paymentToMethod = () => {
        setCheckout(false)
        setIsShipping(false);
        setIsPayment(true);
    }
    const checkoutTo = () => {
        setCheckout(false)
    }


    return (
        <form className="page-container">
            <Loader isLoading={props.isLoading}></Loader>
            <Banner text="Checkout" />
            <div className='aem-Grid aem-Grid--12'>
                {
                    checkout &&
                    <div className='aem-Grid aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 field' >
                        <div className='aem-Grid aem-GridColumn--default--8' >
                            <h2 className="guest-check">Guest Checkout</h2>
                            <h6 className="contact-text">Contact information</h6>
                            <div className="delivery-text">We’ll use these details to keep you informed on your delivery.</div>
                            <div className="aem-Grid aem-Grid--8">
                                <div className='aem-GridColumn aem-GridColumn--default--4 '>
                                    <InputBox label="Email" type={"text"} name={'email'} placeholder={'john@example.com'} classValue={'email'} />
                                    <h6 className="text-shipping">1.Shipping Information</h6>
                                    <div>
                                        <DropDownWithLabel label="Country" classValue="country-dropdown" options={DropDownOption}></DropDownWithLabel>
                                    </div>
                                </div>
                                <div className='aem-GridColumn aem-GridColumn--default--4'>
                                    <InputBox label="Phone Number" type={"number"} name={'phone'} placeholder={'99-1212-1212'} classValue={'email'} />
                                </div>
                            </div>
                            <div className="aem-Grid aem-Grid--8 name-section">
                                <div className='aem-GridColumn aem-GridColumn--default--4'>
                                    <InputBox label="First Name" type={"text"} name={'fname'} classValue={'fname'} />
                                </div>
                                <div className='aem-GridColumn aem-GridColumn--default--4'>
                                    <InputBox label="Last Name" type={"number"} name={'lname'} classValue={'email'} />
                                </div>
                            </div>
                            <div className="aem-Grid aem-Grid--8 address-section">
                                <div className='aem-GridColumn aem-GridColumn--default--4'>
                                    <InputBox label="Street Address" type={"text"} name={'address1'} classValue={'email'} />
                                </div>
                                <div className='aem-GridColumn aem-GridColumn--default--4'>
                                    <InputBox label="Street Address2" type={"text"} name={'address2'} classValue={'email'} />
                                </div>
                            </div>
                            <div className="aem-Grid aem-Grid--8 checkoutend">
                                <div className='aem-GridColumn aem-GridColumn--default--4'>
                                    <InputBox label="City" type={"text"} name={'city'} placeholder={'New York'} classValue={'email'} />
                                </div>
                                <div className='aem-GridColumn aem-GridColumn--default--4'>
                                    <div className="aem-Grid aem-Grid--4">
                                        <div className='aem-GridColumn aem-GridColumn--default--2'>
                                            <DropDownWithLabel label="State" classValue="state-dropdown" options={StateOption}></DropDownWithLabel>
                                        </div>
                                        <div className="aem-GridColumn aem-GridColumn--default--2">
                                            <InputBox label="ZIP" type={'text'} name={"zip"} placeholder={'10001'} classValue={'zip'} />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="next-page">
                                <button className="decorationNone cursor-pointer continue-btn" onClick={shippingToMethod}>continue to shipping method</button>
                            </div>
                        </div>
                    </div>
                }

                {
                    isShipping &&
                    <div className='aem-Grid aem-GridColumn aem-GridColumn--default--8 shipping-section '>
                        <h2 className="guest-check">Guest Checkout</h2>
                        <div className="aem-Grid aem-Grid--8 field-details">
                            <div className='aem-Grid aem-GridColumn aem-GridColumn--default--4'>
                                <h6 className="info-text">Shipping Information</h6>
                            </div>
                            <div className='aem-Grid aem-GridColumn aem-GridColumn--default--4 field-edit'>
                                <Icon name="Edit-2"></Icon>
                                <h6 className="text-edit">Edit</h6>
                            </div>
                        </div>
                        <div className='aem-Grid aem-GridColumn aem-GridColumn--default--8 radio-one'>
                            <h6 className="shipping-tag">2. Shipping Method</h6>
                            <input type="radio" name="radio" />
                            <label className="radiotext-one" >Standard Shipping (4-8 business days via USPS) FREE</label>
                        </div>
                        <div className='aem-Grid aem-GridColumn aem-GridColumn--default--8 radio-two'>
                            <input type="radio" name="radio" />
                            <label className="radiotext-two">Express Delivery (2-5 business days via USPS) $17.95</label>
                        </div>
                        <div className='aem-Grid aem-GridColumn aem-GridColumn--default--8 radio-three'>
                            <input type="radio" name="radio" />
                            <label className="radiotext-three">Next Day Delivery (Next business days via FedEx) $53.61</label>
                        </div>
                        <div className='aem-Grid aem-GridColumn aem-GridColumn--default--8 shipping-btn'>
                            <button className="decorationNone cursor-pointercontinue-btn payment-btn" onClick={paymentToMethod}>continue to payment</button>
                        </div>
                    </div>
                }
                {
                    isPayment &&
                    <div className='aem-Grid aem-GridColumn aem-GridColumn--default--8 payment-section'>
                        <h2 className="guest-check">Guest Checkout</h2>
                        <div className="aem-Grid aem-Grid--8 field-details">
                            <div className='aem-Grid aem-GridColumn aem-GridColumn--default--4'>
                                <h6 className="info-text">Shipping Information</h6>
                            </div>
                            <div className='aem-Grid aem-GridColumn aem-GridColumn--default--4 field-edit'>
                                <Icon name="Edit-2"></Icon>
                                <h6 className="text-edit">Edit</h6>
                            </div>
                        </div>
                        <div className="aem-Grid aem-Grid--8 field-details">
                            <div className='aem-Grid aem-GridColumn aem-GridColumn--default--4'>
                                <h6 className="info-text">Shipping Method</h6>
                            </div>
                            <div className='aem-Grid aem-GridColumn aem-GridColumn--default--4 field-edit'>
                                <Icon name="Edit-2"></Icon>
                                <h6 className="text-edit">Edit</h6>
                            </div>
                        </div>
                        <div className='aem-Grid aem-GridColumn aem-GridColumn--default--8'>
                            <h6 className="shipping-tag">3. Payment Information</h6>
                            <div className="credit-radio">
                                <input type="radio" name="radio" className="radio" />
                                <label className="radio-card" >Credit Card</label>
                            </div>
                        </div>
                        <div className="aem-Grid aem-Grid--4">
                            <div className='aem-Grid aem-GridColumn aem-GridColumn--default--4 '>
                                <InputBox label="Name on Card" type={"text"} name={'email'} classValue={'field'} />
                            </div>
                            <div className='aem-Grid aem-GridColumn aem-GridColumn--default--4'>
                                <InputBox label="Credit Card Number" type={"text"} name={'email'} classValue={'field'} />
                            </div>
                            <div className='aem-Grid aem-GridColumn aem-GridColumn--default--4 end-field'>
                                <InputBox label="Expiration Date" type={"date"} name={'email'} classValue={'date-field'} />
                                <InputBox label="CVV" type={"number"} name={'email'} classValue={'cvv-field'} />
                            </div>
                        </div>
                        <input type="checkbox" className="myCheck" />
                        <label className="radio-paypal">Billing address same as shipping address</label>
                        <div className='aem-Grid aem-GridColumn aem-GridColumn--default--8'>
                            <input type="radio" name="radio" />
                            <label className="radio-paypal" >PayPal</label>
                            <div className='aem-Grid aem-GridColumn aem-GridColumn--default--8 shipping-btn'>
                                <button className="decorationNone cursor-pointercontinue-btn payment-btn" onClick={paymentToMethod}>continue to payment</button>
                            </div>
                    </div>
                    </div>
                    
                }

            {/* Pricing summery tabel Component */}
            {
                checkout && <div className="aem-Grid aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 sign-Section">
                    <div className="aem-Grid aem-Grid--4">
                        <div className="aem-GridColumn aem-GridColumn--default--2 signin-text">
                            Sign in for Express Checkout
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--2">
                            <button className="sign-in">Sign in</button>
                        </div>
                    </div>
                </div>
            }

            <div className="aem-Grid aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 pricingSection">
                <PricingSummery totalPrice={totalPrice} isHide={false}> </PricingSummery>
            </div>
        </div>

        </form >
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

export default connect(mapStateToProps, mapDispatchToProps)(Guestcheckout);