import React from "react";
import DesktopBanner from '../../images/Product_Images/DesktopBanner.png';
import { Image } from "../atoms";
import { Anchor } from '../atoms';
import {Paragraph} from '../atoms';


export default function Footer() {
  return (
    <footer className="footerrow">
      <div className='aem-Grid aem-Grid--12 footercontainer'>
        <div className='aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--phone--12'>
          <Anchor><Image alt={""} url={DesktopBanner} classValue="footerbanner" ></Image></Anchor>
        </div>
        <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--8'>
         <Anchor> <Paragraph classValue="footeradres" name='@ Company Name Address Ave, City Name, State ZIP'></Paragraph></Anchor>
        </div>
        <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12'>
        <Anchor classValue={'footerpolicy'} name = "Privacy Policy" ></Anchor>
        <Anchor classValue={'footeruse'} name = "Terms of Use" ></Anchor>
        </div>
      </div>

    </footer>
  )
}