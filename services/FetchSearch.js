import {API, SEARCH_PRODUCT} from "../components/Global";

export const getSearch = async () => {
    const URL = API + SEARCH_PRODUCT;
    return fetch(URL)
            .then((res) => res.json());
}