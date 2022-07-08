import { APIBASE_URL } from '../../config/Constant';

export default class ProductService {

    static async getProduct(productId) {
        return fetch(`${APIBASE_URL}/products/${productId}`)
            .then((res) => res.json())
    }

    static async getCategory() {
        return fetch(`${APIBASE_URL}/products`)
            .then((res) => res.json())
    }

    static async getCarts() {
        return fetch(`${APIBASE_URL}/carts/1`)
            .then((res) => res.json())
    }
}