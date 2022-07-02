import React, { Component } from "react";
import Slider from "react-slick";
import { RecentViewdata } from "../../../config/Constant";

 // Recent view slider Carousel Component

export default class RecentView extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 2
        };
        return (
            <div className="aem-Grid aem-Grid--12 Recentlyview mobileHide">
                <h2 className="recenttitle">Recently Viewed </h2>
                <Slider {...settings}>
                    {
                        RecentViewdata.map((item) => {
                            return <div>
                                <img alt={item.title} src={item.imageUrl} className="viewimges" />
                                <h5 className="viewtitle">{item.title}</h5>
                                <p className="viewprice">${item.price}</p>
                            </div>
                        })
                    }
                </Slider>
            </div>
        );
    }
}