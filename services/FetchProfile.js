import { API, PROFILE } from '../components/Global';

export const getProfile = async () => {
    const URL = API + PROFILE;
    return fetch(URL)
            .then((res) => res.json());
}