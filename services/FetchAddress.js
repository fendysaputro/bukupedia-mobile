import { API, ADDRESS } from '../components/Global';

export const getAddress = (token) => {
    const URL = API + ADDRESS + '?token=' + token;
    return fetch(URL)
            .then((res) => res.json());
}