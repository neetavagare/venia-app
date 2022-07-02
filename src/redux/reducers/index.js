import { productReducer, productsCountReducer } from './ProductReducer.js';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    feature : productReducer,
    count: productsCountReducer
});

export default rootReducer;

