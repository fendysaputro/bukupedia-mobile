import { API, REGENCY, PROVINCE } from "../components/Global";

export const getRegency = async () => {
    const URL = API + REGENCY;
    return fetch(URL)
            .then((res) => res.json());
}

export const getRegencyByName = async (name) => {
    const URL = API + REGENCY + '?name=' + name;
    return fetch (URL)
            .then((res) => res.json());     
}

export const getRegencyByProvinceId = async (provinceId) => {
    const URL = API + REGENCY + '?province-id=' + provinceId;
    return fetch (URL)
            .then((res) => res.json());
}