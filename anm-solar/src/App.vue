<template>
  <div class="app">
    <Header />
    <div class="app-content">
      <Suspense>
        <router-view> </router-view>
      </Suspense>
    </div>
    <loadingPage :isLoading="isLoadingPage"></loadingPage>
    <loadingRefreshPage
      :isLoadingRefresh="isLoadingRefresh"
    ></loadingRefreshPage>
  </div>
</template>
<script setup lang="ts">
import Header from "@/components/HeaderComponent.vue";
import loadingPage from "@/components/Loading/loadingPage.vue";
import loadingRefreshPage from "./components/Loading/loadingRefreshPage.vue";
import { computed, onBeforeMount, ref, watch } from "vue";
import { useStore } from "vuex";
const store = useStore();
const isLoadingPage = computed(() => {
  return store.state.commonStore.isLoading;
});
const isLoadingRefresh = computed(() => {
  return store.state.commonStore.isLoadingRefresh;
});
// onBeforeMount(() => {
//   const isReload =
//     // kiểm tra xem nó là type nào .
//     performance.navigation.type === performance.navigation.TYPE_RELOAD;
//   if (isReload) {
//     store.commit("commonStore/SET_LOADING_REFRESH", true);
//     setTimeout(() => {
//       store.commit("commonStore/SET_LOADING_REFRESH", false);
//     }, 3000);
//   }
// });
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
