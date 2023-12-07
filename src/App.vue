<template>
  <div class="bg-gray-50">
    <header-screen v-if="page!='login' && page!='register'"></header-screen>
    <home-screen v-if="page === 'home'" :courses="courses"></home-screen>
    <training-screen v-if="page === 'training'"></training-screen>
    <support-screen v-if="page === 'support'"></support-screen>
    <course-screen v-if="page === 'course'" :courses="courses" :totalPage="totalPage" 
      @search="onSearchChange" @priceFrom="onPriceFromChanged" @priceTo="onPriceToChanged" @education="oneEducationChange" @category="oneCategoryChange" @pageChanged="onPageChanged">
    </course-screen>
    <login-screen v-if="page === 'login'"></login-screen>
    <register-screen v-if="page === 'register'"></register-screen>
    <detail-course-screen v-if="page === 'detail'"></detail-course-screen>
    <footer-screen v-if="page!='login' && page!='register'"></footer-screen>
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
  import DetailCourseScreen from "./components/client/DetailCourseScreen.vue";
  import { ref } from "vue";
  import axios from "axios";


export default {
  created () {
  },
  setup(props, { emit }){
    const courses = ref([]);

    const page = ref(0);
    const records = 6;
    const totalPage = ref(0);
    const search = ref('');
    const priceFrom = ref();
    const priceTo = ref();
    const education = ref();
    const category = ref();

    const oneCategoryChange = (value) => {
      category.value = value;

      getAllCourses();
    }

    const oneEducationChange = (value) => {
      education.value = value;

      getAllCourses();
    }

    const onPriceFromChanged = (value) => {
      priceFrom.value = value;

      getAllCourses();
    }

    const onPriceToChanged = (value) => {
      priceTo.value = value;

      getAllCourses();
    }

    const onSearchChange = (keyword) => {
      search.value = keyword;

      getAllCourses();
    }

    const getAllCourses = async () => {
      try
      {
        const res = await axios.get("http://localhost:8087/api/course", {
          params: {
            page: page.value,
            records: records,
            search: search.value,
            priceFrom: priceFrom.value,
            priceTo: priceTo.value,
            education: education.value,
            category: category.value
          }
        });

        courses.value = res.data.data;
        totalPage.value = res.data.totalPage;
        
        // Phát ra sự kiện để thông báo danh sách khóa học mới cho component con
        emit("coursesChanged", courses.value);

      } catch (error) {
        console.log(error)
      }
    }

    const onPageChanged  = (newPage) => {
      page.value = newPage;
      getAllCourses();
    }

    getAllCourses();

    return {
      totalPage,
      courses,
      onPageChanged,
      oneEducationChange,
      onSearchChange,
      onPriceFromChanged,
      onPriceToChanged,
      oneCategoryChange
    }
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
    DetailCourseScreen
  },
  data(){
    return{
      page: "detail",
    };
  }
}
</script>
