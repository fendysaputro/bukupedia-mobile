import { API, LIST_ORDER } from '../components/Global';

export const getListOrder = async () => {
    const URL = API + LIST_ORDER;
    return fetch(URL)
            .then((res) => res.json());
}

export const getOrderDetail = async () => {
    return fetch(url)
            .then((res) => res.json());
}