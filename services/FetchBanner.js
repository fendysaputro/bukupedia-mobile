import { API, BANNER, BANNER_SMALL, BANNER_FOOTER } from "../components/Global";

export const getBanner = () => {
    const URL = API + BANNER;
    return fetch(URL)
            .then((res) => res.json());
}

export const getBannerSmall = () => {
    const URL = API + BANNER_SMALL;
    return fetch(URL)
            .then((res) => res.json());
}