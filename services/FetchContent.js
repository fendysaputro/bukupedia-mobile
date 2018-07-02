import { API, CONTENT_FAQ, CONTENT_SHOP, CONTENT_PAY } from '../components/Global';

export const getContentFaq = async () => {
    const URL = API + CONTENT_FAQ;
    return fetch(URL)
            .then((res) => res.json());
}

export const getContentShop = async () => {
    const URL = API + CONTENT_SHOP;
    return fetch(URL)
            .then((res) => res.json());
}

export const getContentPay = async () => {
    const URL = API + CONTENT_PAY;
    return fetch(URL)
            .then((res) => res.json());
}