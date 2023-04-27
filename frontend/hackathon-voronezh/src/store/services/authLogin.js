import {fetchLogin, fetchRegister} from "../api/authApi";

export async function authLogin(credentials) {
    try {
        const response = await fetchLogin(credentials);
        const {userKey} = response;

        return userKey;
    } catch (e) {
        // TODO: доделать обработку ошибок
        console.log(e);
    }
}

export async function authRegistration(credentials) {
    try {
        const response = await fetchRegister(credentials);
        const {userKey} = response;

        return userKey;
    } catch (e) {
        // TODO: доделать обработку ошибок
        console.log(e);
    }
}