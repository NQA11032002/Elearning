<template>
  <div>
    <div class="relative bg-slate-700 text-white mt-8 h-56 max-sm:w-full  max-sm:px-5 max-sm:h-full max-sm:py-5">
      <div
        class=" w-2/3 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex  gap-8 mx-auto max-sm:w-full items-center  max-sm:flex-col">
        <div class="">
          <img src="../../../assets/images/client/avatars/1.png"
            class="rounded-full mx-auto h-32 w-32 max-sm:w-28 max-sm:h-28 object-cover" alt="">
        </div>

        <div class="flex flex-col gap-5">
          <h1 class="text-xl font-black">{{ customer.fullName }} <i class="fa-solid fa-user-tie pl-2"></i></h1>
          <div class="flex flex-wrap">
            <p class="w-1/2  truncate"><i class="fa-solid fa-crown pr-3"></i>Thạc sỹ tại Mỹ Tho</p>
            <p class="w-1/2 "><i class="fa-solid fa-phone pr-3"></i> {{ customer.phone }}</p>
            <p class="w-1/2 mt-3 "><i class="fa-regular fa-envelope pr-3"></i> {{ customer.email }}</p>
            <p class="w-1/2 mt-3  truncate"><i class="fa-solid fa-map-location-dot pr-3"></i> {{ customer.city }} </p>
          </div>
        </div>
      </div>
    </div>

    <div class=" mt-5 flex w-3/4 mx-auto gap-8 max-sm:flex-col max-sm:w-full max-sm:px-5">
      <div class="w-1/4 bg-white  rounded-sm p-5 h-60 max-sm:w-full">
        <p class="text-gray-500 text-sm">Blogger tại Phungthaihoc.com. 10 năm kinh nghiệm Content Copywriting.</p>
        <div class="flex flex-col gap-3 mt-3 border-t border-t-gray-300 pt-3">
          <p class="text-slate-600 cursor-pointer font-black hover:opacity-70"><i
              class="fa-brands fa-facebook pr-3"></i>https://www.facebook.com/Bianh0/</p>
          <p class="text-slate-600 cursor-pointer font-black hover:opacity-70"><i
              class="fa-brands fa-twitter pr-3"></i>https://www.facebook.com/Bianh0/</p>
          <p class="text-slate-600 cursor-pointer font-black hover:opacity-70"><i
              class="fa-brands fa-youtube pr-3"></i>https://www.facebook.com/Bianh0/</p>
          <p class="text-slate-600 cursor-pointer font-black hover:opacity-70"><i
              class="fa-brands fa-github pr-3"></i>https://www.facebook.com/Bianh0/</p>
        </div>
      </div>

      <div class="flex-1 flex flex-col gap-5">
        <div class="flex justify-between bg-white  rounded-sm p-5 max-sm:flex-col">
          <h1 class="font-black"><i class="fa-solid fa-book-open pr-3"></i>Tổng số khóa học: 5</h1>
          <h1 class="font-black"><i class="fa-solid fa-graduation-cap pr-3"></i>1636 thành viên đang theo học</h1>
        </div>

        <div class="h-screen flex flex-col gap-7 rounded-sm flex-wrap">
          <div v-for="course in courses" :key="course.id"
            class="w-full h-48 flex gap-3 bg-white  max-sm:flex-col max-sm:h-96">
            <img class="h-full w-1/3 object-cover rounded-md max-sm:w-full max-sm:h-44"
              :src="course.courseImages.length > 0 ? course.courseImages[0].urlImage : ''" alt="">
            <div class="flex flex-col gap-2 p-3 flex-1">
              <h1 class="font-black">{{ course.title }}</h1>
              <p class="text-gray-500 text-sm"><i class="fa-regular fa-clock pr-2"></i>{{ course.createdAt }}</p>
              <p class="text-gray-700 text-sm truncate">{{ course.description }}</p>
              <div class="flex items-center gap-3">
                <p class="text-red-700 font-semibold text-lg">{{ formatPrice(course.price - (course.price *
                  (course.reduce / 100))) }}đ</p>
                <p class="text-gray-500 line-through">{{ formatPrice(course.price) }}đ</p>
              </div>

              <div class="flex gap-3">
                <a :href="'/payment/' + course.id"
                  class="bg-slate-700 hover:opacity-70 text-white transition-all rounded-sm py-2 px-5 text-sm font-medium">ĐĂNG
                  KÝ</a>
                <a :href="'/course/' + course.id"
                  class="border border-slate-700 transition-all hover:bg-slate-700 hover:text-white text-slate-700 rounded-sm py-2 px-5 text-sm font-medium">CHI
                  TIẾT</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { loadInfor, getAllCourserByUserID } from "../../../assets/js/custom.js";

export default ({
  mounted() {
    loadInfor().then((res) => {
      this.customer.city = res.city;
      this.customer.email = res.email;
      this.customer.fullName = res.fullName;
      this.customer.userID = res.userID;
      this.customer.phone = res.phone;
      this.customer.profilePictureURL = res.city;

      getAllCourserByUserID(this.customer.userID).then((res) => {
        this.courses = res;

        this.courses.forEach(course => {
          this.courses.push(course)
        })
      })
    });


  },
  setup() {

  },
  methods: {
    formatPrice(price) {
      return price.toLocaleString("vi-VN");
    }
  },
  data() {
    return {
      customer: {
        city: null,
        email: null,
        fullName: null,
        userID: null,
        phone: null,
        profilePictureURL: null,
      },
      courses: []
    }
  }
})
</script>
