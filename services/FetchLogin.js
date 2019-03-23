import { API, LOGIN } from "../components/Global";

export const postLogin = async (params) => {
    const URL = API + LOGIN;
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