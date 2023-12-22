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
          <p v-if="user.password.length < 6 && user.password.length > 1" class="text-red-500 font-semibold py-2 text-sm">
            Mật khẩu phải ít nhất 6 kí tự</p>
          <input v-model="user.repeatPassword" type="password" placeholder="Repeat your password" />
          <p v-if="user.password !== user.repeatPassword" class="text-red-500 font-semibold py-2 text-sm">Mật khẩu nhập
            lại không chính xác!</p>

          <button type="submit">Register</button>
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
import { findApiByName } from '../../assets/js/apiUtil.js';
export default {
  data() {
    return {
      user: {
        userName: '',
        fullName: '',
        phone: '',
        password: '',
        repeatPassword: '',
        checkPasswordLength: true
      },

    }
  },
  methods: {
    async register() {
      // Kiểm tra xem mật khẩu có trùng khớp không
      if (this.user.password !== this.user.repeatPassword) {
        alert('Mật khẩu nhập lại không chính xác');
        return;
      }

      if (this.user.password.length < 6) {
        this.user.checkPasswordLength = false;
        return;
      }
      try {
        const apiObject = findApiByName("auth", "register").url;

        const response = await axios.post(apiObject, {
          userName: this.user.userName,
          password: this.user.password,
          fullName: this.user.fullName,
          phone: this.user.phone,
        });

        // Xử lý dữ liệu nhận được từ API (response.data) nếu cần
        console.log('Đăng ký tài khoản thành công', response.data);

        // Hiển thị thông báo và chuyển hướng sau khi đăng ký thành công
        alert('Đăng ký tài khoản thành công');
        this.$router.push('/login'); // Chuyển hướng đến trang login
      } catch (error) {
        // Xử lý lỗi từ API (error.response.data) nếu cần
        console.error('Registration failed', error.response.data);
      }
    },
  },
};
</script>
