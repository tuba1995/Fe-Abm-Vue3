<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="h-slider">
    <div class="custom-container">
      <div class="title-cm text-center">Tích hợp hệ thống</div>
      <div class="slider-box">
        <swiper
          :slides-per-view="3"
          :space-between="50"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide
            ><img src="../../../assets/images/1.jpg" alt=""
          /></swiper-slide>
          <swiper-slide
            ><img src="../../../assets/images/2.jpg" alt=""
          /></swiper-slide>
          <swiper-slide
            ><img src="../../../assets/images/3.jpg" alt=""
          /></swiper-slide>
          <swiper-slide
            ><img src="../../../assets/images/4.jpg" alt=""
          /></swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
};
</script>
