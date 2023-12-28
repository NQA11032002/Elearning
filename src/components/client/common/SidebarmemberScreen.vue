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
        <i class="fa-solid fa-headphones-simple text-xl mr-3 text-blue-900"></i>
        <a class="text-blue-900 cursor-pointer items-center justify-center flex text-center font-medium" href="/support">Hỗ
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
import { loadInfor } from "../../../assets/js/custom.js";
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
    loadInfor().then((data) => {
      this.user.fullName = data.fullName;
      this.user.profilePictureURL = data.profilePictureURL;
    });
    if(Cookies.get("role") == "USER"){
      this.user.role = "Học viên";

    }

  },
};
</script>
