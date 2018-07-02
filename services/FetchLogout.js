import { API, LOGOUT } from '../components/Global';

export const getLogout = async () => {
    const URL = API + LOGOUT;
    return fetch(URL)
            .then((res) => res.json());
}