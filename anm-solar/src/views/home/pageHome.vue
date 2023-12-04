<template>
  <div>
    <Slider />
  </div>
</template>

<script lang="ts" setup>
import ProductApi from "@/api/product";
import Slider from "@/views/home/component/Slider.vue";
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { Product, ListReponsive } from "@/modules/index";
const product = ref<Product[]>([]);
const store = useStore();
const round = computed(() => store.state.productStore.product);
async function fetchProductAll() {
  const res: ListReponsive<Product> = await ProductApi.getProduct();
  product.value = res.data;
}

async function fetchProductAllStore() {
  console.log(store);
  await store.dispatch("productStore/getProduct"); // Dispatch action đúng
}

computed;
onMounted(() => {
  fetchProductAll();
  fetchProductAllStore();
});
</script>

<style lang="scss" scoped>
/* Những đoạn mã SCSS của bạn điều ở đây */
</style>
