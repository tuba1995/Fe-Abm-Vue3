import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
const userStore = {
  namespaced: true,
  state: {
    user: [],
  },
  mutations,
  actions,
  getters,
};
export default userStore;
