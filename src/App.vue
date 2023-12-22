<template>
  <HeaderScreen></HeaderScreen>

  <div class="py-8 w-full max-sm:py-0 h-screen bg-gray-50">
    <router-view :user="user"></router-view>
  </div>

  <footer-screen></footer-screen>
</template>

<script>
import HeaderScreen from "./components/client/HeaderScreen.vue";
import FooterScreen from "./components/client/FooterScreen.vue";
import { findApiByName } from './assets/js/apiUtil.js';
import axios from 'axios';
export default {
  setup() { },
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
  async loadInfor() {
    try {
      const queryParams = localStorage.getItem("idUser");
      if (!queryParams) {
        console.error('idUser is null or undefined');
        return;
      }
      const apiObject = findApiByName("customer", "findByID").url + "/" + queryParams;
      const token = localStorage.getItem("auth");
      const response = await axios.get(apiObject, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      this.user.fullName = response.data.data.fullName;

      console.log(response.data.data);
    } catch (error) {
      console.error('Get infor failed', error.response.data);
    }
  }
}
</script>
