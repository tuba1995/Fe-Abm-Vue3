import { MutationTree } from "vuex";
import { video } from "@/views/home/home";
interface State {
  video: video[];
  isLoading: boolean;
  isLoadingRefresh: boolean;
}
const mutations: MutationTree<State> = {
  SET_LOADING(state, value: boolean) {
    state.isLoading = value;
  },
  SET_LOADING_REFRESH(state, value: boolean) {
    state.isLoadingRefresh = value;
  },
  SET_VIDEO(state, value) {
    state.video = value.data;
    console.log();
  },
};
export default mutations;
