<template>
  <div class="grid container mt-14 mb-14">
    <div class="sidebar">
      <div class="sidebar__container">
        <h1 class="title mb-3 text-center font-semibold">KHÓA HỌC</h1>
      </div>

      <div class="filters p-5">
        <div class="filter__container">
          <div class="filter filter__search">
            <p>Tìm thấy : <b>14 khóa học</b> theo <b>keyword</b></p>
            <input type="text" class="search__name" @change="searchCourse" v-model="keyword" placeholder="Tìm tên khóa học...">
          </div>

          <div class="filter filter__price">
            <h2 class="font-semibold">Khoảng giá</h2>
            <div>
              <label class="flex cursor-pointer filter--text" for="cb__price--1">
                <input type="radio" id="cb__price--1" name="rd_price" class="cb__price mr-2" @change="selectedPriceRange($event)" data-price_from="0" value="500000">
                Từ 0 đến 500k
              </label>

              <label class="flex cursor-pointer filter--text" for="cb__price--2">
                <input type="radio" id="cb__price--2" name="rd_price" class="cb__price mr-2" @change="selectedPriceRange($event)" data-price_from="500001" value="1000000">
                Từ 500k đến 1 triệu
              </label>

              <label class="flex cursor-pointer filter--text" for="cb__price--3">
                <input type="radio" id="cb__price--3" name="rd_price" class="cb__price mr-2" @change="selectedPriceRange($event)"  data-price_from="1000000" value="3000000">
                Từ 1 triệu đến 3 triệu
              </label>

              <label class="flex cursor-pointer filter--text" for="cb__price--4">
                <input type="radio" id="cb__price--4" name="rd_price" class="cb__price mr-2" @change="selectedPriceRange($event)" data-price_from="3000000" value="5000000">
                Từ 3 triệu đến 5 triệu
              </label>

              <label class="flex cursor-pointer filter--text" for="cb__price--5">
                <input type="radio" id="cb__price--5" name="rd_price" class="cb__price mr-2" @change="selectedPriceRange($event)" data-price_from="5000000"
                  value="9999999999">
                Trên 5 triệu
              </label>
            </div>
          </div>


          <div class="filter filter__education">
            <h2 class="font-semibold">Thời gian khóa học</h2>
            <div>
              <label class="flex cursor-pointer filter--text" for="filter__education--1">
                <input type="radio" id="filter__education--1" class="filter__education mr-2" name="rd__education"
                  value="10">
                Lớp 10
              </label>

              <label class="flex cursor-pointer filter--text" for="filter__education--2">
                <input type="radio" id="filter__education--2" class="filter__education mr-2" name="rd__education"
                  value="11">
                Lớp 11
              </label>

              <label class="flex cursor-pointer filter--text" for="filter__education--3">
                <input type="radio" id="filter__education--3" class="filter__education mr-2" name="rd__education"
                  value="12">
                Lớp 12
              </label>

              <label class="flex cursor-pointer filter--text" for="filter__education--4">
                <input type="radio" id="filter__education--4" class="filter__education mr-2" name="rd__education"
                  value="13">
                Đại học
              </label>
            </div>
          </div>

          <div class="filter filter__title">
            <h2 class="font-semibold">Khóa học</h2>
            <div>
              <label class="flex cursor-pointer filter--text" for="filter__title--1">
                <input type="radio" id="filter__title--1" class="filter__title mr-2" name="rd__title" value="wordpress">
                Wordpress
              </label>

              <label class="flex cursor-pointer filter--text" for="filter__title--2">
                <input type="radio" id="filter__title--2" class="filter__title mr-2" name="rd__title" value="programming">
                Lập trình
              </label>

              <label class="flex cursor-pointer filter--text" for="filter__title--3">
                <input type="radio" id="filter__title--3" class="filter__title mr-2" name="rd__title" value="math">
                Môn toán
              </label>

              <label class="flex cursor-pointer filter--text" for="filter__title--4">
                <input type="radio" id="filter__title--4" class="filter__title mr-2" name="rd__title" value="literature">
                Môn văn
              </label>

              <label class="flex cursor-pointer filter--text" for="filter__title--4">
                <input type="radio" id="filter__title--4" class="filter__title mr-2" name="rd__title" value="english">
                Tiếng Anh
              </label>

              <label class="flex cursor-pointer filter--text" for="filter__title--4">
                <input type="radio" id="filter__title--4" class="filter__title mr-2" name="rd__title" value="ads">
                Google Ads
              </label>

              <label class="flex cursor-pointer filter--text" for="filter__title--4">
                <input type="radio" id="filter__title--4" class="filter__title mr-2" name="rd__title" value="seo">
                Seo website
              </label>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="col-right">
      <div class="histories flex mb-3">
        <p>Tìm kiếm gần đây: <b class="pl-1 histories__result">keyword</b></p>
        <p class="mr-5 ml-5"><b>Từ khóa</b> được tìm kiếm nhiều nhất: <b class="pl-1 histories__result">keyword</b></p>
        <p>Khóa học <b>nổi bật</b> trong tháng: <b class="pl-1 histories__result">Keyword</b></p>
      </div>

      <div class="courses p-5">
        <label class="filters flex justify-end font-semibold cursor-pointer">
          <i class="fa-solid fa-bars pr-2"></i>
          Bộ lọc
        </label>

        <div class="cards grid mt-5">
          <a href="" class="course flex flex-col" v-for="course in courses" :key="course.id">
            <img class="image object-cover flex-shrink-0" :src="course.urlImage" alt="">

            <div class="card p-3 flex flex-col">
              <p class="title font-semibold flex-shrink-0 mt-auto">{{ course.title }}</p>

              <div class="card__info flex justify-between flex-1">
                <div class="card__info--left flex">
                  <img class="avatar flex-shrink-0" src="../../assets/images/client/avatars/1.png" alt="">
                  <p class="name flex-1 ml-2">Võ Duy Thanh</p>
                </div>

                <p class="card__info--right cursor-default text-center font-semibold" :class="compareDates(course.createdAt) == 'course__new' ? 'course__new' : null">{{ compareDates(course.createdAt) == 'course__new' ? 'New' : null}}</p>
              </div>
            </div>
          </a>
        </div>

        <div class="more__courses flex justify-center mt-10">
          <button @click="prePage" class="btn-showMore" >Trước</button>
          <button @click="nextPage" class="btn-collapse ml-3">Sau</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../../assets/styles/course.scss";
import { ref } from "vue";
import {parseISO} from 'date-fns';

export default {
  props: ["courses", "totalPage", "search"],
  setup(props, { emit }) {
   // Lấy giá trị courses từ props
    const page = ref(0);
    const currentDate = new Date();
    const monthCurrent = currentDate.getMonth() + 1;
    const yearCurrent = currentDate.getFullYear();

    const compareDates = (date) => {
      const parsedDate = parseISO(date);
      const monthDate = parsedDate.getMonth() + 1;
      const yearDate = parsedDate.getFullYear();

      if(monthDate == monthCurrent && yearDate == yearCurrent)
      {
        return "course__new";
      }
    }

    const prePage = () => {
      if(page.value > 0)
      {
        page.value--;

        emit("pageChanged", page.value);
      }

      // Phát ra sự kiện để thông báo giá trị mới của page cho component cha
    }

    const nextPage = () => {
      if(page.value < props.totalPage - 1)
      {
        page.value++;

        emit("pageChanged", page.value);
      } 
    }

    //search course by title
    const keyword = ref('');

    const searchCourse = () => {
      emit("search", keyword.value);
    }

    const priceFrom = ref(0);
    const priceTo = ref(0);

    const selectedPriceRange = (event) => {
      priceFrom.value = event.target.getAttribute('data-price_from');
      priceTo.value = event.target.getAttribute('value')

      emit("priceFrom", priceFrom.value);
      emit("priceTo", priceTo.value);
    }
    return {
      page,
      keyword,
      selectedPriceRange,
      prePage,
      nextPage,
      searchCourse,
      compareDates
    };
  },

  data() {
    return {
    };
  },
  methods: {

  },
  watch: {},
  name: "App",
  components: {},
};
</script>
