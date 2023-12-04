import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import "font-awesome/css/font-awesome.css";

createApp(App).use(store).use(router).use(Antd).mount("#app");
