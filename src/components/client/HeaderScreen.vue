<template>
  <header class="bg-white z-10 fixed top-0 flex items-center justify-between p-5 h-16 shadow-md shadow-gray-300 w-full left-0 right-0">
    <div class="flex items-center">
      <div class="header__logo">
        <img src="../../assets/images/client/logo.png" alt="">
      </div>
        <form action="" class="relative border rounded-md px-2 flex items-center">
          <input type="text" placeholder="Tìm khóa học, chuyên gia..." class="left-0 outline-none h-full py-2 text-sm w-56">
          <label for="search__submit" class="absolute right-3 cursor-pointer">
            <i class="fa-solid fa-magnifying-glass text-gray-400"></i>
          </label>
          <input type="submit" id="search__submit" hidden value="tìm">
        </form>
    </div>

    <div class="header__middle">
      <ul class="flex justify-between">
        <li><a href="/home" class="navigate__link mr-8">Trang chủ</a></li>
        <li><a href="/training" class="navigate__link mr-8">Đào tạo</a></li>
        <li><a href="/course" class="navigate__link mr-8">Khóa học</a></li>
        <li><a href="/support" class="navigate__link mr-8">Hỗ trợ</a></li>
      </ul>
    </div>

    <div class="flex items-center gap-4">
        <a href="/my-course" class="font-medium border border-blue-900 text-blue-900  py-1 px-4 rounded-md transition-all hover:bg-blue-900 hover:text-white">Học tập</a>
        <img class="w-8 h-8 rounded-full cursor-pointer" src="../../assets/images/client/avatars/avatar.png" alt="">
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderScreen'
}
</script>
