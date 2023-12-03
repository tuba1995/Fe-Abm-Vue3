<template>
  <div>
    <p>gioi thieu</p>
  </div>
</template>

<script lang="ts" setup>
import ProductApi from "@/api/product";
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";

const product = ref([]); // Khởi tạo với giá trị ban đầu, ví dụ, một mảng rỗng.
const store = useStore();
const round = computed(() => store.state.productStore.product);


async function fetchProductAllStore() {
  console.log(store);
  await store.dispatch("productStore/getProduct"); // Dispatch action đúng
}

computed;
onMounted(() => {
  fetchProductAllStore();
});
</script>

<style lang="scss" scoped>
/* Những đoạn mã SCSS của bạn điều ở đây */
</style>
