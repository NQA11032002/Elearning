<template>
  <div class="w-1/5 h-full  bg-white rounded-xl max-sm:w-full shadow-md">
    <div class="grid grid-cols-gridTable justify-center w-full py-4 border-b border-gray-100">
      <div class="row-start-1 row-end-3">
        <img class="w-11 h-11 rounded-full object-cover" src="../../../assets/images/client/avatars/1.png" alt="">
      </div>
      <div>
        <span class="font-semibold px-2">{{ user.fullName }}</span>
      </div>
      <div>
        <span class="font-normal px-2 text-gray-500 text-sm">{{ user.role }}</span>
      </div>
    </div>
    <div class="flex flex-col items-left ml-6">
      <div class="flex items-left py-4">
        <i class="fa-solid fa-person text-xl mr-3 text-blue-900"></i>
        <a class="text-blue-900 cursor-pointer items-center justify-center flex text-center font-medium"
          href="/profile">Thông tin người dùng</a>
      </div>
      <div class="flex items-left py-4">
        <i class="fa-solid fa-book text-xl mr-3 text-blue-900"></i>
        <a class="text-blue-900 cursor-pointer items-center justify-center flex text-center font-medium"
          href="/registered-course">Khóa học đăng ký</a>
      </div>
      <div class="flex items-left py-4">
        <i class="fa-solid fa-headphones-simple text-xl mr-3 text-blue-900"></i>
        <a class="text-blue-900 cursor-pointer items-center justify-center flex text-center font-medium" href="">Hỗ
          trợ</a>
      </div>
      <div class="flex items-left py-4">
        <i class="fa-solid fa-gift text-xl mr-3 text-blue-900"></i>
        <a class="text-blue-900 cursor-pointer items-center justify-center flex text-center font-medium" href="/gift-code">Kích hoạt
          mã</a>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import Cookies from 'js-cookie';

export default {
  data() {
    return {
      user: {
        fullName: '',
        role: '',
        profilePictureURL: ''
      }

    };
  },
  mounted() {
    // Gọi hàm loadInfor() khi component được mount
    this.loadInfor();
  },
  methods: {
    async loadInfor() {
      try {
        const queryParams = localStorage.getItem("idUser");
        if (!queryParams) {
          console.error('idUser is null or undefined');
          return;
        }
        const apiUrl = `http://localhost:8086/api/customer/${queryParams}`;
        const token = Cookies.get("auth");
        const response = await axios.get(apiUrl, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        this.user.fullName = response.data.data.fullName;
        this.user.role = response.data.data.user.role;
        this.user.profilePictureURL = response.data.data.profilePictureURL;

        if (this.user.role === "USER") {
          this.user.role = "Học viên"
        }

      } catch (error) {
        console.error('Get infor failed', error.response.data);
      }
    }
  }
};
</script>
