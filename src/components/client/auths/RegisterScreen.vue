<template>
  <body class="LoginForm">
    <div class="LoginForm_container" id="container">
      <div class="form-container log-in-container">
        <form @submit.prevent="register">
          <h1>Create Account</h1>
          <span>Create your new account</span>
          <input v-model="user.userName" type="text" placeholder="Username" />
          <input v-model="user.fullName" type="text" placeholder="Full name" />
          <input v-model="user.phone" type="text" placeholder="Phone number" maxlength="12" />
          <input v-model="user.password" type="password" placeholder="Password" />
          <input v-model="user.repeatPassword" type="password" placeholder="Repeat your password" />
          <span v-if="validate.error === false" class="text-red-500 font-semibold py-2 text-sm">{{ validate.message }}</span>
          <button :disabled="isSubmitting" type="submit">Register</button>
        </form>
      </div>
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-right">
            <h1>Register Form</h1>
            <p>Have already an account? Login now!</p>
            <a href="/login">
              <button>Login</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import axios from 'axios';
import { findApiByName } from '../../../assets/js/apiUtil.js';
export default {
  data() {
    return {
      user: {
        userName: '',
        fullName: '',
        phone: '',
        password: '',
        repeatPassword: '',
      },
      validate: {
        error: false,
        message: '',
        isSubmitting: false,
     }
    }
  },
  methods: {
    async register() {
      try {
        this.validate.isSubmitting = true;
        if(!this.user.userName || !this.user.fullName || !this.user.phone || !this.user.password || !this.user.repeatPassword){
          this.isValidate(false, "Vui lòng nhập đủ thông tin");
          return;
        }
        else{
          this.isValidate(true, "");
          if(this.user.repeatPassword != this.user.password){
            this.isValidate(false, "Mật khẩu nhập lại không chính xác");
            return;
          }else{
            if(this.user.password.length < 6){
              this.isValidate(false, "Mật khẩu phải trên 6 kí tự");
              return;
            }
            const apiObject = findApiByName("auth", "register").url;
            const response = await axios.post(apiObject, {
              userName: this.user.userName,
              password: this.user.password,
              fullName: this.user.fullName,
              phone: this.user.phone,
            })
            if (response.data.data === null) {
              this.isValidate(false, "Tài khoản đã tồn tại vui lòng nhập tài khoản khác");
              return;
             }
            }
        } 
        this.validate.isSubmitting = false;
        
        this.$router.push('/login');
      } catch (error) {
        // Xử lý lỗi từ API (error.response.data) nếu cần
        this.validate.isSubmitting = false;
        console.error('Registration failed', error.response.data);
      }
    },

    isValidate(error, message){
      this.validate.error = error;
      this.validate.message = message;
    },
  },
};
</script>
