<template>
  <div>
    <header-screen
      v-if="page != 'login' && page != 'register' && page !== 'adminHome' && page !== 'ProsserMangerPage' && page !== 'CourseMangerPage' && page !== 'StudentMangerPage' && page !== 'ApprovePage'&& page !== 'LessonsPage'"></header-screen>
    <home-screen v-if="page === 'home'"></home-screen>
    <training-screen v-if="page === 'training'"></training-screen>
    <support-screen v-if="page === 'support'"></support-screen>
    <course-screen v-if="page === 'course'"></course-screen>
    <login-screen v-if="page === 'login'"></login-screen>
    <register-screen v-if="page === 'register'"></register-screen>
  </div>

  <div class="admin">
    <headerAdmin-screen
      v-if="page === 'adminHome' || page === 'ProsserMangerPage' || page === 'CourseMangerPage' || page === 'StudentMangerPage'||page === 'ApprovePage'|| page === 'LessonsPage'"></headerAdmin-screen>
    <div class="flex">
      <sidebar-screen v-if="page === 'adminHome' || page === 'ProsserMangerPage' || page === 'CourseMangerPage' || page === 'StudentMangerPage'||page === 'ApprovePage' || page === 'LessonsPage'"></sidebar-screen>
      <adminHome-screen
        v-if="page === 'adminHome' && page !== 'ProsserMangerPage' && page !== 'CourseMangerPage' && page !== 'StudentMangerPage'&& page !== 'ApprovePage'"></adminHome-screen>
      <ProfesserManager-screen v-if="page === 'ProsserMangerPage' && page !== 'adminHome'"></ProfesserManager-screen>
      <CourseManagerScreenVue v-if="page === 'CourseMangerPage' && page !== 'adminHome'"></CourseManagerScreenVue>
      <StudentManagerScreen v-if="page === 'StudentMangerPage' && page !== 'adminHome'"> </StudentManagerScreen>
      <ApproveScreen v-if="page === 'ApprovePage' && page !== 'adminHome'"></ApproveScreen>
      <LessonsScreen v-if="page === 'LessonsPage' && page !== 'adminHome'"></LessonsScreen>
    </div>
  </div>

  <div>
    <footer-screen
      v-if="page != 'login' && page != 'register'"></footer-screen>
  </div>
  <!-- <footer-screen></footer-screen> -->
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
import SidebarScreen from "./components/admin/SidebarScreen.vue";
import HeaderAdminScreen from "./components/admin/HeaderAdminScreen.vue";
import AdminHomeScreen from "./components/admin/AdminHomeScreen.vue";
import ProfesserManagerScreen from "./components/admin/ProfesserManagerScreen.vue";
import CourseManagerScreenVue from "./components/admin/CourseMangerScreen.vue";
import StudentManagerScreen from "./components/admin/StudentManagerScreen.vue";
import ApproveScreen from "./components/admin/ApproveScreen.vue";
import LessonsScreen from "./components/admin/LessonsScreen.vue";

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
    SidebarScreen,
    HeaderAdminScreen,
    AdminHomeScreen,
    ProfesserManagerScreen,
    CourseManagerScreenVue,
    StudentManagerScreen,
    ApproveScreen,
    LessonsScreen
  },
  data() {
    return {
      page: "ApprovePage",
    };
  }
}
</script>
<style></style>