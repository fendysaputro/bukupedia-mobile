import { API, REGENCY, PROVINCE } from "../components/Global";

export const getRegency = async () => {
    const URL = API + REGENCY;
    return fetch(URL)
            .then((res) => res.json());
}

export const getRegencyByName = async () => {
    return fetch (url)
            .then((res) => res.json());     
}

export const getRegencyByProvinceId = async () => {
    return fetch (url)
            .then((res) => res.json());
}