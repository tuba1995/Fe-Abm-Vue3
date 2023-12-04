import ProductApi from "@/api/product";

const getProduct = async (context: any) => {
  // context.commit("commonStore/SET_LOADING", true, { root: true });
  const res = await ProductApi.getProduct();
  // context.commit("commonStore/SET_LOADING", false, { root: true });
  context.commit("SET_LIST_PRODUCT", res.data);
};
export default {
  getProduct,
};
