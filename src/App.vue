<template>
  <div>
    <HeaderScreen></HeaderScreen>
    <router-view></router-view>
    <footer-screen></footer-screen>
  </div>
</template>

<script>
  import HeaderScreen from "./components/client/HeaderScreen.vue";
  import FooterScreen from "./components/client/FooterScreen.vue";

export default {
  setup(){
  },
  name: 'App',
  components: {
    HeaderScreen,
    FooterScreen

},
  data(){
    return{
      page: "detail",
    }
  }
}
</script>
