<template lang="">
  <div class="w-full bg-slate-800 h-12 text-gray-100 px-5 flex justify-between items-center">
      <ul class="flex gap-3 text-sm items-center">
        <li><a href="course"><i class="fa-solid fa-chevron-left"></i></a></li>
        <li class=" max-sm:hidden"><a href="" class="text-gray-300 hover:text-white">Khóa học</a></li>
        <li class=" max-sm:hidden"><span class="text-gray-200">|</span></li>
        <li><a href="">Lap trinh javascript</a></li>
      </ul>

      <ul class="flex gap-8 text-sm  max-sm:gap-5">
        <li class="flex gap-3 items-center cursor-default">
          <i class="fa-solid fa-book-open"></i>
          <p>106/204 bài học</p>
        </li>

        <li class="flex gap-3  items-center  text-gray-300 hover:text-white">
          <i class="fa-regular fa-file"></i>
          <a href="">Tài liệu</a>
        </li>

        <li class="flex gap-3  items-center text-gray-300 hover:text-white max-sm:hidden">
          <i class="fa-solid fa-chalkboard-user"></i>
          <a href="">Hướng dẫn</a>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  
}
</script>
