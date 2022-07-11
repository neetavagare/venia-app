import React from 'react';
import Icon from '../../atoms/Icon/Icon';
import { Anchor } from '../../atoms';

// Estimating Row tabel.

export default function Estimaterow() {
    return (
        <div className='aem-Grid aem-Grid--8'>
            <div className='aem-Grid aem-Grid--8 estimate'>
                <div className='aem-GridColumn aem-GridColumn--default--8'>

                    <div className='section1'>
                        <div className='shippingtitle1'>
                            Estimate your Shipping
                        </div>
                        <div className='shippingsummery'>
                            <span className='mobileHideInline marginRight20'>Shipping to 91001</span>  <Icon name="downarrow"> </Icon>
                        </div>
                        <div className='deskTopHide'>Shipping to 91001</div>
                    </div>
                    <div className='section2'>
                        <div className='shippingtitle2'>
                            Enter a Coupen Code
                        </div>
                        <div className='shippingsummery'>
                            <span className='mobileHideInline marginRight20'>$5 discount applied</span>
                            <Anchor><Icon name="downarrow"> </Icon></Anchor>
                        </div>
                        <div className='deskTopHide'>$5 discount applied</div>
                    </div>
                    <div className='section3'>
                        <div className='shippingtitle3'>
                            Apply Gift Card
                        </div>
                        <div className='shippingsummery'>
                            <Anchor><Icon name="downarrow"> </Icon></Anchor>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}