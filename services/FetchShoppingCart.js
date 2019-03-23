import { API, CART } from '../components/Global';

export const addShoppingCart = async (params, token) => {
    const URL = API + CART + '?token=' + token;
    const res = await fetch(URL, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
    });
    return await res.json();
}

export const getListItemCart = (token) => {
    const URL = API + CART + '?token=' + token;
    fetch(URL)
            .then((res) => {
                return JSON.parse(res._bodyText);
            })
            .catch((error)=> console.log("error: "+error));
}
