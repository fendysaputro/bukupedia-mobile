import { API, ADDRESS } from '../components/Global';

export const getAddressList = async (token) => { 
    const URL = API + ADDRESS + '?token=' + token;
    return fetch(URL)
        .then((res) => res.json());
}

export const postCreateAddress = async (params, token) => {
    console.log(params);
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

export const updateAddress = async (params, token, id) => {
    const URL = API + ADDRESS + '/' + id + '?token=' + token;
    return fetch(URL, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify(params),
    }).then((res) => res.json());
}