import { API, REVIEW } from '../components/Global';

export const postReview = (params, token) => {
    const URL = API + REVIEW + '?token=' + token;
    return fetch(URL, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
    }).then((res) => res.json());
}

export const updateReview = (params, token, user_id) => {
    const URL = API + REVIEW + '?user_id=' + user_id;
    return fetch(URL, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
    }).then((res) => res.json());
}