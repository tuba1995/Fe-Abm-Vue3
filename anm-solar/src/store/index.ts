import { createStore } from "vuex";
import userStore from "./user";
import productStore from "./product";

export default createStore({
  modules: {
    userStore,
    productStore,
  },
});
