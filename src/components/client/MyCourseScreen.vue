<template>
  <div class="w-3/4 mx-auto">
    <PopupScreen></PopupScreen>
    <div class="py-10">
      <div class="border-b border-b-gray-200 pb-5">
        <h1 class="text-xl font-semibold justify-between flex">Khóa học của tôi <p class="text-gray-500 text-lg text-medium">Số lượng: 5</p></h1>
        <p class="text-sm text-gray-500 pt-3">Bạn chưa hoàn thành khóa học nào.</p>
      </div>
  
      <div class="flex flex-wrap pt-5 gap-6 w-full">
          <a href="" class="flex flex-col gap-3 lg:w-course overflow-hidden hover:opacity-80 hover:shadow-lg rounded-lg transition-all">
            <div>
              <img class="flex-shrink-0 h-44 w-full rounded-lg" src="https://files.fullstack.edu.vn/f8-prod/courses/1.png" alt="">
            </div>
            <div class="flex-1 p-3">
              <p class="font-medium text-sm truncate">Lập Trình JavaScript Cơ Bản</p>
              <p class="flex justify-between text-gray-500 text-sm pt-2">Vũ Thanh Thiên <label >22-03-2022</label></p>
            </div>
          </a>  

          <a href="" class="flex flex-col gap-3 lg:w-course  overflow-hidden hover:opacity-80 hover:shadow-lg rounded-lg transition-all">
            <div>
              <img class="flex-shrink-0 h-44 rounded-lg" src="https://files.fullstack.edu.vn/f8-prod/courses/1.png" alt="">
            </div>
            <div class="flex-1 p-3">
              <p class="font-medium text-sm truncate">Lập Trình JavaScript Cơ Bản</p>
              <p class="flex justify-between text-gray-500 text-sm pt-2">Vũ Thanh Thiên <label >22-03-2022</label></p>
            </div>
          </a>  

          <a href="" class="flex flex-col gap-6 overflow-hidden max-sm:w-full w-52 max-sm:py-4 justify-center items-center rounded-lg transition-all hover:outline-slate-700 outline-2 outline-gray-300 outline-dashed">
            <i class="fa-solid fa-circle-plus text-2xl text-gray-400 "></i>
            <button class="border-slate-700 rounded-lg border py-2 w-32 text-sm text-gray-400">Thêm khóa học</button>
          </a>  
      </div>
    </div>

  </div>
</template>

<script>
  import PopupScreen from "./common/PopupScreen.vue";

export default{
  components: {
    PopupScreen
  }
}
</script>
