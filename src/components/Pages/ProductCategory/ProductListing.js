import React from "react";
import Icon from "../../atoms/Icon/Icon";
import Banner from '../../../images/Product_Images/Banner.png';
import { DropDown, Image } from "../../atoms";
import { Anchor } from '../../atoms';
import ProductItem from "./ProductItem";
import CategoryLabel from "./CategoryLabel";
import CategoryLabelMobile from "./CategoryLabelMobile";
import FiltersComponent from './FiltersComponent';
import { DropDownOptions } from "../../../config/Constant";


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
                    <CategoryLabel></CategoryLabel>
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
                        <CategoryLabelMobile></CategoryLabelMobile>
                    </div>

                    {/* Results Are working. */}

                    <div className="aem-GridColumn aem-GridColumn--default--1 aem-GridColumn--phone--12">
                        <div className="results">  {props.data?.length ?? 0} Results</div>
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--8 mobileHide">
                        <div>
                            <DropDown classValue="dropdownn" options={DropDownOptions} onChange={props.sortByCategory}></DropDown>
                        </div>
                    </div>

                </div>

                {/* Filter Reusable Component */}

                <div className="aem-GridColumn aem-GridColumn--default--3 productFilters mobileHide">
                    <div className="filtertitle">Filters</div>
                    <div className="filter">Size</div>
                    <div className="aem-Grid aem-Grid--3">
                        <FiltersComponent></FiltersComponent>
                    </div>
                </div>

                {/*Product get Fetched and When we Click on specific item it goes on product details page  */}

                <div className="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12">

                    <div className="aem-Grid aem-Grid--12">
                        {
                            props.data && props.data.map((item,index) => {
                                return <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--6" key={item.id}>
                                    <ProductItem item={item} index={index}></ProductItem>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}