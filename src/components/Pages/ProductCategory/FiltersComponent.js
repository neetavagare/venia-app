import { CheckBox } from '../../atoms';
import React from 'react';
import { CategoriesFilter } from "../../../config/Constant";


export default function FiltersComponent() {
    return (
        <div>
            {
                CategoriesFilter.map((item, index) => (
                    <React.Fragment key={"ch" + index}>
                        <div>
                            <CheckBox type="checkbox" text={item.text} />
                        </div>

                    </React.Fragment>
                )
                )}

            <div className="filterborder"></div>
        </div>
    )
}