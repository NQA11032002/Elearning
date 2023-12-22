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
                    <input v-model="userName" type="text" placeholder="Username" />
                    <input v-model="password" type="password" placeholder="Password" />
                    <p v-if="isLogin" class="text-red-500 font-semibold py-2 text-sm">Tài khoản hoặc mật khẩu không chính xác</p>
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
import "../../assets/styles/login.scss";
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'vue-router';
import { findApiByName } from '../../assets/js/apiUtil.js';


export default {
    setup() {
        const router = useRouter();

        if (Cookies.get('auth') !== undefined) {
            router.push('/home');
        }
    },
    data() {
        return {
            userName: '',
            password: '',
            isLogin: false,
            
        };
    },
    
    methods: {
        async login() {
            try {
                // Gửi yêu cầu POST đến API Spring Boot để đăng nhập
                const apiObject = findApiByName("auth", "login").url;
                const response = await axios.post(apiObject, {
                    userName: this.userName,
                    password: this.password,
                });

                if(response.status == 200 && Cookies.get('auth') === undefined){
                    Cookies.set('auth', response.data.token, { expires: 1 }); // Expires in 1 days
                }
                this.isLogin = true;
                const formData = new FormData();
                formData.append('token', response.data.token);

                const apiObject_getID = findApiByName("auth", "getUserID").url;

                const response_token = await axios.post(apiObject_getID, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                localStorage.setItem('idUser', response_token.data.data);

                this.$router.push('/home'); // Chuyển hướng đến trang home
            } catch (error) {
                // Xử lý lỗi từ API (error.response.data) nếu cần
                
                console.error('Login failed', error.response.data);
            }
        },

    },
};
</script>