import { MutationTree } from "vuex";
interface Product {
  id: number;
  userId: number;
  title: string;
}
interface State {
  product: Array<Product>;
}
const mutations: MutationTree<State> = {
  SET_LIST_PRODUCT(state, products: Array<Product>) {
    state.product = products;
  },
};
export default mutations;
