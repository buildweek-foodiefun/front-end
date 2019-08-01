import axios from 'axios';

const axiosAuth = () => {
    const token = isLoggedIn()
        ? getToken()
        : 'false';

    const instance = axios.create({
        headers: {
            Authorization: token,
        },
    });

    return instance;
}

export default axiosAuth


export const isLoggedIn = () => {
    return !!getToken() && getToken() !== "null";
};

export const setUserId = userId => {
    localStorage.setItem('foodieFunUserId', userId);
}

export const getUserId = () => {
    return localStorage.getItem('FoodieFunUserId');
}

export const setToken = token => {
    localStorage.setItem('FoodieFunToken', token);
};

export const getToken = () => {
    return localStorage.getItem('FoodieFunToken');
}

export const clearToken = () => {
    localStorage.removeItem('FoodieFunToken');
}
