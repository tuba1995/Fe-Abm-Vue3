<template>
  <div>
    <h1 class="hihi text-3xl font-bold underline">Hello world!</h1>
    <Slider />
  </div>
</template>

<script lang="ts" setup>
import ProductApi from "@/api/product";
import Slider from "@/views/home/component/Slider.vue";
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
const product = ref([]); // Khởi tạo với giá trị ban đầu, ví dụ, một mảng rỗng.
const store = useStore();
const round = computed(() => store.state.productStore.product);
async function fetchProductAll() {
  const res = await ProductApi.getProduct();
  console.log("3111", res);
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
