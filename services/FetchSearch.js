import {API, SEARCH_PRODUCT} from "../components/Global";

export const postSearch = async (params) => {
    const URL = API + SEARCH_PRODUCT;
    return fetch(URL, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
    }).then((res) => res.json());
}