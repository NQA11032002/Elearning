<template>
  <HeaderScreen></HeaderScreen>
  <div class="w-full">
    <div class="w-2/3 m-auto max-sm:w-full max-sm:px-5 sm:px-3 lg:px-0 ">
    <router-view></router-view>
    </div>
  </div>
  <FooterScreen></FooterScreen>
</template>

<script>
import FooterScreen from './components/client/FooterScreen.vue';
import HeaderScreen from './components/client/HeaderScreen.vue';

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
      page: "home",
    }
  }
}
</script>
