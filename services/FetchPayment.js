import {API, PAYMENT_METHOD, ORDER_PAYMENT} from "../components/Global";

export const getPaymentMethod = () => {
    const URL = API + PAYMENT_METHOD;
    return fetch(URL)
            .then((res) => res.json());
}

export const PostOrderPayment = async (params) => {
    const URL = API + ORDER_PAYMENT;
    return fetch(URL, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
    }).then((res) => res.json());
}