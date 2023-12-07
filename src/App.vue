<template>
  <div>
    <header-screen ></header-screen>
    <router-view></router-view>
    <footer-screen ></footer-screen>
  </div>
</template>

<script>
  import HeaderScreen from "./components/client/HeaderScreen.vue";
  import FooterScreen from "./components/client/FooterScreen.vue";
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
    HeaderScreen,
    FooterScreen
  },
  data(){
    return{
    };
  }
}
</script>
