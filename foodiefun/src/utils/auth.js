import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRhdmlkIiwiaWF0IjoxNTY0NTcxMjM2LCJleHAiOjE1NjQ4MzA0MzZ9.RpdHbaqncnttO3h-Iq6U6MYYGkxmQkTeLSIH3708iXQ'

    return axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
        }
    })
}
