import ProductApi from "@/api/product";

const getProduct = async (context: any) => {
  const res = await ProductApi.getProduct();
  context.commit("SET_LIST_PRODUCT", res.data);
};
export default {
  getProduct,
};
