import { API, BANNER, BANNER_SMALL, BANNER_FOOTER } from "../components/Global";

export const getBanner = async () => {
    const URL = API + BANNER;
    return fetch(URL)
            .then((res) => res.json());
}

export const getBannerSmall = async () => {
    const URL = API + BANNER_SMALL;
    return fetch(URL)
            .then((res) => res.json());
}