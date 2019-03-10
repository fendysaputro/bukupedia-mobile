import { API, LIST_ORDER } from '../components/Global';

export const getListOrder = async (token) => {
    const URL = API + LIST_ORDER + '?token=' + token;
    return fetch(URL)
            .then((res) => res.json());
}

export const getOrderDetail = async (token, id) => {
    const URL = API + LIST_ORDER + '?token=' + token + '?id=' + id;
    return fetch(URL)
            .then((res) => res.json());
}