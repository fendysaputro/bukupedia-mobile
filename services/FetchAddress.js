import { API, ADDRESS } from '../components/Global';

export const getAddress = async () => {
    const URL = API + ADDRESS;
    return fetch(URL)
            .then((res) => res.json());
}