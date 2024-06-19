import axios from 'axios';

// 此處的instance為我們create的實體
const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/todos',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Bearer ' + 'I am token',
  },
});

/** Request 攔截器 */
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.log('request', config);
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

/** Response 攔截 */
instance.interceptors.response.use(
  function (config) {
    // Do something before request is sent
    console.log('response', config);
    return config;
  },
  function (error) {
    // Do something with request error
    console.log('error', error);
    return Promise.reject(error);
  }
);

export const AxiosInstance = instance;
