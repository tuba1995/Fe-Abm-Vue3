<template>
  <div class="loading" v-if="props.isLoading">
    <a-spin />
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps({
  isLoading: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped></style>
