import { API, PROFILE } from '../components/Global';

export const postEditProfile = (params) => {
    const URL = API + PROFILE;
    return fetch(URL, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
    }).then((res) => res.json());
}