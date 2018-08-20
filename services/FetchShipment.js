import {API, SHIPMENT_METHOD, SHIPPING_COST} from "../components/Global";

export const getShipmentMethod = () => {
    const URL = API + SHIPMENT_METHOD;
    return fetch(URL)
            .then((res) => res.json());
}

export const postShipmentCost = (params) =>  {
    const URL = API + SHIPPING_COST;
    return fetch(URL, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
    }).then((res) => res.json());
}
