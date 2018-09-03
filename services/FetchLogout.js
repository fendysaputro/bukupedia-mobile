import { API, LOGOUT } from '../components/Global';

export const getLogout = async (token) => {
    const URL = API + LOGOUT + '?token=' + token;
    return fetch(URL)
            .then((res) => res.json());
}