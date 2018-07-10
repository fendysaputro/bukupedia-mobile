import { API, PROVINCE } from "../components/Global";

export const getProvince = async () => {
    const URL = API + PROVINCE;
    return fetch(URL)
            .then((res) => res.json());
}

export const getProvinceById = async () => {
    return fetch (url)
            .then((res) => res.json());     
}