import { API, WISHLIST } from "../components/Global";

export const getWishlist = (token) => {
    const URL = API + WISHLIST + '?token=' + token;
    return fetch(URL)
            .then((res) => res.json()); 
}