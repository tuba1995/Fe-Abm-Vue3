import HTTP from "./axios";
const videoApi = {
  getVideo: () => {
    const url = "/video";
    return HTTP.get(url);
  },
};
export default videoApi;
