import { API, SUBDISTRICT, REGENCY } from "../components/Global";

export const getSubdistrict = async () => {
    const URL = API + SUBDISTRICT;
    return fetch(URL)
            .then((res) => res.json());
}

export const getSubdistrictByName = async () => {
    return fetch (url)
            .then((res) => res.json());     
}

export const getSubdistrictByRegencyId = async () => {
    return fetch (url)
            .then((res) => res.json());     
}