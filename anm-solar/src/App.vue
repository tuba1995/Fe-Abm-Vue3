<template>
  <div class="app">
    <Header />
    <div class="app-content">
      <Suspense>
        <router-view> </router-view>
      </Suspense>
    </div>
    <loadingPage :isLoading="isLoadingPage"></loadingPage>
  </div>
</template>
<script setup lang="ts">
import Header from "@/components/HeaderComponent.vue";
import loadingPage from "@/components/Loading/loadingPage.vue";
import { computed, onMounted, ref, watch } from "vue";
import { useStore } from "vuex";
const store = useStore();
const isLoadingPage = computed(() => {
  return store.state.commonStore.isLoading;
});
</script>
<style lang="scss">
@import "@/assets/scss/main.scss";
#app {
  font-family: "Inter";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
