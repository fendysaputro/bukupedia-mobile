import { API, LIST_ORDER } from '../components/Global';

export const getListOrder = async (token) => {
    const URL = API + LIST_ORDER + '?token=' + token;
    return fetch(URL)
            .then((res) => res.json());
}

export const getOrderDetail = async () => {
    const URL = API + LIST_ORDER;
    return fetch(URL)
            .then((res) => res.json());
}