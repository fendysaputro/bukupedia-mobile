import { API, LIST_ORDER, ORDER_DETAIL } from '../components/Global';

export const getListOrder = async (token) => {
    const URL = API + LIST_ORDER + '?token=' + token;
    return fetch(URL)
            .then((res) => res.json());
}

export const getOrderDetail = async (token, id) => {
    const URL = API + ORDER_DETAIL + '?id=' + id + '&token=' + token;
    return fetch(URL)
            .then((res) => res.json());
}
