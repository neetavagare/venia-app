import React from "react";
import HeaderIcons from '../../config/Constant';
import Icon from "../atoms/Icon/Icon";
import DesktopBanner from '../../images/Product_Images/DesktopBanner.png';
import { Link } from 'react-router-dom';

// Mobile Banner Row.

export default function MobileHeader() {
    return (
        <header className='aem-Grid aem-Grid--4  aem-GridColumn--tablet--12 deskTopHide mobileheader'>
            <div className="aem-GridColumn aem-GridColumn--phone--1 menu">
                <Icon name="menu" className="menu"> </Icon>
            </div>
            <div className="aem-GridColumn aem-GridColumn--phone--2">
                <Link to={"/"} ><img src={DesktopBanner} /></Link>
            </div>
            <div className="aem-GridColumn aem-GridColumn--phone--1 mobileIcon">
                <Icon name="Search" className="searchIcon"></Icon>
                <Icon name="ShopBag"> </Icon>
            </div>
        </header>
    )
}