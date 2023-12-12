<template>
  <!-- <HeaderScreen></HeaderScreen> -->
  <div class="py-8 w-full max-sm:py-0">
    <router-view></router-view>
  </div>
  <!-- <footer-screen></footer-screen> -->

</template>

<script>

export default {
  setup(){
  },
  name: 'App',
  components: {

},
  data(){
    return{
      page: "detail",
    }
  }
}
</script>
