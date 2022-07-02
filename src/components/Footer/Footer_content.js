import React from 'react';
import Anchor from '../atoms/Anchor/Anchor';
import Icon from '../atoms/Icon/Icon';
import {Paragraph} from '../atoms/';

export default function Footer_content() {
    return (
        <footer className='footerborder'>
            <div className='aem-Grid aem-Grid--12'>
                <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12'>
                    <Anchor><h6 className='about'>About Us</h6></Anchor>
                    <Anchor><Paragraph classValue ='ftext3' name = 'Our Story'></Paragraph></Anchor>
                   <Anchor> <Paragraph classValue='ftext4' name = 'Careers'></Paragraph></Anchor>
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12'>
                   <Anchor> <h6 className='account'>Account</h6></Anchor>
                   <Anchor> <Paragraph classValue ='ftext11' name = 'Sign in'></Paragraph> </Anchor>
                   <Anchor> <Paragraph classValue='ftext1' name='Register'></Paragraph></Anchor>
                   <Anchor> <Paragraph classValue='ftext2' name='Order Status'></Paragraph></Anchor>
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12'>
                   <Anchor><h6 className='help'>Help</h6></Anchor> 
                    <Anchor><Paragraph classValue='ftext5' name='Contact Us'></Paragraph></Anchor>
                    <Anchor><Paragraph classValue='ftext6' name='Order Status'></Paragraph></Anchor>
                    <Anchor><Paragraph classValue='ftext7' name='Returns'></Paragraph></Anchor>
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12'>
                   <Anchor> <h6 className='follow'>Follow Us!</h6></Anchor>
                   <Anchor> <Paragraph classValue='ftext8' name='Lorem ipsum dolor sit'></Paragraph></Anchor>
                   <Anchor><Paragraph classValue='ftext9' name='consectetur adipiscing elit'></Paragraph></Anchor>
                   <Anchor><Paragraph classValue='ftext10' name='sed do eiusmod'></Paragraph></Anchor>
                    <span>
                    <Anchor><Icon name="insta"> </Icon></Anchor>
                    <Anchor><Icon name="facebook"> </Icon></Anchor>
                    <Anchor><Icon name="twitter"> </Icon></Anchor>
                    </span>
                </div>
            </div>
        </footer>
    )
}