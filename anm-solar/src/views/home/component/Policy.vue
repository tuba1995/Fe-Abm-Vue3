<template>
  <div class="policy py-[60px]">
    <div class="container max-w-screen-xl mx-auto">
      <div class="flex flex-wrap">
        <div
          v-for="(item, index) in listPolicy"
          :key="index"
          class="w-1/5 px-3"
        >
          <div
            class="policy__box mb-4 h-full border border-[#e3e3e3] rounded-[12px] p-3"
          >
            <div class="policy__images mb-3">
              <img :src="item?.filePath" class="w-[60px] mx-auto" alt="" />
            </div>
            <div class="policy__text">
              <h3
                class="policy__title mb-3 text-[18px] font-bold mb-3 text-[#000] capitalize"
              >
                {{ item?.title }}
              </h3>
              <div class="policy__des">{{ item?.description }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import policyApi from "@/api/policy";
import { ref, computed, onMounted } from "vue";
const listPolicy = ref([]);

async function fetchPolicy() {
  const response: any = await policyApi.getPolicy();
  listPolicy.value = response.data;
  console.log("response", listPolicy);
}
onMounted(() => {
  fetchPolicy();
});
</script>

<style lang="scss" scoped></style>
