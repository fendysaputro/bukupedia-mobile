import {API, SHIPMENT_METHOD, SHIPPING_COST} from "../components/Global";

export const getShipmentMethod = async () => {
    const URL = API + SHIPMENT_METHOD;
    const res = await fetch(URL);
    return await res.json();
}

export const postShipmentCost = async (params) =>  {
    const URL = API + SHIPPING_COST;
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
