import { API, NEW_PRODUCT } from "../components/Global";

export const getNewProduct = () => {
    const URL = API + NEW_PRODUCT;
    return fetch(URL)
            .then((res) => res.json());
}

export const getProductDetail = async (url) => {
    return fetch(url)
            .then((res) => res.json());
}