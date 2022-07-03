import React from "react";
import { Filters, SizeFilter, BrandFilter, StylesFilter, ColorFilter } from "../../../config/Constant";
import Label from '../../atoms/Label/Label';
import CheckBox from "../../atoms/CheckBox/CheckBox";
import Icon from "../../atoms/Icon/Icon";
import Banner from '../../../images/Product_Images/Banner.png';
import { Link } from 'react-router-dom';
import Box from "../../atoms/Box/Box";
import { Image } from "../../atoms";
import { Anchor } from '../../atoms';


export default function ProductListing(props) {
    return (
        // Product Listing Component Page
        <section>
            <div className="aem-Grid aem-Grid--12">
                <div className="aem-Grid aem-Grid--12 aem-GridColumn--phone--4 boximg">
                    <div className="deskTopHide">
                        <div>
                            <Image alt={""} url={Banner} classValue="mobileimg"></Image>
                        </div>
                        <div className="blackbox">
                            <div>Women's Outerwear </div>
                            <div className="categoryBorder">
                            </div>
                        </div>


                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12 mobileHide black-image-div">
                        <div className="colorbox">
                            <div>Women’s</div>
                            <div className="categoryBorder"></div>
                        </div>
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--12 mobileHide">
                        <Image alt={""} url={Banner} classValue="Bannerimg"></Image>
                    </div>
                </div>
                <div className="aem-Grid aem-Grid--12 deskTopHide catagories">
                    <div style={{ paddingLeft: 10 }}>
                        <Anchor classValue="cursor-pointer"><Label name="Clothing" className="catagory1">
                        </Label>/</Anchor>
                        <Anchor classValue="cursor-pointer"><Label name="Women's" className="catagory2">
                        </Label>/</Anchor>
                        <Anchor classValue="cursor-pointer"><Label name="Outerwear" className="catagory3">
                        </Label></Anchor>
                    </div>
                </div>
                <div className="aem-Grid aem-Grid--4 deskTopHide">
                    <div className="aem-GridColumn aem-GridColumn--phone--2 slider">
                        <Anchor><Icon name="slider"> </Icon></Anchor>
                        <Anchor href="" classValue="slidertext"
                            name='Filter Results'
                        ></Anchor>
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--phone--2 updownarrow">
                        <Anchor><Icon name="uparrow"> </Icon></Anchor>
                        <Anchor><Icon name="down-arrow"> </Icon></Anchor>
                        <Anchor href="" className="sorttext" name='Sort Product'></Anchor>
                    </div>
                </div>
                <div className="aem-Grid aem-Grid--12 catagory">
                    <div className="aem-GridColumn aem-GridColumn--default--3 mobileHide">
                        <Anchor classValue="cursor-pointer"><span className="clothing">Clothing/</span></Anchor>
                        <Anchor classValue="cursor-pointer"><span className="women">Women’s/</span></Anchor>
                        <Anchor classValue="cursor-pointer"><span className="outwear">Outerwear</span></Anchor>
                    </div>

                    {/* Results Are working. */}

                    <div className="aem-GridColumn aem-GridColumn--default--1 aem-GridColumn--phone--12">
                        <div className="results">  {props.data?.length ?? 0} Results</div>
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
                                    <React.Fragment key={"ch" + index}>
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
                                    <React.Fragment key={"fl" + index}>
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
                                    <Box key={"flt" + index} background={item.text} />
                                )
                                )}
                            <div className="filter">Brand</div>
                            {
                                BrandFilter.map((item, index) => (
                                    <React.Fragment key={"ftr" + index}>
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
                                        <div className="productMainImage"> <Image alt={""} url={item.image} classValue="productimage"></Image></div>
                                        <Link to={"/product/" + item.id} className="product-anc" ><p className="producttitle">{item.title.substring(0, 16)}</p></Link>
                                        <div className="productprice">${item.price}</div>
                                        <div className="ProductIcon"><Anchor><Icon name="hurt"> </Icon></Anchor></div>
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