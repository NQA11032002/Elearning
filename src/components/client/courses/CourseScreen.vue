<template>
  <div v-if="courses.data != null" class="flex gap-9 container mt-14 mb-14 max-w-screen-2xl mx-auto">
    <div class="sidebar w-1/5 bg-white  rounded-lg shadow-md">
      <div class="filters p-5 h-5/6">
        <div class="filter__container">
          <h1 class="title text-center font-semibold text-xl">KHÓA HỌC</h1>

          <div class="filter filter__search">
            <p>
              Tìm thấy : <b> {{ courses.data.length }} khóa học</b>
              {{ keyword != "" ? "theo" : "" }} <b>{{ keyword }}</b>
            </p>
            <input type="text" class="search__name" @change="searchCourse" v-model="keyword"
              placeholder="Tìm tên khóa học..." />
          </div>

          <div class="filter filter__price">
            <h2 class="font-semibold">Khoảng giá</h2>
            <div>
              <label class="flex cursor-pointer filter--text" for="cb__price--1">
                <input type="radio" id="cb__price--1" name="rd_price" class="cb__price mr-2"
                  @change="selectedPriceRange($event)" data-price_from="0" value="500000" />
                Từ 0 đến 500k
              </label>

              <label class="flex cursor-pointer filter--text" for="cb__price--2">
                <input type="radio" id="cb__price--2" name="rd_price" class="cb__price mr-2"
                  @change="selectedPriceRange($event)" data-price_from="500001" value="1000000" />
                Từ 500k đến 1 triệu
              </label>

              <label class="flex cursor-pointer filter--text" for="cb__price--3">
                <input type="radio" id="cb__price--3" name="rd_price" class="cb__price mr-2"
                  @change="selectedPriceRange($event)" data-price_from="1000000" value="3000000" />
                Từ 1 triệu đến 3 triệu
              </label>

              <label class="flex cursor-pointer filter--text" for="cb__price--4">
                <input type="radio" id="cb__price--4" name="rd_price" class="cb__price mr-2"
                  @change="selectedPriceRange($event)" data-price_from="3000000" value="5000000" />
                Từ 3 triệu đến 5 triệu
              </label>

              <label class="flex cursor-pointer filter--text" for="cb__price--5">
                <input type="radio" id="cb__price--5" name="rd_price" class="cb__price mr-2"
                  @change="selectedPriceRange($event)" data-price_from="5000000" value="9999999999" />
                Trên 5 triệu
              </label>
            </div>
          </div>

          <div class="filter filter__education">
            <h2 class="font-semibold">Thời gian khóa học</h2>
            <div>
              <label class="flex cursor-pointer filter--text" for="filter__education--1">
                <input type="radio" id="filter__education--1" class="filter__education mr-2"
                  @change="selectedEducateRange($event)" name="rd__education" value="1" />
                Lớp 10
              </label>

              <label class="flex cursor-pointer filter--text" for="filter__education--2">
                <input type="radio" id="filter__education--2" class="filter__education mr-2"
                  @change="selectedEducateRange($event)" name="rd__education" value="2" />
                Lớp 11
              </label>

              <label class="flex cursor-pointer filter--text" for="filter__education--3">
                <input type="radio" id="filter__education--3" class="filter__education mr-2"
                  @change="selectedEducateRange($event)" name="rd__education" value="3" />
                Lớp 12
              </label>

              <label class="flex cursor-pointer filter--text" for="filter__education--4">
                <input type="radio" id="filter__education--4" class="filter__education mr-2"
                  @change="selectedEducateRange($event)" name="rd__education" value="4" />
                Đại học
              </label>
            </div>
          </div>

          <div class="filter filter__title">
            <h2 class="font-semibold">Khóa học</h2>
            <div>
              <label class="flex cursor-pointer filter--text" for="filter__title--1">
                <input type="radio" id="filter__title--1" class="filter__title mr-2"
                  @change="selectedCategoryRange($event)" name="rd__title" value="1" />
                Frontend
              </label>

              <label class="flex cursor-pointer filter--text" for="filter__title--2">
                <input type="radio" id="filter__title--2" class="filter__title mr-2"
                  @change="selectedCategoryRange($event)" name="rd__title" value="2" />
                Backend
              </label>

              <label class="flex cursor-pointer filter--text" for="filter__title--3">
                <input type="radio" id="filter__title--3" class="filter__title mr-2"
                  @change="selectedCategoryRange($event)" name="rd__title" value="3" />
                Google Ads
              </label>

              <label class="flex cursor-pointer filter--text" for="filter__title--4">
                <input type="radio" id="filter__title--4" class="filter__title mr-2"
                  @change="selectedCategoryRange($event)" name="rd__title" value="4" />
                SEO
              </label>

              <label class="flex cursor-pointer filter--text" for="filter__title--5">
                <input type="radio" id="filter__title--5" class="filter__title mr-2"
                  @change="selectedCategoryRange($event)" name="rd__title" value="5" />
                Data Science
              </label>

              <label class="flex cursor-pointer filter--text" for="filter__title--6">
                <input type="radio" id="filter__title--6" class="filter__title mr-2"
                  @change="selectedCategoryRange($event)" name="rd__title" value="6" />
                English
              </label>

              <label class="flex cursor-pointer filter--text" for="filter__title--7">
                <input type="radio" id="filter__title--7" class="filter__title mr-2"
                  @change="selectedCategoryRange($event)" name="rd__title" value="7" />
                Mathematics
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-right w-4/5">

      <div class="courses p-5">
        <!-- <label class="filters flex justify-end font-semibold cursor-pointer">
          <i class="fa-solid fa-bars pr-2"></i>
          Bộ lọc
        </label> -->

        <div class="cards flex flex-wrap gap-8 mt-5 ml-1">
          <a :href="'/course/' + course.id"
            class="course border rounded-md hover:shadow-lg transition-all  flex flex-col w-1/1 gap-4"
            v-for="course in courses.data" :key="course.id">
            <img class="image object-cover flex-shrink-0 h-40 w-course" :src="course.courseImages.length > 0
              ? course.courseImages[0].urlImage
              : ''
              " alt="" />

            <div class="card p-3 flex flex-col">
              <p class="title font-semibold flex-shrink-0 mt-auto">
                {{ course.title }}
              </p>

              <div class="card__info flex justify-between flex-1">
                <div class="card__info--left flex">
                  <img class="avatar flex-shrink-0" src="../../../assets/images/client/avatars/1.png" alt="" />
                  <p class=" text-sm font-medium flex-1 ml-2">{{ course.fullName }}</p>
                </div>

                <p class="card__info--right flex-shrink-0 text-sm text-content cursor-default text-center ">
                  {{
                    course.createdAt }}
                </p>
              </div>
            </div>
          </a>
        </div>

        <div class="more__courses flex justify-center mt-10">
          <button @click="prePage" class="btn-showMore">Trước</button>
          <button @click="nextPage" class="btn-collapse ml-3">Sau</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../../../assets/styles/course.scss";
import axios from "axios";
import { findApiByName } from "../../../assets/js/apiUtil.js";
import { getUserByID } from "../../../assets/js/custom.js";
import { exceptionHandling } from "../../../assets/js/auth.js";

export default {
  props: [],
  mounted() {
    
    this.getAllCourses();

  },
  setup() {
    exceptionHandling();
  },

  data() {
    return {
      courses: [],
      page: 0,
      records: 6,
      keyword: null,
      priceFrom: null,
      priceTo: null,
      education: null,
      category: null
    };
  },
  methods: {
    //get all courses
    async getAllCourses() {
      //get url API
      const apiObject = findApiByName("course", "common").url;
      const res = await axios.get(apiObject, {
        params: {
          page: this.page,
          records: this.records,
          search: this.keyword,
          priceFrom: this.priceFrom,
          priceTo: this.priceTo,
          education: this.education,
          category: this.category,
        },
      });

      if (res.status == 200) {
        this.courses = res.data;
        //insert fullName into each course
        for (const course of this.courses.data) {
          let customer = await getUserByID(course.userID);
          course.fullName = customer.fullName

        }
      }
    },

    //redirect to previous page
    prePage() {
      if (this.page > 0) {
        this.page--;
        this.getAllCourses();
      }
    },

    //redirect to next page
    nextPage() {
      if (this.page < this.courses.totalPage - 1) {
        this.page++;

        this.getAllCourses();
      }
    },

    //search course by title
    searchCourse() {
      this.getAllCourses();
    },

    //select price course
    selectedPriceRange(event) {
      this.priceFrom = event.target.getAttribute("data-price_from");
      this.priceTo = event.target.getAttribute("value");

      this.getAllCourses();
    },

    //select education course
    selectedEducateRange(event) {
      this.education = event.target.getAttribute("value");
      this.getAllCourses();
    },

    //select category course
    selectedCategoryRange(event) {
      this.category = event.target.getAttribute("value");

      this.getAllCourses();
    },
  },
  watch: {},
  name: "App",
  components: {},
};
</script>
