import React from "react";
import signature from '../../../images/Product_Images/signature.png';
import women from '../../../images/Product_Images/women.png';
import mens from '../../../images/Product_Images/mens.png';
import electronics from '../../../images/Product_Images/electronics.png';
import jewellery from '../../../images/Product_Images/jewellery.png';
import Boykurti from '../../../images/Product_Images/Boykurti.png';
import advanture from '../../../images/Product_Images/advanture.PNG';
import { Image } from "../../atoms";
import mapLocation from '../../../images/svgIcons/map-pin.svg';

export default function HomePage() {
    return (
        <section>
            <div className='aem-Grid aem-Grid--12 aem-GridColumn--tablet--12 home-slider'>
                <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12  home-banner'>
                    <h1 className="signature">Shop the new Signature Collection</h1>
                    <div className="signaturepara">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim consectetur.
                    </div>
                    <div>
                        <button className="shopnowbtn">shop now</button>
                    </div>
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 '>
                    <Image alt={""} url={signature} classValue="signature-img"></Image>
                </div>
            </div>
            <section className="home-product-container">
                <div className='aem-Grid aem-Grid--12 home-container'>
                    <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12'>
                        <Image alt={""} url={women} classValue="womenimg"></Image>
                        <div className="title-block1">
                            <h4 className="shop-women">Shop Women</h4>
                            <div className="loream-text1">Lorem ipsum dolor sit amet</div>
                        </div>
                    </div>
                    <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12'>
                        <Image alt={""} url={mens} classValue="mensimg"></Image>
                        <div className="title-block2">
                            <h4 className="shop-men">Shop Men</h4>
                            <div className="loream-text2">Lorem ipsum dolor sit amet</div>
                        </div>
                    </div>
                    <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12'>
                        <Image alt={""} url={jewellery} classValue="jewelleryimg"></Image>
                        <div className="title-block3">
                            <h4 className="shop-jewellery">Shop Jewellery</h4>
                            <div className="loream-text3">Lorem ipsum dolor sit amet</div>
                        </div>
                    </div>
                    <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12'>
                        <Image alt={""} url={electronics} classValue="electronicsimg"></Image>
                        <div className="title-block4">
                            <h4 className="shop-electronics">Shop Electronics</h4>
                            <div className="loream-text4">Lorem ipsum dolor sit amet</div>
                        </div>
                    </div>
                </div>
                <div className='aem-Grid aem-Grid--12 take-of-section'>
                    <div className='aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--12 takeoff-text'>
                        <h4 className="sign-leggings">
                            Take off in the new Signature Legging
                        </h4>
                        <h6 className="sub-para">Lorem Ipsum Dolor Tempor</h6>
                        <div className="subtext">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore dolore magna lorem ipsum
                        </div>
                        <div>
                            <button className="shopcollection">shop collection</button>
                            <button className="shopnowbtn">shop now</button>
                        </div>
                    </div>
                    <div className='aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12'>
                        <Image alt={""} url={Boykurti} classValue="boykurti"></Image>
                    </div>
                </div>

                <section className="aem-Grid aem-Grid--12 adventure-container">
                    <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 adventure-img">
                        <img src={advanture} alt="herobanner" />
                        <div className="location-icon-container">
                            <img src={mapLocation} alt="location" />
                            <div className="loc-border"></div>
                        </div>
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 adventure-content">
                        <div className="adventure-sub-content">
                            <h2>Conquer your <span className="hide">next adventure</span></h2>
                            <p>Lorem Ipsum Dolor Tempor</p>
                            <button className="shop-device-btn">
                                shop devices
                            </button>
                        </div>
                    </div>

                </section>
            </section>
        </section>
    )
}