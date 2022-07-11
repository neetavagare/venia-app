import React from "react";
import Icon from "../../atoms/Icon/Icon";
import ppbtn from '../../../images/Product_Images/ppbtn.png';
import { Button, Image } from '../../atoms';


// Pricing Summery Component and it's working.


export default function PricingSummery(props) {
    return (
        <React.Fragment>
            <div className="aem-Grid aem-Grid--12 ">
                <h2 className="pricingtext">Pricing Summery</h2>
                <div className="aem-GridColumn aem-GridColumn--default--6">
                    <div className="subtotal">Subtotal</div>
                    <div className="coupen">Coupen</div>
                    <div className="gift">Gift Card</div>
                    <div className="tax">Estimated tax</div>
                    <div className="shhipping">Estimated shipping</div>
                    <div className="total ">Estimated Total</div>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--6 pricing ">
                    <div className="subtotal">${props.totalPrice ? (props.totalPrice ) : 0}</div>
                    <div className="coupen">0</div>
                    <div className="gift">${props.totalPrice ? 5 : 0}</div>
                    <div className="tax">0</div>
                    <div className="shhipping">FREE</div>
                    <div className="total">${props.totalPrice ? (props.totalPrice - 5) : 0}</div>
                </div>
            </div>
            <div className="aem-Grid aem-Grid--12 textAlignCenter">
                <Button classValue="checkoutbtn">
                    <span> <Icon name="lock"> </Icon>  checkout</span>
                </Button>
            </div>
            <div className="aem-Grid aem-Grid--12 textAlignCenter" >
                <Button classValue="paypal-exp">
                    <Image alt={'Payplay'} url={ppbtn} classValue="paypalbtn"></Image>
                </Button>

            </div>
        </React.Fragment>
    )
}