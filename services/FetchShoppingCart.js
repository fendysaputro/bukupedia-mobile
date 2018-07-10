import { API, CART } from "../components/Global";

export const getListShoppingCart = () => {
    const URL = API + CART;
    return fetch(URL)
            .then((res) => res.json());
}
