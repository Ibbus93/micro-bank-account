import Axios from 'axios';

const endPoint = 'https://eac2ba49-471c-41fb-bc72-d2d51960827f.mock.pstmn.io';

const getHeaders = (token) => ({
    Authorization: `Bearer ${token}`
});

const getAccount = ({ id, token }) => Axios.get(`${endPoint}/user/${id}/account`, { headers: getHeaders(token)});

export {
    getAccount
};


