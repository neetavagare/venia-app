import React from "react";
import DesktopBanner from '../../images/Product_Images/DesktopBanner.png';
import { Image } from "../atoms";
import { Anchor } from '../atoms';

export default function Footer() {
  return (
    <footer className="footerrow">

      <div className="aem-Grid aem-Grid--12 footer-bottom">
        <div className="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--tablet--12 aem-GridColumn--phone--12">
          <Anchor>
            <figure>
              <Image alt={""} url={DesktopBanner} classValue="footerbanner" ></Image></figure></Anchor>

        </div>
        <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 copyright" >
          <span className="footerColor">© Company Name Address Ave, City Name, State ZIP</span>
        </div>
        <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 left-nav align_center">
          <ul>
            <li>
              <a href=" ">Terms of Use</a>
            </li>
            <li>
              <a href=" ">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </footer >
  )
}

