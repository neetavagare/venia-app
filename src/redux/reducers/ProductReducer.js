import * as actionTypes from "../constants/actionTypes";
import initialState from "./initialState";

export function productReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS:
      return {
        ...state,
        productData: state.productData
      }
      break;
    case actionTypes.GET_CARTS_SUCCESS:
      return {
        ...state,
        carts: state.carts
      }
      break;
    case actionTypes.SHOW_LOADER:
      return {
        ...state,
        isLoading: true
      }
      break;
    case actionTypes.HIDE_LOADER:
      return {
        ...state,
        isLoading: false
      }
      break;
    case actionTypes.GET_CATEGORY_PRODUCTS:
      return {
        ...state,
        products: action.payload
      }
    case actionTypes.ADD_PRODUCT_TO_CART:
      return {
        ...state,
        carts: [...state.carts, action.payload]
      }
    case actionTypes.REPLACE_CART:
      return {
        ...state,
        carts: [...action.payload]
      }
    case actionTypes.SORT_PRODUCT:
      return {
        ...state,
        sortedProducts: [...action.payload]
      }
    case actionTypes.GET_PRODUCTS_SUCCESS:
      try {
        return {
          ...state,
          productData: action.payload,
        }
      } catch (error) {
        return {
          ...state,
          error: ''
        }
      }
      break;

    case actionTypes.GET_PRODUCTS_ERROR:
      return {
        productData: [],
        error: action.error
      }
      break;

    default:
      return {
        ...state
      }
      break;
  }
}

export function productsCountReducer(state = initialState.count, action) {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_COUNT:
      return { count: state.count }
      break;
    case actionTypes.GET_PRODUCTS_COUNT_SUCCESS:
      try {
        return {
          productData: state.productData,
          count: action.payload,
          error: ''
        }
      } catch (error) {
        return {
          count: 0,
          error: ''
        }
      }
      break;

    case actionTypes.GET_PRODUCTS_COUNT_ERROR:
      return {
        count: state.count,
        error: action.payload
      }
      break;

    default:
      return {
        count: state.count,
        error: state.error
      }
      break;
  }
}