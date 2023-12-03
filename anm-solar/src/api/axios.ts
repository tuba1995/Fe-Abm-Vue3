import axios from "axios";
const HTTP = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    // Authorization: `Bearer ${LOCAL_STORAGE_KEY.ACCESS_TOKEN}`,
  },
});

// Add a request interceptor
HTTP.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
HTTP.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default HTTP;
