<template>
  <div class="w-2/3 m-auto max-sm:w-full max-sm:px-5 sm:px-3 lg:px-0 mt-14" v-if="user != null">
    <div class="w-full flex my-5 max-sm:flex-col">
      <PopupConfirm v-if="user.isChangeInfor" :contents="contents"></PopupConfirm>
      <sidebarmember-screen></sidebarmember-screen>
      
      <div class="ml-6 w-4/5 max-sm:mt-4 bg-white max-sm:w-full max-sm:ml-0 shadow-md">
        <div class="p-4">
          <p class="text-xl font-semibold">Thông cá nhân</p>
          <span class="text-gray-500 text-sm">Cập nhật thông tin đầy đủ để bảo mật</span>
        </div>
        <form @submit.prevent="updateInformation()">
          <div
          class="w-full rounded-xl flex justify-between py-12 px-40 max-sm:px-0 mb border-b border-gray-100 max-sm:flex-col max-sm:py-6">
          <div class="max-sm:w-full flex max-sm:justify-center max-sm:mb-4">
            <img class="w-40 h-40 rounded-full object-cover max-sm:w-28 max-sm:h-28"
              src="../../../assets/images/client/avatars/1.png" alt="">
          </div>
          <div class="flex flex-col w-80 max-sm:w-full max-sm:px-2 max-sm:flex max-sm:justify-center">
            <input v-model="user.fullName"  class="outline-none border border-blue-900 mb-4 p-2 rounded-md" type="text"
              placeholder="Họ và tên">
            <input v-model="user.email" class="outline-none border border-blue-900 mb-4 p-2 rounded-md" type="email"
              placeholder="Email">
            <input v-model="user.phone" class="outline-none border border-blue-900 mb-4 p-2 rounded-md" type="text"
              placeholder="Số điện thoại" maxlength="11">
            <button type="submit" class="bg-blue-900 text-white p-2 rounded-md">Lưu thông tin</button>
          </div>
        </div>
        </form>
        <div class="p-4">
          <span class="font-semibold text-xl">Các thông tin khác</span>
          <div class="flex justify-between mt-4 max-sm:flex-col">
            <div
              class="flex justify-between text-center w-2/5 p-3 bg-blue-100 ml-4 rounded cursor-pointer max-sm:ml-0 max-sm:w-full max-sm:mb-4">
              <a href="/changepass/1"><span class="text-blue-900 font-medium flex items-center">Đổi mật khẩu</span></a>
              <i class="fa-solid fa-chevron-right flex items-center"></i>
            </div>
            <div class="flex justify-between w-2/5 p-3 bg-blue-100 mr-4 rounded cursor-pointer max-sm:mr-0 max-sm:w-full">
              <a href="/registered-course" class="text-blue-900 font-medium flex items-center">Khóa học đã đăng ký</a>
              <i class="fa-solid fa-chevron-right flex items-center"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>
<script>
import SidebarmemberScreen from '../common/SidebarmemberScreen.vue';
import { loadInfor } from "../../../assets/js/custom.js";
import { updateInfor } from "../../../assets/js/custom.js";
import PopupConfirm from "../common/PopupConfirm.vue";

export default {
  components: {
    SidebarmemberScreen,
    PopupConfirm
  },
  data() {
    return {
      user: {
        fullName: '',
        email: '',
        phone: '',
        isChangeInfor: false
      },
      contents: {
        title: "Thay đổi thông tin thất bại",
        status: false,
        color: "red-600",
        icon: "fa-solid fa-circle-exclamation"
      },

    };
  },
  mounted() {
    loadInfor().then((data) => {
      this.user.fullName = data.fullName;
      this.user.email = data.email;
      this.user.phone = data.phone;
    });

  },
  methods:{
    updateInformation(){
      console.log(this.user.email);
      updateInfor(this.user.fullName, this.user.email, this.user.phone).then((data) => {
        if(data.status === 'OK'){
          this.user.isChangeInfor = true;
          this.contents.title = "Thay đổi thông tin thành công";
          this.contents.status = true;
          this.contents.color = "green-500";
          this.contents.icon = "fa-regular fa-circle-check";
        }else{
          this.user.isChangeInfor = false;
        }
      })
    }
  }

  
};
</script>