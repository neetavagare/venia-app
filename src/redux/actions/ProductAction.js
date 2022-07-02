import * as actionTypes from "../constants/actionTypes";


export const setProducts = (productData) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        payload: productData,
    }
}

export const selectedProduct = (product) => {
    return {
        type: actionTypes.SELECTED_PRODUCT,
        payload: product,
    }
}

