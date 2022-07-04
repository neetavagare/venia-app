
import { CheckBox,Box } from '../../atoms';
import React from 'react';
import { Filters, SizeFilter, BrandFilter, StylesFilter, ColorFilter } from "../../../config/Constant";
export default function FiltersComponent() {
    return (
        <div>
            {
                SizeFilter.map((item, index) => (
                    <React.Fragment key={"ch" + index}>
                        <div>
                            <CheckBox type="checkbox" />
                            <span className={Filters[0].className}>{item.text}</span>
                        </div>

                    </React.Fragment>
                )
                )}
            <div className="filter">Style</div>
            {
                StylesFilter.map((item, index) => (
                    <React.Fragment key={"fl" + index}>
                        <div>
                            <CheckBox type="checkbox" />
                            <span className={Filters[0].className}>{item.text}</span>
                        </div>
                    </React.Fragment>
                )
                )}
            <div className="filter">Color</div>
            {
                ColorFilter.map((item, index) => (
                    <Box key={"flt" + index} background={item.text} />
                )
                )}
            <div className="filter">Brand</div>
            {
                BrandFilter.map((item, index) => (
                    <React.Fragment key={"ftr" + index}>
                        <div>
                            <CheckBox type="checkbox" />
                            <span className={Filters[0].className}>{item.text}</span>
                        </div>
                    </React.Fragment>
                )
                )}
            <div className="filterborder"></div>
        </div>
    )
}