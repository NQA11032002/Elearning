

<template>
  <HeaderScreen></HeaderScreen>

  <div class="py-8 w-full max-sm:py-0 bg-gray-50">
    <router-view :user="user"></router-view>
  </div>

  <footer-screen></footer-screen>
</template>

<script>
import HeaderScreen from "./components/client/common/HeaderScreen.vue";
import FooterScreen from "./components/client/common/FooterScreen.vue";
import { findApiByName } from './assets/js/apiUtil.js';
import { getRole } from "./assets/js/auth.js";

export default {
  setup() {

    const role = getRole();
    const expertAccessible = window.location.pathname.split('/')[1];
    if (expertAccessible.toLowerCase().includes("expert") && !role.toLowerCase().includes("expert")) {
      console.log(expertAccessible);

      // Use Vue Router's programmatic navigation
      window.location.href = '/error-403';
    }
  },
  name: "App",
  components: {
    HeaderScreen,
    FooterScreen,
  },
  data() {
    return {
      page: "home",
      user: {
        fullName: '',
      }
    }
  },
}
</script>
