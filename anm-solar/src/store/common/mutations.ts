import { MutationTree } from "vuex";
interface State {
  isLoading: boolean;
}
const mutations: MutationTree<State> = {
  SET_LOADING(state, value: boolean) {
    state.isLoading = value;
  },
};
export default mutations;
