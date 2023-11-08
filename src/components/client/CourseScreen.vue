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
            <input type="text" class="search__name" placeholder="Tìm tên khóa học...">
          </div>

          <div class="filter filter__price">
            <h2 class="font-semibold">Khoảng giá</h2>
            <div>
              <label class="flex cursor-pointer" for="cb__price--1">
                <input type="checkbox" id="cb__price--1" class="cb__price mr-2" data-price_from="0" value="500000">
                Từ 0 đến 500k
              </label>

              <label class="flex cursor-pointer" for="cb__price--2">
                <input type="checkbox" id="cb__price--2" class="cb__price mr-2" data-price_from="500001" value="1000000">
                Từ 500k đến 1 triệu
              </label>

              <label class="flex cursor-pointer" for="cb__price--3">
                <input type="checkbox" id="cb__price--3" class="cb__price mr-2" data-price_from="1000000" value="3000000">
                Từ 1 triệu đến 3 triệu
              </label>

              <label class="flex cursor-pointer" for="cb__price--4">
                <input type="checkbox" id="cb__price--4" class="cb__price mr-2" data-price_from="3000000" value="5000000">
                Từ 3 triệu đến 5 triệu
              </label>

              <label class="flex cursor-pointer" for="cb__price--5">
                <input type="checkbox" id="cb__price--5" class="cb__price mr-2" data-price_from="5000000"
                  value="9999999999">
                Trên 5 triệu
              </label>
            </div>
          </div>

          <div class="filter filter__time">
            <h2 class="font-semibold">Thời gian khóa học</h2>
            <div>
              <label class="flex cursor-pointer" for="filter__time--1">
                <input type="checkbox" id="filter__time--1" class="filter__time mr-2" data-price_from="0" value="1">
                Dưới 1 tháng
              </label>

              <label class="flex cursor-pointer" for="filter__time--2">
                <input type="checkbox" id="filter__time--2" class="filter__time mr-2" data-price_from="1" value="2">
                Từ 1 đến 2 tháng
              </label>

              <label class="flex cursor-pointer" for="filter__time--3">
                <input type="checkbox" id="filter__time--3" class="filter__time mr-2" data-price_from="2" value="3">
                Từ 2 đến 3 tháng
              </label>

              <label class="flex cursor-pointer" for="filter__time--4">
                <input type="checkbox" id="filter__time--4" class="filter__time mr-2" data-price_from="3" value="12">
                Trên 3 tháng
              </label>
            </div>

            
          </div>

          <div class="filter filter__education">
            <h2 class="font-semibold">Thời gian khóa học</h2>
            <div>
              <label class="flex cursor-pointer" for="filter__education--1">
                <input type="radio" id="filter__education--1" class="filter__education mr-2" name="rd__education"
                  value="10">
                Lớp 10
              </label>

              <label class="flex cursor-pointer" for="filter__education--2">
                <input type="radio" id="filter__education--2" class="filter__education mr-2" name="rd__education"
                  value="11">
                Lớp 11
              </label>

              <label class="flex cursor-pointer" for="filter__education--3">
                <input type="radio" id="filter__education--3" class="filter__education mr-2" name="rd__education"
                  value="12">
                Lớp 12
              </label>

              <label class="flex cursor-pointer" for="filter__education--4">
                <input type="radio" id="filter__education--4" class="filter__education mr-2" name="rd__education"
                  value="13">
                Đại học
              </label>
            </div>

            
          </div>

          <div class="filter filter__title">
            <h2 class="font-semibold">Thời gian khóa học</h2>
            <div>
              <label class="flex cursor-pointer" for="filter__title--1">
                <input type="radio" id="filter__title--1" class="filter__title mr-2" name="rd__title" value="wordpress">
                Wordpress
              </label>

              <label class="flex cursor-pointer" for="filter__title--2">
                <input type="radio" id="filter__title--2" class="filter__title mr-2" name="rd__title" value="programming">
                Lập trình
              </label>

              <label class="flex cursor-pointer" for="filter__title--3">
                <input type="radio" id="filter__title--3" class="filter__title mr-2" name="rd__title" value="math">
                Môn toán
              </label>

              <label class="flex cursor-pointer" for="filter__title--4">
                <input type="radio" id="filter__title--4" class="filter__title mr-2" name="rd__title" value="literature">
                Môn văn
              </label>

              <label class="flex cursor-pointer" for="filter__title--4">
                <input type="radio" id="filter__title--4" class="filter__title mr-2" name="rd__title" value="english">
                Tiếng Anh
              </label>

              <label class="flex cursor-pointer" for="filter__title--4">
                <input type="radio" id="filter__title--4" class="filter__title mr-2" name="rd__title" value="ads">
                Google Ads
              </label>

              <label class="flex cursor-pointer" for="filter__title--4">
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

                <p class="card__info--right cursor-default text-center font-semibold course__hot">Hot</p>
              </div>
            </div>
          </a>
        </div>

        <div class="more__courses flex justify-center mt-10">
          <button @click="changePage" class="btn-showMore" :class="!isActive.value ? 'active' : 'hidden'">Xem thêm</button>
          <button @click="collapsePage" class="btn-collapse ml-3" :class="isActive.value ? 'active' : 'hidden'">Thu gọn</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../../assets/styles/course.scss";
import { ref } from "vue";

export default {
  props: ["courses", "totalPage"],
  setup(props, { emit }) {
   // Lấy giá trị courses từ props
    const page = ref(0);
    var isActive = ref(false);

    const changePage = () => {

      if(page.value < props.totalPage - 1)
      {
        page.value++;

        emit("pageChanged", page.value);
      }

      if(page.value + 1 == props.totalPage)
      {
        isActive.value = ref(true);
      }

      // Phát ra sự kiện để thông báo giá trị mới của page cho component cha
    }

    const collapsePage = () => {
      if(page.value > 0)
      {
        page.value--

        emit("pageChanged", page.value);
      }
      
      if(page.value == 0)
      {
        isActive.value = ref(false);
      }
    }

    return {
      isActive,
      page,
      changePage,
      collapsePage
    };
  },

  data() {
    return {};
  },
  watch: {},
  name: "App",
  components: {},
};
</script>
