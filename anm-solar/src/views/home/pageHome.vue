<template>
  <div>
    <BannerComponent />
    <IntroComponent />
    <Policy />
  </div>
</template>

<script lang="ts" setup>
import ProductApi from "@/api/product";
import BannerComponent from "@/views/home/component/BannerComponent.vue";
import IntroComponent from "./component/IntroComponent.vue";
import Policy from "./component/Policy.vue";
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { Product, ListReponsive } from "@/modules/index";
const product = ref<Product[]>([]);
const store = useStore();
async function fetchProductAll() {
  const res: ListReponsive<Product> = await ProductApi.getProduct();
  product.value = res.data;
}

async function fetchProductAllStore() {
  console.log(store);
  // await store.dispatch("productStore/getProduct"); // Dispatch action đúng
}
async function fetchVideo() {
  store.dispatch("commonStore/setVideo");
}
computed;
onMounted(() => {
  fetchProductAll();
  fetchProductAllStore();
  fetchVideo();
});
</script>

<style lang="scss" scoped>
/* Những đoạn mã SCSS của bạn điều ở đây */
</style>
