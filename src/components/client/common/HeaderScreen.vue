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
          <div class="">
            <a v-if="role === 'USER'" href="/my-course"
              class="font-medium border border-blue-900 text-blue-900  py-1 px-4 rounded-md transition-all hover:bg-blue-900 hover:text-white">Học
              tập</a>
            <a v-if="role === 'EXPERT'" href="/my-course"
              class="font-medium border border-blue-900 text-blue-900  py-1 px-4 rounded-md transition-all hover:bg-blue-900 hover:text-white">Quản
              lý</a>
          </div>
          <div class="relative">
            <img @click="toggleDropdown" class="w-8 h-8 rounded-full cursor-pointer"
              src="../../../assets/images/client/avatars/avatar.png" alt="">
            <ul v-if="showDropdown" class="absolute right-0 mt-2 bg-white border rounded-md shadow-md w-48 p-4">
              <li class="border-b border-gray-300 mb-2"><a class="p-2" :href="role === 'USER' ? '/profile' : (role === 'EXPERT' ? '/profile-expert' : '#')">Thông tin tài khoản</a></li>
              <li class="border-b border-gray-300 mb-2"><a class="p-2" href="/changepass">Đổi mật khẩu</a></li>
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
import { findApiByName } from '../../../assets/js/apiUtil.js';
// import App from '../../../App.vue';

export default {
  name: 'HeaderScreen',
  data() {
    return {
      isAuthenticated: false,
      showDropdown: false,
      role: ''
    };
  },

  
  mounted() {

    this.checkCurrentRoute();
  },
  watch: {
    $route() {
      // Gọi phương thức kiểm tra khi có sự thay đổi trong route
      this.checkCurrentRoute();
      this.role = Cookies.get("role");
      this.showDropdown = false;
    },
  },
  
  methods: {
    checkCurrentRoute() {
      const currentPath = this.$route.path;
      const token = Cookies.get("auth");
      console.log(currentPath);
      // Kiểm tra nếu đường dẫn là '/home'
      if (currentPath !== '/login' && token) {
        this.isAuthenticated = true;
        // Thực hiện các hành động bạn muốn khi ở trang Home
      }
      console.log(this.isAuthenticated);
    },

    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },


    async logout() {
      try { 
        const apiObject = findApiByName("auth", "logout").url;
        const token = Cookies.get("auth");
        const formData = new FormData();
        formData.append('token', token);
        await axios.post(apiObject, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }).then((res) => {
          if(res.status === 200) {
            this.deleteCookie("auth");
            this.deleteCookie("userID");
            this.deleteCookie("role");
            this.isAuthenticated = false;
            this.$router.push('/login');
          }
        })
      } catch (error) {
        console.error('Logout fail', error);
      }
    },

    deleteCookie(name) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    },
  },


}
</script>
