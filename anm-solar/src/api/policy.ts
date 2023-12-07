import HTTP from "./axios";

const policyApi = {
  getPolicy: () => {
    const url = "/policy";
    return HTTP.get(url);
  },
};
export default policyApi;
