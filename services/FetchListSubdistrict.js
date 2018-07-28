import { API, SUBDISTRICT, REGENCY } from "../components/Global";

export const getSubdistrict = async () => {
    const URL = API + SUBDISTRICT;
    return fetch(URL)
            .then((res) => res.json());
}

export const getSubdistrictByName = async (name) => {
    const URL = API + SUBDISTRICT + '?name=' + name;
    return fetch (url)
            .then((res) => res.json());     
}

export const getSubdistrictByRegencyId = async (regencyId) => {
    const URL = API + SUBDISTRICT + '?regency-id' + regencyId;
    return fetch (url)
            .then((res) => res.json());     
}