<template>
  <div>
    <header-screen></header-screen>
    <home-screen v-if="page === 'home'"></home-screen>
    <training-screen v-if="page === 'training'"></training-screen>
    <support-screen v-if="page === 'support'"></support-screen>
    <course-screen v-if="page === 'course'"></course-screen>
    <footer-screen></footer-screen>
  </div>

</template>

<script>
  import HomeScreen from "./components/client/HomeScreen.vue";
  import HeaderScreen from "./components/client/HeaderScreen.vue";
  import FooterScreen from "./components/client/FooterScreen.vue";
  import TrainingScreen from "./components/client/TrainingScreen.vue";
  import SupportScreen from "./components/client/SupportScreen.vue";
  import CourseScreen from "./components/client/CourseScreen.vue";

export default {
  name: 'App',
  components: {
    HomeScreen,
    TrainingScreen,
    CourseScreen,
    SupportScreen,
    HeaderScreen,
    FooterScreen
  },
  data(){
    return{
      page: "login",
    };
  }
}
</script>
