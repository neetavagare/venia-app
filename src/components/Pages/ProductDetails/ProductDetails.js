import React from "react";
import Icon from '../../atoms/Icon/Icon';
import { useState } from "react";
import { getProductsSuccess, getProductsCountSuccess, hideLoader, showLoader, addProductToCart } from "../../../redux/actions/index.js";
import { connect } from "react-redux";
import { ProductService } from "../../../services/ProductService";
import { useParams } from 'react-router-dom';
import Loader from "../../atoms/Loader/Loader";
import RatingStar from '../../atoms/RatingStar/RatingStar';
import Box from '../../atoms/Box/Box';
import { ADDED_PRODUCT_TO_BAG_MESSAGE, ColorFilter, PRODUCT_ALREADY_EXITS, SizeFilter, Sizes } from '../../../config/Constant';
import LocalService from "../../../services/LocalService/LocalService";
import { useNavigate } from 'react-router-dom'
import Helper from "../../../helper/Helper";
import { Anchor, Button, Image, Paragraph, ProductGallery } from "../../atoms";
import CategoryLabel from "../ProductCategory/CategoryLabel";



function ProductDetails(props) {

    const { id } = useParams();
    const [count, setcount] = useState(1);
    console.log(props.productData);
    let navigate = useNavigate();
    let [images, setImages] = useState(null);
    useState(async () => {
        props.showLoader();
        var data = await ProductService.getProduct(id);
        props.getProductsSuccess(data);
        props.hideLoader();
        let imagesArray = [
        ];
        [...Array(8)].map((item, indxe) => {
            return imagesArray.push({
                original: data.image,
                thumbnail: data.image
            })
        })
        setImages(imagesArray);
    }, []);


    const addToCart = (product) => {
        let productCopy = {
            ...product,
            count: count,
            size: SizeFilter[0].text,
            color: ColorFilter[0].text
        };
        var oldProductCartData = LocalService.getCart();
        if (oldProductCartData.length) {
            var isExits = oldProductCartData.filter(d => d.id === product.id);
            if (isExits.length > 0) {
                Helper.showToastMessage(PRODUCT_ALREADY_EXITS, true);
                return;
            }
        }
        LocalService.addToCart(productCopy);
        props.addProductToCart(productCopy);
        Helper.showToastMessage(ADDED_PRODUCT_TO_BAG_MESSAGE);

        navigate("/cart", { replace: true });

    }

    // Single Pruduct Details adding, increment, rating star, add to cart all working Component.

    return (
        <section className="page-container product-container">
            <Loader isLoading={props.isLoading}></Loader>

            <div className="aem-Grid aem-Grid--12 Productdetails">
                <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--12 paddingTop15">
                    {
                        images?.length > 0 &&
                        <ProductGallery images={images} />
                    }
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12">
                    <div className="catagary">
                        <CategoryLabel></CategoryLabel>

                    </div>
                    <h2 className="peekbag">{props.productData.title}</h2>
                    <div className="detailprice">${props.productData.price}</div>
                    <div className="starIcon">
                        <RatingStar count={props.productData?.rating?.rate}></RatingStar><span className="startCount"> ({props.productData?.rating?.count}) </span>
                    </div>
                    <div className="loreamdetail">{props.productData.description?.substring(0, 100)}.
                        <span>
                            <Anchor className="readmore" name="Read More"></Anchor>
                        </span>
                    </div>

                    <div>
                        <Paragraph classValue="quantity" name="Quantity"></Paragraph>
                        <div className="incrementbtn">
                            <Button onClick={() => {
                                if (count <= 0) {
                                    //setcount(0)
                                    props.getProductsCountSuccess(count + 1);
                                } else {
                                    setcount(count - 1);
                                    props.getProductsCountSuccess(count + 1);
                                }
                            }}
                                classValue="btn-background"
                            ><Anchor><Icon name="minus" className="minusIcon" > </Icon></Anchor></Button>
                            <Button classValue={"quanrbtn"}>{count}</Button>

                            <Button classValue="btn-background" onClick={
                                () => {
                                    props.getProductsCountSuccess(count + 1);
                                    setcount(count + 1)

                                }
                            }><Anchor><Icon name="plus"> </Icon></Anchor></Button>
                        </div>
                    </div>
                    <div className="addtocartbtn">
                        <Button classValue="addbtn" onClick={() => addToCart(props.productData)}>
                            <span>  add to cart</span>
                        </Button>
                    </div>
                    <div className="svgicontext">
                        <div className="svgIcon">
                            <span className="saveIcon">
                                <Anchor><Icon name="hurt"></Icon></Anchor>
                                <Anchor><span className="saving">Save</span></Anchor>
                            </span>
                            <span>
                                <Anchor><Icon name="share-2"> </Icon></Anchor>
                                <Anchor><span className="sharing">Share</span></Anchor>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12 productdescribe">
                    <h3 className="hoodie mobile-text-align-center">{props.productData.title}</h3>
                    <div className="description mobile-text-align-center">Description</div>
                    <Paragraph classValue="describe"
                        name={props.productData.description} >
                    </Paragraph>
                    <div className="sectionender mobileHide"></div>
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