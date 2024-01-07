<template>
    <div class="w-2/3 m-auto max-sm:w-full max-sm:px-5 sm:px-3 lg:px-0 mt-14">
        <div class="w-full flex my-5 max-sm:flex-col">
            <sidebarmember-screen></sidebarmember-screen>
            <div class="ml-6 w-4/5 max-sm:mt-4 bg-white max-sm:w-full max-sm:ml-0 shadow-md">
                <div class="p-4">
                    <p class="text-xl font-semibold">Đổi mật khẩu</p>
                    <span class="text-gray-500 text-sm">Cập nhật mật khẩu</span>
                </div>
                <div class="w-full flex justify-center rounded-xl py-12 px-40 max-sm:px-0 mb border-b border-gray-100 max-sm:flex-col max-sm:py-6">
                    <form @submit.prevent="changePass">
                        <div class="flex flex-col w-80 max-sm:w-full max-sm:px-2 max-sm:flex max-sm:justify-center">
                            <span  class="font-semibold">Mật khẩu cũ</span>
                            <input v-model="user.currentPassword" class="outline-none border border-blue-900 mb-4 p-2 rounded-md" type="password" placeholder="Nhập mật khẩu cũ">
                            <span class="font-semibold">Mật khẩu mới</span>
                            <input v-model="user.password" class="outline-none border border-blue-900 mb-4 p-2 rounded-md" type="password" placeholder="Nhập mật khẩu mới">
                            <span class="font-semibold">Nhập lại mật khẩu mới</span>
                            <input v-model="user.repassword" class="outline-none border border-blue-900 mb-2 p-2 rounded-md" type="password" placeholder="Nhập lại mật khẩu mới">
                            <span v-if="validate.error === false" class="text-red-600 mb-4 ">{{ validate.message }}</span>
                            <button type="submit" class="bg-blue-900 text-white p-2 rounded-md">Đổi mật khẩu</button>
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import SidebarmemberScreen from '../common/SidebarmemberScreen.vue';
import Cookies from 'js-cookie';
import axios from 'axios';
import { findApiByName } from '../../../assets/js/apiUtil.js';
export default {
    components: {
        SidebarmemberScreen,
    },
    data() {
        return {
            user: {
                currentPassword: '',
                password: '',
                repassword: '',
                isChangeInfor: false,
            },
            validate: {
                error: false,
                message: '',
            },
        };
    },
    methods: {
        async changePass(){
            try{
                const queryParams = Cookies.get("userID");
                const token = Cookies.get("auth");
                const body = {
                    password: this.user.password,
                };
                const options = {
                    headers: { 'Authorization': `Bearer ${token}` },
                    params: {
                        currentPassword: this.user.currentPassword
                    },
                };
                if(this.user.password !== this.user.repassword){
                    this.isValidate(false, "Mật khẩu nhập lại không chính xác");
                    return;
                }else{
                    const apiObject = findApiByName("user", "updateUser").url+"/"+queryParams;
                    const response = await axios.put(apiObject, body, options);
                    console.log(response.data.status);

                    if(this.user.password.length < 6){
                    this.isValidate(false, "Mật khẩu mới phải trên 6 kí tự");
                    return;
                    }
                    
                    if(response.data.status === "BAD_REQUEST"){
                    this.isValidate(false, "Mật khẩu hiện tại không đúng");
                    return;
                    }
                    this.user.isChangeInfor = true;
                }
                
            }catch(error){
                console.error('Changepass fail', error);
            }
    },
        isValidate(error, message){
            this.validate.error = error;
            this.validate.message = message;
        }
    },
};
</script>
