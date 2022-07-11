import React from 'react';
import Icon from '../atoms/Icon/Icon';
import { Paragraph,AnchorV2 } from '../atoms';


export default function FooterContent() {
    return (
        <footer className='footerborder'>
            <div className='aem-Grid aem-Grid--12 footerbanner'>
                <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12'>
                    <AnchorV2><h6 className='about'>About Us</h6></AnchorV2>
                    <AnchorV2><Paragraph classValue='ftext3' name='Our Story'></Paragraph></AnchorV2>
                    <AnchorV2> <Paragraph classValue='ftext4' name='Careers'></Paragraph></AnchorV2>
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12'>
                    <AnchorV2> <h6 className='account'>Account</h6></AnchorV2>
                    <AnchorV2> <Paragraph classValue='ftext11' name='Sign in'></Paragraph> </AnchorV2>
                    <AnchorV2> <Paragraph classValue='ftext1' name='Register'></Paragraph></AnchorV2>
                    <AnchorV2> <Paragraph classValue='ftext2' name='Order Status'></Paragraph></AnchorV2>
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12'>
                    <AnchorV2><h6 className='help'>Help</h6></AnchorV2>
                    <AnchorV2><Paragraph classValue='ftext5' name='Contact Us'></Paragraph></AnchorV2>
                    <AnchorV2><Paragraph classValue='ftext6' name='Order Status'></Paragraph></AnchorV2>
                    <AnchorV2><Paragraph classValue='ftext7' name='Returns'></Paragraph></AnchorV2>
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12'>
                    <AnchorV2> <h6 className='follow'>Follow Us!</h6></AnchorV2>
                    <AnchorV2> <Paragraph classValue='ftext8' name='Lorem ipsum dolor sit'></Paragraph></AnchorV2>
                    <AnchorV2><Paragraph classValue='ftext9' name='consectetur adipiscing elit'></Paragraph></AnchorV2>
                    <AnchorV2><Paragraph classValue='ftext10' name='sed do eiusmod'></Paragraph></AnchorV2>
                    <span>
                        <AnchorV2><Icon name="insta"> </Icon></AnchorV2>
                        <AnchorV2><Icon name="facebook"> </Icon></AnchorV2>
                        <AnchorV2><Icon name="twitter"> </Icon></AnchorV2>
                    </span>
                </div>
            </div>
        </footer>
    )
}