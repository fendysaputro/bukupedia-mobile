import { API, LIST_ORDER, ORDER_DETAIL } from '../components/Global';

export const getListOrder = async (token) => {
    const URL = API + LIST_ORDER + '?token=' + token;
    return fetch(URL)
            .then((res) => res.json());
}

export const getOrderDetail = async (id, token) => {
    const URL = API + LIST_ORDER + '?id=' + id + '?token=' + token;
    return fetch(URL)
            .then((res) => res.json());
}
