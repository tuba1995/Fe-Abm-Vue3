import { createStore } from "vuex";
import userStore from "./user";
import productStore from "./product";
import commonStore from "./common";

export default createStore({
  modules: {
    commonStore,
    userStore,
    productStore,
  },
});
