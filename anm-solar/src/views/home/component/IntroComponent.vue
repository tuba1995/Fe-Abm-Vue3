<template>
  <div class="intro video-common">
    <div class="container max-w-screen-xl mx-auto">
      <div class="flex mb-[90px]">
        <div class="w-1/2 px-3">
          <div class="col-inner">
            <h2 class="mb-4 text-left">{{ introVideo?.title }}</h2>
            <p class="mb-4 text-left text-[16px]">
              {{ introVideo?.description }}
            </p>
          </div>
        </div>
        <div class="w-1/2 px-3">
          <div class="col-inner h-full">
            <Video :video="introVideo"></Video>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap">
        <div class="w-1/2 px-3" v-for="item in otherVideo" :key="item.filePath">
          <Video :video="item" :isOther="true"></Video>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Video from "@/components/Video.vue";
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const allVideos = computed(() => store.getters["commonStore/getVideo"]);
const introVideo = computed(() => {
  return allVideos.value.find((video: any) => video.type === "intro") || null;
});
const otherVideo = computed(() => {
  return allVideos.value.filter((video: any) => video.type === "other") || null;
});
</script>

<style lang="scss" scoped></style>
