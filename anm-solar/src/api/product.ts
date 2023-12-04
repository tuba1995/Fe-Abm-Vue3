import HTTP from "./axios";

const ProductApi = {
  getProduct: () => {
    const url = "/posts";
    return HTTP.get(url, {
      // Timeout sau 3 giây (3000 milliseconds)
      timeout: 10000,
    });
  },
};
export default ProductApi;
