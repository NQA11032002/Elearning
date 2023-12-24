<template>
  <body class="LoginForm">
    <div class="LoginForm_container" id="container">
      <div class="form-container log-in-container">
        <form @submit.prevent="login">
          <h1>Login</h1>
          <div class="social-container">
            <a href="#" class="social"><i class="icon-fb fa-brands fa-facebook"></i></a>
            <a href="#" class="social"><i class="icon-git fa-brands fa-github"></i></a>
          </div>
          <span>or use your account</span>
          <input v-model="user.userName" type="text" placeholder="Username" />
          <input v-model="user.password" type="password" placeholder="Password" />
          <p v-if="user.isLogin === false" class="text-red-500 font-semibold py-2 text-sm">Tài khoản hoặc mật khẩu không chính xác</p>
          <a href="#">Forgot your password?</a>
          <button type="submit">Log In</button>
        </form>
      </div>
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-right">
            <h1>Login Form</h1>
            <p>Welcome to our website! Enjoy your time</p>
            <router-link to="/register">
              <button>No account yet? Register</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import "../../../assets/styles/login.scss";
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'vue-router';
import { findApiByName } from '../../../assets/js/apiUtil.js';


export default {
  setup() {
    const router = useRouter();

    if (Cookies.get('auth') !== undefined) {
      router.push('/home');
    }
  },
  data() {
    return {
      user: {
        userName: '',
        password: '',
        isLogin: true,
      },
    };
  },

  methods: {
    async login() {
      try {
        // Gửi yêu cầu POST đến API Spring Boot để đăng nhập
        const apiObject = findApiByName("auth", "login").url;
        const response = await axios.post(apiObject, {
          userName: this.user.userName,
          password: this.user.password,
        }).then((response) => {
            if (response.status == 200) {
              Cookies.set('auth', response.data.token, this.changeTime(response.data.expirationTime));            
              Cookies.set('userID', response.data.userID, this.changeTime(response.data.expirationTime));            
              Cookies.set('role', response.data.role, this.changeTime(response.data.expirationTime));            
            }
          });
        console.log(response);
        this.$router.push('/home');
      } catch (error) {
        this.user.isLogin = false;
        console.error('Login failed', error);
      }
    },
    
    deleteCookie(name) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    },
    changeTime(timeString){
      // Tạo đối tượng Date từ chuỗi thời gian
      const dateObject = new Date(timeString);
      // Chuyển đổi thời gian thành giây
      const timeInSeconds = dateObject.getTime() / 1000;
      console.log(timeInSeconds);
    }
  },
};
</script>
