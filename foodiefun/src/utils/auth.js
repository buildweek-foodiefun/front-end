import axios from 'axios';

export const axiosWithAuth = () => {
    // const token = localStorage.getItem('foodieFunToken');
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRhdmlkIiwiaWF0IjoxNTY0NTcxMjM2LCJleHAiOjE1NjQ4MzA0MzZ9.RpdHbaqncnttO3h-Iq6U6MYYGkxmQkTeLSIH3708iXQ'

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