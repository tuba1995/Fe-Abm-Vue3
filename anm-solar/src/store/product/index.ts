import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
const productStore = {
  namespaced: true,
  state: {
    card: [],
    product: [1],
  },
  mutations,
  actions,
  getters,
};
export default productStore;
