import { API, PROFILE } from '../components/Global';

export const getProfile = async () => {
    const URL = API + PROFILE;
    return fetch(URL)
            .then((res) => res.json());
}

export const postEditProfile = async (params, id, token) => {
    const URL = API + PROFILE + '/' + id + '?token=' + token;
    return fetch(URL, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
    }).then((res) => res.json());
}