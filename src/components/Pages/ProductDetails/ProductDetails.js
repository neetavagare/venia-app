import React from "react";
import Swatch01 from '../../../images/Product_Images/Swatch01.png';
import Swatch02 from '../../../images/Product_Images/Swatch02.png';
import Swatch03 from '../../../images/Product_Images/Swatch03.png';
import Swatch04 from '../../../images/Product_Images/Swatch04.png';
import BreathIconn from '../../../images/Product_Images/BreathIconn.png';
import BreathIcon2 from '../../../images/Product_Images/BreathIcon2.png';
import swaetIcon1 from '../../../images/Product_Images/swaetIcon1.png';
import swaetIcon2 from '../../../images/Product_Images/swaetIcon2.png';
import Icon from '../../atoms/Icon/Icon';
import { useState } from "react";
import { getProductsSuccess, getProductsCountSuccess, hideLoader, showLoader, addProductToCart } from "../../../redux/actions/index.js";
import { connect } from "react-redux";
import { ProductService } from "../../../services/ProductService";
import { useParams } from 'react-router-dom';
import Loader from "../../atoms/Loader/Loader";
import RatingStar from '../../atoms/RatingStar/RatingStar';
import Box from '../../atoms/Box/Box';
import { ColorFilter, SizeFilter, Sizes } from '../../../config/Constant';
import LocalService from "../../../services/LocalService/LocalService";
import { useNavigate } from 'react-router-dom'
import Helper from "../../../helper/Helper";
function ProductDetails(props) {

    const { id } = useParams();
    const [count, setcount] = useState(0);
    console.log(props.productData);
    let navigate = useNavigate();

    useState(async () => {
        props.showLoader();
        var data = await ProductService.getProduct(id);
        props.getProductsSuccess(data);
        props.hideLoader();

    }, []);

    const addToCart = (product) => {
        let productCopy = {
            ...product,
            count: count,
            size: SizeFilter[0].text,
            color: ColorFilter[0].text
        };
        LocalService.addToCart(productCopy);
        props.addProductToCart(productCopy);
        Helper.showToastMessage("Added Product To Bag");

        navigate("/cart", { replace: true });

    }

    // Single Pruduct Details adding, increment, rating star, add to cart all working Component.

    return (
        <section>
            <Loader isLoading={props.isLoading}></Loader>

            <div className="aem-Grid aem-Grid--12 Productdetails">
                <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--12">

                    <img alt={props.productData.title} src={props.productData.image} className="detailimage" />
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12">
                    <div className="catagary">
                        <span className="catagory1">Clothing/</span>
                        <span className="catagory2">Women’s/</span>
                        <span className="catagory3">Outerwear</span>
                    </div>
                    <h2 className="peekbag">{props.productData.title}</h2>
                    <div className="detailprice">${props.productData.price}</div>
                    <div className="starIcon">
                        <RatingStar count={props.productData?.rating?.rate}></RatingStar><span> ({props.productData?.rating?.count}) </span>
                    </div>
                    <div className="loreamdetail">{props.productData.description?.substring(0, 100)}.
                        <span>
                            <a className="readmore" href="">
                                Read more
                            </a>
                        </span>
                    </div>
                    <div className="detailcolor">Color</div>
                    <div>
                        <img src={Swatch01} className="swatch1" alt="Image Color1" />
                        <img src={Swatch02} className="swatch2" alt="Image Color1"/>
                        <img src={Swatch03} className="swatch3" alt="Image Color1" />
                        <img src={Swatch04} className="swatch4" alt="Image Color1"/>
                    </div>
                    <div className="detailsize">Size</div>
                    <div>
                        {
                            Sizes.map((item) => (
                                <Box type="checkbox" text={item.text} />
                            )
                            )}
                    </div>
                    <div>
                        <p className="quantity">Quantity</p>
                        <div className="incrementbtn">
                            <button onClick={() => {
                                if (count <= 0) {
                                    //setcount(0)
                                    props.getProductsCountSuccess(count + 1);
                                } else {
                                    setcount(count - 1);
                                    props.getProductsCountSuccess(count + 1);
                                }
                            }}
                                className="btn-background"
                            ><Icon name="minus" className="minusIcon" > </Icon></button>
                            <button className="quanrbtn" >{count}</button>
                            <button className="btn-background" onClick={
                                () => {
                                    props.getProductsCountSuccess(count + 1);
                                    setcount(count + 1)

                                }
                            }><Icon name="plus"> </Icon></button>
                        </div>
                    </div>
                    <button className="addbtn" onClick={() => addToCart(props.productData)}>
                        <span>  add to cart</span>

                    </button>
                    <div className="svgIcon">
                        <span className="saveIcon">
                            <Icon name="hurt"></Icon>
                            <span className="saving">Save</span>
                        </span>
                        <span>
                            <Icon name="share-2"> </Icon>
                            <span className="sharing">Share</span>
                        </span>
                    </div>
                </div>
            </div>
            <div className="aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 productdescribe">
                    <h2 className="hoodie mobile-text-align-center">{props.productData.title}</h2>
                    <div className="description mobile-text-align-center">Description</div>
                    <p className="describe">
                        {props.productData.description}
                    </p>
                    <div className="sectionender mobileHide"></div>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 detailing">
                    <div className="aem-Grid aem-Grid--6 ">
                        <div className="aem-GridColumn aem-GridColumn--default--3">
                            <div className="aem-Grid aem-Grid--3 ">
                                <p className="precaution">Details</p>
                                <div className="aem-GridColumn aem-GridColumn--default--1">
                                    <img src={swaetIcon1} className="swaetIcon1" />
                                    <img src={swaetIcon2} className="swaetIcon2" />
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--default--2">
                                    <div className="wicking">Sweat-wicking </div>
                                    <div className="fabric">Lightweight Fabric</div>
                                </div>
                            </div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--3 content2">
                            <div className="aem-Grid aem-Grid--3 ">
                                <div className="aem-GridColumn aem-GridColumn--default--1">
                                    <img src={BreathIconn} className="BreathIconn" />
                                    <img src={BreathIcon2} className="BreathIcon2" />
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--default--2">
                                    <div className="breath">Breathable</div>
                                    <div className="cotton">69% nylon, 31% lycra</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="aem-GridColumn aem-GridColumn--phone--4 sectionender deskTopHide"></div>
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        productData: state.feature.productData,
        isLoading: state.feature.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProductsSuccess: (payload) => dispatch(getProductsSuccess(payload)),
        getProductsCountSuccess: (payload) => dispatch(getProductsCountSuccess(payload)),
        showLoader: (payload) => dispatch(showLoader(payload)),
        hideLoader: (payload) => dispatch(hideLoader(payload)),
        addProductToCart: (payload) => dispatch(addProductToCart(payload)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);