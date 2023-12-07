<template>
  <div class="hero-video">
    <video
      ref="bannerVideo"
      class="video"
      width="100%"
      height="auto"
      muted
      autoplay
      loop
      :key="bannerVideo?.filePath"
    >
      <source :src="bannerVideo?.filePath" type="video/mp4" />
    </video>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const allVideos = computed(() => store.getters["commonStore/getVideo"]);
const bannerVideo = computed(() => {
  return allVideos.value.find((video: any) => video.type === "banner") || null;
});
// async function fetchVideo() {
//   const response: AxiosResponse<{ data: videoModel[] }> =
//     await videoApi.getVideo();
//   video.value = response || [];
// }
// onMounted(() => {
//   fetchVideo();
// });
</script>

<style lang="scss" scoped>
.hero-video {
  height: 500px;
  .video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
}
</style>
