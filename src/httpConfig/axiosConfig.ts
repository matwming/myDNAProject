import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';
/*
 * cancel axios request to prevent memory leak
 * */

export const source = axios.CancelToken.source();
const baseURL: string = '';
const instance = axios.create({
    baseURL: baseURL,
    timeout: 4000, //control whether cancel this request if waiting time is longer than this
    headers: { "X-Custom-Header": "foobar" }
});
instance.interceptors.request.use(
    async config => {
        let wp_jwt = await AsyncStorage.getItem("myDNAToken");
        let token: string = "";
        if (wp_jwt) {
            token = JSON.parse(wp_jwt).token;
            console.log("axiosToken", token);
        }

        if (Boolean(token)) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        console.log("config", config);
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
export default instance;
