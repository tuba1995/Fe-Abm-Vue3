<template>
  <div class="header">
    <div id="top-bar" class="header-top bg-orangeff7 py-[3px]">
      <div class="flex container max-w-screen-xl h-full item-center mx-auto">
        <div class="w-1/2">
          <ul class="nav h-full flex text-red m-0">
            <li class="header-social-icons pr-2">
              <a href="" data-label="Facebook" aria-label="Close"
                ><i class="fa fa-youtube text-[#fff]" aria-hidden="true"></i
              ></a>
            </li>
            <li class="header-social-icons pr-2">
              <a href=""
                ><i
                  class="fa fa-facebook-official text-[#fff]"
                  aria-hidden="true"
                ></i
              ></a>
            </li>
            <li class="header-social-icons pr-2">
              <a href=""
                ><i class="fa fa-instagram text-[#fff]" aria-hidden="true"></i
              ></a>
            </li>
            <li class="header-social-icons pr-2">
              <a href=""
                ><i class="fa fa-twitter text-[#fff]" aria-hidden="true"></i
              ></a>
            </li>
          </ul>
        </div>
        <div class="w-1/2">
          <ul class="h-full m-0">
            <li class="text-right text-[#fff]">
              ABM SOLAR- Nguồn năng lượng vĩnh cửu
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="header-main bg-[#262221]">
      <div
        class="flex container max-w-screen-xl mx-auto items-center justify-items-center"
      >
        <div class="w-1/5">
          <nuxt-link to="/" class="">
            <img src="@/assets/logo.png" class="h-[105px]" alt="" />
          </nuxt-link>
        </div>
        <div class="w-2/5">
          <div class="header-input-search flex relative">
            <a-input
              class="custom-input"
              v-model:value="inputSearch"
              placeholder="Tìm kiếm"
            ></a-input>
            <div class="button-search" @click="handleSeach">
              <i class="fa fa-search" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div class="w-2/5 px-3 flex items-center justify-end">
          <div class="header-account mr-[12px] flex items-center relative">
            <div
              class="header-account__item flex items-center text-[#fff] text-[16px] font-bold"
            >
              <span class="block mx-3">
                <i class="fa fa-phone mr-3" aria-hidden="true"> </i>
                HotLine
              </span>
              <div class="phones">
                <a
                  href="tel:0815 829 999"
                  class="block hover:text-orangeff7 transition duration-300 ease-in-out text-[#fff]"
                >
                  0815 829 999
                </a>
                <a
                  href="tel:0815 829 999"
                  class="hover:text-orangeff7 transition duration-300 ease-in-out text-[#fff]"
                  >0815 829 999</a
                >
              </div>
            </div>
            <div class="header-account_item">
              <router-link to="/" class="text-[16px] text-[#fff] font-bold">
                <i class="fa fa-user mr-3" aria-hidden="true"></i>
                <span
                  class="hover:text-orangeff7 transition duration-300 ease-in-out"
                  >Tài khoản</span
                >
              </router-link>
            </div>
          </div>
          <div class="header-cart ml-[12px] flex relative">
            <router-link
              to="/cart"
              class="h-full text-[16px] text-[#fff] font-bold"
            >
              <i class="fa fa-shopping-cart mr-3" aria-hidden="true"></i>
              <span class="cart-number">2</span>
              <span
                class="hover:text-orangeff7 transition duration-300 ease-in-out"
                >Giỏ hàng</span
              >
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="header-bottom bg-orangeff7">
      <div class="flex container max-w-screen-xl mx-auto">
        <ul class="flex">
          <li
            class="header-vertical-menu py-4 relative text-white capitalize font-bold mr-3"
          >
            <div class="header-vertical-menu__opener dark">
              <span class="header-vertical-menu__icon mr-3">
                <i
                  class="fa fa-align-justify text-[#fff]"
                  aria-hidden="true"
                ></i>
              </span>
              <span
                class="header-vertical-menu__title capitalize text-[#fff] text-[16px] mr-6"
              >
                SẢN PHẨM
              </span>
            </div>
            <div class="header-vertical-menu__fly-out absolute">
              <div class="">
                <ul class="ux-nav-vertical-menu nav-vertical-fly-out">
                  <li class="p-2">aaaaaaaaaa</li>
                  <li class="p-2">aaaaaaaaaa</li>
                  <li class="p-2">aaaaaaaaaa</li>
                  <li class="p-2">aaaaaaaaaa</li>
                  <li class="p-2">aaaaaaaaaa</li>
                </ul>
              </div>
            </div>
          </li>
          <li
            class="py-4 text-[16px] text-[#fff] capitalize font-bold mr-6"
            v-for="route in menuRoutes"
            :key="route.path"
          >
            <router-link :to="route.path" class="hover:text-[#082359]">{{
              route.name
            }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
const $router = useRouter();
const inputSearch = ref("");
const menuRoutes = $router.options.routes.filter(
  (routes: any) => routes.meta && routes.meta.showInMenu
);

function handleSeach() {
  console.log("inputSearch", process.env.VUE_APP_API_HOST);
}
</script>

<style lang="scss" scoped>
.header-cart {
  a {
    position: relative;
    .cart-number {
      border-radius: 50%;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      -ms-border-radius: 50%;
      -o-border-radius: 50%;
      background-color: #ff740b;
      color: #fff;
      position: absolute;
      height: 20px;
      width: 20px;
      left: 7px;
      top: -10px;
      text-align: center;
      font-size: 12px;
    }
  }
}
.header-account {
  grid-gap: 24px;
  gap: 24px;
  &__item {
    grid-gap: 12px;
    gap: 12px;
  }
}
.header-input-search {
  position: relative;
  .custom-input {
    height: 60px;
    padding: 10px 50px 10px 10px;
    border-radius: 10px;
    background-color: #ffe3ce;
    border: none;
    color: #081f41;
    input::placeholder {
      color: black !important;
    }
  }
  .button-search {
    background-color: #ff740b;
    height: 50px;
    width: 50px;
    position: absolute;
    top: 5px;
    right: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px !important;
    &:hover {
      box-shadow: inset 0 0 0 100px rgba(0, 0, 0, 0.2);
      color: #fff;
      opacity: 1;
      outline: none;
      background-color: #ff740b;
    }
    .fa {
      color: #fff;
    }
  }
}
.header-vertical-menu {
  &__icon {
    font-size: 12px;
  }
  &:hover {
    .header-vertical-menu__fly-out {
      opacity: 1;
      visibility: visible;
      border-radius: 12px;
    }
  }
  &__fly-out {
    box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.15);
    transition: opacity 0.25s, visibility 0.25s;
    background-color: #fff;
    opacity: 0;
    position: absolute;
    visibility: hidden;
    width: 250px;
    z-index: 9;
    top: 57px;
    ul {
      li {
        a {
          color: hsla(0, 0%, 40%, 0.85);
          transition: all 0.2s;
          font-size: 14px;
          padding: 0;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-wrap: unset;
          &:hover {
            color: #333;
          }
        }
      }
    }
  }
}
</style>
