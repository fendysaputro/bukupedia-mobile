import {API, PAYMENT_METHOD} from "../components/Global";

export const getPaymentMethod = () => {
    const URL = API + PAYMENT_METHOD;
    return fetch(URL)
            .then((res) => res.json());
}
