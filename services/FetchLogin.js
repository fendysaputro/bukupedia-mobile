import { API, LOGIN } from "../components/Global";

export const postLogin = (params) => {
    const URL = API + LOGIN;
    return fetch(URL, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
    }).then((res) => res.json());
}