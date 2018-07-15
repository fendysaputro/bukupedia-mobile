import { API, CART } from '../components/Global';

export const addShoppingCart = (params) => {
    const URL = API + CART;
    return fetch(URL, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
    }).then((res) => res.json());
}