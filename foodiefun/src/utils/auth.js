import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('foodieFunToken');

    return axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
        }
    })
}

// export const axiosAuth = () => {
//   const token = isLoggedIn()
//     ? getToken()
//     : 'false';

//   const instance = axios.create({
//     headers: {
//       Authorization: token,
//     },
//   });

//   return instance;
// }


// export const isLoggedIn = () => {
//   return !!getToken() && getToken() !== "null";
// };

// export const setUserId = userId => {
//   localStorage.setItem('foodieFunUserId', userId);
// }

// export const getUserId = () => {
//   return localStorage.getItem('foodieFunUserId');
// }

// export const setToken = token => {
//   localStorage.setItem('foodieFunToken', token);
// };

// export const getToken = () => {
//   return localStorage.getItem('foodieFunToken');
// }

// export const clearToken = () => {
//   localStorage.removeItem('Token');
// }