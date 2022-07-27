import React from 'react';
import { Anchor, Label } from '../../atoms';

export default function CategoryLabel() {
    return (
        <div>
            <Anchor classValue="cursor-pointer"><Label name="Clothing" className="catagory1">
            </Label>/</Anchor>
            <Anchor classValue="cursor-pointer"><Label name="Women's" className="catagory2">
            </Label>/</Anchor>
            <Anchor classValue="cursor-pointer"><Label name="Outerwear" className="catagory3">
            </Label></Anchor>
        </div>
    )
}