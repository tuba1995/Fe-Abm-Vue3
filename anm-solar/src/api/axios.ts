import axios from "axios";
import store from "@/store";
const HTTP = axios.create({
  baseURL: process.env.VUE_APP_API_HOST,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    // Authorization: `Bearer ${LOCAL_STORAGE_KEY.ACCESS_TOKEN}`,
  },
});

// Add a request interceptor
HTTP.interceptors.request.use(
  function (config) {
    store.dispatch("commonStore/setLoading", true);
    return config;
  },
  function (error) {
    store.dispatch("commonStore/setLoading", false);
    return Promise.reject(error);
  }
);

// Add a response interceptor
HTTP.interceptors.response.use(
  function (response) {
    store.dispatch("commonStore/setLoading", false);
    return response.data;
  },
  function (error) {
    store.dispatch("commonStore/setLoading", false);
    return Promise.reject(error);
  }
);

export default HTTP;
