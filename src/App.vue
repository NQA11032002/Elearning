<template>
  <HeaderScreen></HeaderScreen>
  <div class="py-8 w-full max-sm:py-0">
    <router-view></router-view>
  </div>
  <footer-screen></footer-screen>

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
