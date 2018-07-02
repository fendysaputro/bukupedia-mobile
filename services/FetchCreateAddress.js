import { API, ADDRESS } from '../components/Global';

export const postCreateAddress = (params) => {
    const URL = API + ADDRESS;
    return fetch(URL, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
    }).then((res) => res.json());
}