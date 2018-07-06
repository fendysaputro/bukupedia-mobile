import { API, REGISTER } from '../components/Global';

export const postRegister = (params) => {
    const URL = API + REGISTER;
    return fetch(URL, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
    }).then((res) => res.json()); 
}