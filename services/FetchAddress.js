import { API, ADDRESS } from '../components/Global';

export const getAddress = (token) => {
    const URL = API + ADDRESS + '?token=' + token;
    return fetch(URL)
            .then((res) => res.json());
}

export const postCreateAddress = (params, token) => {
    const URL = API + ADDRESS + '?token=' + token;
    return fetch(URL, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
    }).then((res) => res.json());
}