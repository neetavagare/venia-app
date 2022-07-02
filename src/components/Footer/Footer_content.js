import React from 'react';
import Icon from '../atoms/Icon/Icon';

export default function Footer_content() {
    return (
        <footer className='footerborder'>
            <div className='aem-Grid aem-Grid--12'>
                <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12'>
                    <h6 className='about'>About Us</h6>
                    <p className='ftext3'>Our Story</p>
                    <p className='ftext4'>Careers</p>
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12'>
                    <h6 className='account'>Account</h6>
                    <p className='ftext11' >Sign in</p>
                    <p className='ftext1'>Register</p>
                    <p className='ftext2'>Order Status</p>
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12'>
                    <h6 className='help'>Help</h6>
                    <p className='ftext5'>Contact Us</p>
                    <p className='ftext6'>Order Status</p>
                    <p className='ftext7'>Returns</p>
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12'>
                    <h6 className='follow'>Follow Us!</h6>
                    <p className='ftext8'> Lorem ipsum dolor sit</p>
                    <p className='ftext9'>consectetur adipiscing elit</p>
                    <p className='ftext10'> sed do eiusmod</p>
                    <span>
                        <Icon name="insta"> </Icon>
                        <Icon name="facebook"> </Icon>
                        <Icon name="twitter"> </Icon>
                    </span>
                </div>
            </div>
        </footer>
    )
}