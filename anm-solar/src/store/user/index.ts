import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
const userStore = {
  namespaced: true,
  state: {
    isLoading: false,
  },
  mutations,
  actions,
  getters,
};
export default userStore;
