import HTTP from "./axios";

const ProductApi = {
  getProduct: () => {
    const url = "/posts";
    return HTTP.get(url);
  },
};
export default ProductApi;
