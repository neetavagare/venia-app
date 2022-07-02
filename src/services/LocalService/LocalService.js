import { CART_LOCAL_STORAGE_VALUE } from "../../config/Constant";

export default class LocalService {

    static removeProductCart(product) {
        let cartData = localStorage.getItem(CART_LOCAL_STORAGE_VALUE);
        if (cartData) {
            let data = JSON.parse(cartData);
            var productsData = [];
            if (data.length) {
                data.forEach(element => {
                    if (element.id !== product.id) {
                        productsData.push(element);
                    }
                });
            }
            localStorage.setItem(CART_LOCAL_STORAGE_VALUE, JSON.stringify(productsData));
        }
    }

    static addToCart(Product) {
        let cartData = localStorage.getItem(CART_LOCAL_STORAGE_VALUE);
        if (cartData) {
            let data = JSON.parse(cartData);
            if (data.length > 0) {
                data.push(Product)
            }else{
                data[0] = Product;
            }
            localStorage.setItem(CART_LOCAL_STORAGE_VALUE, JSON.stringify(data));
        }else{
            let data = [];
            data.push(Product)
            localStorage.setItem(CART_LOCAL_STORAGE_VALUE, JSON.stringify(data));
        }
    }

    static getCart() {
        let cartData = localStorage.getItem(CART_LOCAL_STORAGE_VALUE);
        if (cartData) {
            let data = JSON.parse(cartData);
            return data;
        }
        return [];
    }

}