import React from 'react';
import { Anchor } from '../../atoms';

export default function CategoryLabelMobile() {
    return (
        <React.Fragment>
            <Anchor classValue="cursor-pointer"><span className="clothing">Clothing/</span></Anchor>
            <Anchor classValue="cursor-pointer"><span className="women">Women’s/</span></Anchor>
            <Anchor classValue="cursor-pointer"><span className="outwear">Outerwear</span></Anchor>
        </React.Fragment>
    )
}