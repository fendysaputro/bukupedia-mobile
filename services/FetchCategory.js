import { API, CATEGORY } from "../components/Global";

export const getCategory = async () => {
    const URL = API + CATEGORY;
    return fetch(URL)
            .then((res) => res.json());
}

export const getSubCategory = async (url) => {
    return fetch(url)
            .then((res) => res.json());
}

export const getProductByCategory = async (url) => {
    return fetch(url)
            .then((res) => res.json());
}

export const getProductLink = async (url) => {
    return fetch(url)
            .then((res) => res.json());
}