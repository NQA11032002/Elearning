<template>
  <div class="h-screen">
    <header>
      <HeaderLesson></HeaderLesson>
    </header>

    <div class="flex gap-4 mx-auto mt-5 h-screen max-sm:flex-col max-sm:mt-0">
      <div class="flex flex-col md:h-2/4 lg:w-3/4 pl-5 max-sm:w-full max-sm:pl-0">
        <div class=" bg-gray-300  flex-shrink-0">
          <iframe class="w-full lg:h-lesson md:h-96 max-sm:h-64" src="https://www.youtube.com/embed/GcZSJqHpUpI"
            allowfullscreen></iframe>
        </div>

        <div class="flex  flex-col gap-5 flex-shrink-0 flex-1 mt-5 max-sm:px-5">
          <div>
            <h1 class="text-xl font-semibold">My some() method</h1>
            <p class="text-sm text-gray-400 pt-3">Cập nhật tháng 2 năm 2022</p>
          </div>

          <div class="text-sm text-gray-500 flex flex-col gap-3">
            <p>Tham gia nhóm Học lập trình tại <a href="" class="text-orange-600 font-semibold">Elearning</a> trên
              Facebook để cùng nhau trao đổi trong quá trình học tập</p>
            <p>Các bạn subscribe kênh Youtube <a href="" class="text-orange-600 font-semibold">Elearning</a> để nhận thông
              báo khi có các bài học mới nhé</p>
          </div>
        </div>
      </div>

      <div class="lg:w-1/4 md:w-2/4 pr-5 h-screen max-sm:w-full max-sm:pr-0">
        <SidebarLesson></SidebarLesson>
      </div>
    </div>

    <div>
      <FooterLesson></FooterLesson>
    </div>
  </div>
</template>

<script src="">
import HeaderLesson from "./HeaderLesson.vue";
import SidebarLesson from "./SidebarLesson.vue";
import FooterLesson from "./FooterLesson.vue";

export default {
  components: {
    HeaderLesson,
    SidebarLesson,
    FooterLesson
  }
}
</script>
