import * as actionTypes from "../constants/actionTypes";

export function getProducts (params){
   return {
      type:actionTypes.GET_PRODUCTS,
      params
   }
}

export function getCategoryProducts(payload){
   return{
     type:actionTypes.GET_CATEGORY_PRODUCTS,
     payload
   }
}

export function showLoader(){
   return{
     type:actionTypes.SHOW_LOADER,
   }
}

export function hideLoader(){
   return{
     type:actionTypes.HIDE_LOADER
   }
}

export function getProductsSuccess(payload){
    return{
      type:actionTypes.GET_PRODUCTS_SUCCESS,
      payload
    }
}

export function getCarts(payload){
   return{
     type:actionTypes.GET_CARTS_SUCCESS,
     payload
   }
}


export function getProductsError(error){
   return{
      type:actionTypes.GET_PRODUCTS_ERROR,
      error
   }
}


export function getProductsCountSuccess(payload){
   return{
     type:actionTypes.GET_PRODUCTS_COUNT_SUCCESS,
     payload
   }
}

export function getProductsCountError(payload){
  return{
     type:actionTypes.GET_PRODUCTS_COUNT_ERROR,
     payload
  }
}

export function addProductToCart(payload){
   return{
      type:actionTypes.ADD_PRODUCT_TO_CART,
      payload
   }
 }

 export function replaceCart(payload){
   return{
      type:actionTypes.REPLACE_CART,
      payload
   }
 }

 export function sortProduct(payload){
   return{
      type:actionTypes.SORT_PRODUCT,
      payload
   }
 }