<template>
  <div class="video-element h-full">
    <div class="relative">
      <video
        v-if="props.video?.filePath"
        ref="video"
        class="video"
        id="banner-video"
        width="100%"
        height="auto"
        :key="props.video?.filePath"
      >
        <source :src="props.video?.filePath" />
      </video>
      <div class="button-play" v-if="isShowPlay" @click="playVideo"></div>
    </div>

    <h3
      class="text-[20px] text-[#081F41] mt-[10px] mb-[40px] font-bold"
      v-if="isOther"
    >
      {{ props.video?.title }}
    </h3>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
const props = defineProps({
  video: {
    type: Object,
    defaut: {},
  },
  isOther: {
    type: Boolean,
    defaut: false,
  },
});
const isShowPlay = ref(true);
const video = ref(null);
function playVideo() {
  isShowPlay.value = false;
  video.value.controls = true;
  video.value.play();
}
</script>

<style lang="scss" scoped>
.video-element {
  position: relative;
  .video {
    width: 100%;
  }
  .button-play {
    font-size: 3em;
    line-height: 1.5em;
    height: 1.63332em;
    width: 3em;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 0;
    margin-top: -0.81666em;
    margin-left: -1.5em;
    cursor: pointer;
    opacity: 1;

    transition: all 0.4s;
    &:before {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      background-image: url("@/assets/images/icon/download.svg");
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      left: 0;
      top: 0;
    }
  }
}
</style>
