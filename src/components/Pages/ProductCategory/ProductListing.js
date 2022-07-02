import React from "react";
import { Filters, SizeFilter, BrandFilter, StylesFilter, ColorFilter } from "../../../config/Constant";
import Label from '../../atoms/Label/Label';
import CheckBox from "../../atoms/CheckBox/CheckBox";
import Icon from "../../atoms/Icon/Icon";
import Banner from '../../../images/Product_Images/Banner.png';
import { Link } from 'react-router-dom';
import Box from "../../atoms/Box/Box";

export default function ProductListing(props) {
    return (

        // Product Listing Component Page

        <section>
            <div className="aem-Grid aem-Grid--12">
                <div className="aem-Grid aem-Grid--12 aem-GridColumn--phone--4 boximg">
                    <div className="deskTopHide">
                        <div>
                            <img src={Banner} className="mobileimg" />
                        </div>
                        <div className="blackbox">
                            Women's Outerwear
                        </div>
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12 mobileHide ">
                        <div className="colorbox">
                            Women’s
                        </div>
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--12 mobileHide">
                        <img src={Banner} className="Bannerimg" />
                    </div>
                </div>
                <div className="aem-Grid aem-Grid--12 deskTopHide catagories">
                    <Label name="Clothing" className="catagory1">
                    </Label>/
                    <Label name="Women's" className="catagory2">
                    </Label>/
                    <Label name="Outerwear" className="catagory3">
                    </Label>
                </div>
                <div className="aem-Grid aem-Grid--4 deskTopHide">
                    <div className="aem-GridColumn aem-GridColumn--phone--2 slider">
                        <Icon name="slider"> </Icon>
                        <a href="" className="slidertext">
                            Filter Results
                        </a>
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--phone--2 updownarrow">
                        <Icon name="uparrow"> </Icon>
                        <Icon name="down-arrow"> </Icon>
                        <a href="" className="sorttext">Sort Product</a>
                    </div>
                </div>
                <div className="aem-Grid aem-Grid--12 catagory">
                    <div className="aem-GridColumn aem-GridColumn--default--3 mobileHide">
                        <span className="clothing">Clothing/</span>
                        <span className="women">Women’s/</span>
                        <span className="outwear">Outerwear</span>
                    </div>

                    {/* Results Are working. */}

                    <div className="aem-GridColumn aem-GridColumn--default--1 aem-GridColumn--phone--12">
                        <div className="results">Results  {props.data?.length ?? 0}</div>
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--8 mobileHide">
                        <div>
                            <select className="dropdownn" onChange={props.sortByCategory}>
                                <option value="0">Sort by Latest </option>
                                <option value="women's clothing">Women</option>
                                <option value="men's clothing">Men</option>
                                <option value="jewelery">Jwellery</option>
                                <option value="electronics">Electronics</option>
                            </select>
                        </div>
                    </div>

                </div>

                {/* Filter Reusable Component */}

                <div className="aem-GridColumn aem-GridColumn--default--3 productFilters mobileHide">
                    <div className="filtertitle">Filters</div>
                    <div className="filter">Size</div>
                    <div className="aem-Grid aem-Grid--3">
                        <div>
                            {
                                SizeFilter.map((item, index) => (
                                    <React.Fragment>
                                        <div>
                                            <CheckBox type="checkbox" />
                                            <span className={Filters[0].className}>{item.text}</span>
                                        </div>

                                    </React.Fragment>
                                )
                                )}
                            <div className="filter">Style</div>
                            {
                                StylesFilter.map((item, index) => (
                                    <React.Fragment>
                                        <div>
                                            <CheckBox type="checkbox" />
                                            <span className={Filters[0].className}>{item.text}</span>
                                        </div>
                                    </React.Fragment>
                                )
                                )}
                            <div className="filter">Color</div>
                            {
                                ColorFilter.map((item, index) => (
                                    <Box background={item.text} />
                                )
                                )}
                            <div className="filter">Brand</div>
                            {
                                BrandFilter.map((item, index) => (
                                    <React.Fragment>
                                        <div>
                                            <CheckBox type="checkbox" />
                                            <span className={Filters[0].className}>{item.text}</span>
                                        </div>
                                    </React.Fragment>
                                )
                                )}
                            <div className="filterborder"></div>
                        </div>
                    </div>
                </div>

                {/*Product get Fetched and When we Click on specific item it goes on product details page  */}

                <div className="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12">

                    <div className="aem-Grid aem-Grid--12">
                        {
                            props.data && props.data.map((item) => {
                                return <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--6" key={item.id}>
                                    <div className="productItem">
                                        <div className="productMainImage"> <img src={item.image} className=" productimage" /> </div>
                                        <Link to={"/product/" + item.id} className="product-anc" ><p className="producttitle">{item.title.substring(0, 16)}</p></Link>
                                        <div className="productprice">${item.price}</div>
                                        <div className="ProductIcon"><Icon name="hurt"> </Icon></div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}