<template>
  <header
    class="bg-white z-10 fixed top-0 flex items-center justify-between p-5 h-16 shadow-md shadow-gray-300 w-full left-0 right-0">
    <div class="flex items-center">
      <div class="header__logo">
        <img src="../../../assets/images/client/logo.png" alt="">
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

    <div class="">
      <div v-if="isAuthenticated" class="">
        <div class="flex items-center gap-4 ">
          <a href="/my-course"
            class="font-medium border border-blue-900 text-blue-900  py-1 px-4 rounded-md transition-all hover:bg-blue-900 hover:text-white">Học
            tập</a>
          <div class="relative">
            <img @click="toggleDropdown" class="w-8 h-8 rounded-full cursor-pointer"
              src="../../../assets/images/client/avatars/avatar.png" alt="">
            <ul v-if="showDropdown" class="absolute right-0 mt-2 bg-white border rounded-md shadow-md w-48 p-4">
              <li class="border-b border-gray-300 mb-2"><a class="p-2" href="/profile/1">Thông tin tài khoản</a></li>
              <li class="border-b border-gray-300 mb-2"><a class="p-2" href="/changepass/1">Đổi mật khẩu</a></li>
              <li><a class="p-2" @click="logout" href="#">Đăng xuất</a></li>
            </ul>
          </div>
        </div>

      </div>

      <div v-else class="flex items-center gap-4">
        <a href="/login"
          class="font-medium border border-blue-900 text-blue-900  py-1 px-4 rounded-md transition-all hover:bg-blue-900 hover:text-white">Đăng
          nhập</a>
        <a href="/register"
          class="font-medium border border-blue-900 text-blue-900  py-1 px-4 rounded-md transition-all hover:bg-blue-900 hover:text-white">Đăng
          ký</a>
      </div>
    </div>
  </header>
</template>

<script>
import Cookies from 'js-cookie';
import axios from 'axios';
export default {

  name: 'HeaderScreen',
  data() {
    return {
      isAuthenticated: false,
      showDropdown: false,
    };
  },
  mounted() {
    this.checkAuthentication();
  },
  methods: {
    checkAuthentication() {
      const token = Cookies.get("auth"); // Thay "auth" bằng tên của cookie lưu token

      if (token) {
        // Nếu có token, tức là đã đăng nhập
        this.isAuthenticated = true;
      } else {
        // Nếu không có token, tức là chưa đăng nhập
        this.isAuthenticated = false;
      }
    },

    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },

    async logout() {
      try {
        const token = Cookies.get("auth");
        const formData = new FormData();
        formData.append('token', token);

        const response = await axios.post('http://localhost:8086/auth/logout', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log(response);
        this.deleteCookie("auth");
        localStorage.removeItem("idUser");

        this.$router.push('/login'); // Chuyển hướng đến trang home

      } catch (error) {
        console.error('Get infor failed', error.response.data);
      }
    },

    deleteCookie(name) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
  },


}
</script>
