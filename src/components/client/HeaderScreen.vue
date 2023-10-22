<template>
  <header class="header flex justify-between m-6">
    <div class="header__left flex">
      <div class="header__logo">
        <img src="../../assets/images/client/logo.png" alt="">
      </div>
      <div class="header__search">
        <form action="" class="relative">
          <input type="text" placeholder="Tìm khóa học, chuyên gia..." class="header__search--keyword left-0 pl-3 outline-none">
          <label for="search__submit" class="header__search--submit absolute right-3">
            <i class="fa-solid fa-magnifying-glass"></i>
          </label>
          <input type="submit" id="search__submit" hidden value="tìm">
        </form>
      </div>
    </div>

    <div class="header__middle">
      <ul class="flex justify-between">
        <li><a href="" class="navigate__link mr-8">Trang chủ</a></li>
        <li><a href="" class="navigate__link mr-8">Đào tạo</a></li>
        <li><a href="" class="navigate__link mr-8">Khóa học</a></li>
        <li><a href="" class="navigate__link mr-8">Hỗ trợ</a></li>
      </ul>
    </div>

    <div class="header__right flex">
      <div class="mr-5">
        <a href="" class="navigate__link navigate__link--learning">Học tập</a>
      </div>
      <div class="header__user">
          <img src="../../assets/images/client/avatars/avatar.png" alt="">
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderScreen'
}
</script>
