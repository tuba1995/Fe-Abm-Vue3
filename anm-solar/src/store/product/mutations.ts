import { MutationTree } from "vuex";
interface Product {
  id: number;
  userId: number;
  title: string;
}
interface State {
  product: Array<Product>;
}
const mutations: MutationTree<State> = {};
export default mutations;
