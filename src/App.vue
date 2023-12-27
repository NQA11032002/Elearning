<template>
  <div>
    <header-screen v-if="page != 'login' && page != 'register' && page !== 'adminHome' && page !== 'ProsserMangerPage' && page !== 'CourseMangerPage' && page !== 'StudentMangerPage' && page !== 'ApprovePage'&& page !== 'LessonsPage'"></header-screen>
    <home-screen v-if="page === 'home'"></home-screen>
    <training-screen v-if="page === 'training'"></training-screen>
    <support-screen v-if="page === 'support'"></support-screen>
    <course-screen v-if="page === 'course'"></course-screen>
    <login-screen v-if="page === 'login'"></login-screen>
    <register-screen v-if="page === 'register'"></register-screen>
  </div>

      <adminHome-screen
        v-if="page === 'adminHome' && page !== 'ProsserMangerPage' && page !== 'CourseMangerPage' && page !== 'StudentMangerPage'&& page !== 'ApprovePage'"></adminHome-screen>

  <div>
    <footer-screen
      v-if="page != 'login' && page != 'register'"></footer-screen>
  </div>
</template>
<script>
import HomeScreen from "./components/client/HomeScreen.vue";
import HeaderScreen from "./components/client/HeaderScreen.vue";
import FooterScreen from "./components/client/FooterScreen.vue";
import TrainingScreen from "./components/client/TrainingScreen.vue";
import SupportScreen from "./components/client/SupportScreen.vue";
import CourseScreen from "./components/client/CourseScreen.vue";
import LoginScreen from "./components/client/LoginScreen.vue";
import RegisterScreen from "./components/client/RegisterScreen.vue";
import AdminHomeScreen from "./components/admin/AdminHomeScreen.vue";

export default {
  setup() {
  },
  name: 'App',
  components: {
    HomeScreen,
    TrainingScreen,
    CourseScreen,
    SupportScreen,
    HeaderScreen,
    FooterScreen,
    LoginScreen,
    RegisterScreen,
    AdminHomeScreen,
  },
  data() {
    return {
      page: "adminHome",
    };
  },
}
</script>
<style></style>