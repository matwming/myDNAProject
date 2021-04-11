import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
/*
 * cancel axios request to prevent memory leak
 * */
export const source = axios.CancelToken.source();

const baseURL: string = '';

//Define a basic axios instance, even an backend api is not required in this test, this is handy when we want to connect to an api in the future.
const instance = axios.create({
  baseURL: baseURL,
  timeout: 4000, //control whether cancel this request if waiting time is longer than this
  headers: {'X-Custom-Header': 'foobar'},
});

//Define an interceptor: this can be used for storing api token in local storage
instance.interceptors.request.use(
  async config => {
    let myDNAToken = await AsyncStorage.getItem('myDNAToken');
    let token: string = '';
    if (myDNAToken) {
      token = JSON.parse(myDNAToken).token;
      console.log('axiosToken', token);
    }

    if (Boolean(token)) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    console.log('config', config);
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
export default instance;
