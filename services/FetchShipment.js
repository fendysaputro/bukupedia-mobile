import {API, SHIPMENT_METHOD} from "../components/Global";

export const getShipmentMethod = () => {
    const URL = API + SHIPMENT_METHOD;
    return fetch(URL)
            .then((res) => res.json());
}
