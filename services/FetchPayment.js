import {API, PAYMENT_METHOD, ORDER_PAYMENT} from "../components/Global";

export const getPaymentMethod = async () => {
    const URL = API + PAYMENT_METHOD;
    const res = await fetch(URL);
    return await res.json();
}

export const PostOrderPayment =  async (params, token) => {
    const URL = API + ORDER_PAYMENT + '?token=' + token;
    const res = await fetch(URL, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
    });
    return await res.json();
}
