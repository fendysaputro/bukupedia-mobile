import { API, PROFILE } from '../components/Global';

export const postEditProfile = async (params, token) => {
    const URL = API + PROFILE + '?token=' + token;
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