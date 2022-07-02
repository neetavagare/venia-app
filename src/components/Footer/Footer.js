import React from "react";
import DesktopBanner from '../../images/Product_Images/DesktopBanner.png';


export default function Footer() {
  return (
    <footer className="footerrow">
      <div className='aem-Grid aem-Grid--12 footercontainer'>
        <div className='aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--phone--12'>
          <img src={DesktopBanner} className="footerbanner" />
        </div>
        <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--8'>
          <p className="footeradres">@ Company Name Address Ave, City Name, State ZIP</p>
        </div>
        <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12'>
          <a className="footerpolicy">Privacy Policy</a>
          <a className="footeruse">Terms of Use</a>
        </div>
      </div>

    </footer>
  )
}