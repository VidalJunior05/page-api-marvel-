import axios from 'axios';
import md5 from 'md5';



const publicKeyMarvel =  'e2c47555884c307128283968d41b0f91';
const privateKeyMarvel = 'add2d76a95b6f0b32a1ac234b2877107af59adcd';

const timeCurrent = Number(new Date());

const hash = md5(timeCurrent + privateKeyMarvel + publicKeyMarvel);

const api = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public/',
    params: {
        ts: timeCurrent,
        apikey: publicKeyMarvel,
        hash,
    },
});
export default api;