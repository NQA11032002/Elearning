<template>
    <body class="LoginForm">
        <div class="LoginForm_container" id="container">
            <div class="form-container log-in-container">
                <form @submit.prevent="register">
                    <h1>Create Account</h1>
                    <span>Create your new account</span>
                    <input v-model="user.userName" type="text" placeholder="Username" />
                    <input v-model="user.fullName" type="text" placeholder="Full name" />
                    <input v-model="user.phone" type="text" placeholder="Phone number" />
                    <input v-model="user.password" type="password" placeholder="Password" />
                    <input v-model="user.repeatPassword" type="password" placeholder="Repeat your password" />
                    <p v-if="user.password !== user.repeatPassword" class="text-red-500 font-semibold py-2 text-sm">Mật khẩu nhập lại không chính xác!</p>
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

export default {
    data() {
        return {
            user: {
              userName: '',
              fullName: '',
              phone: '',
              password: '',
              repeatPassword: '',
            }
        };
    },
    methods: {
        async register() {
            // Kiểm tra xem mật khẩu có trùng khớp không
            if (this.password !== this.repeatPassword) {
                alert('Mật khẩu nhập lại không chính xác');
                return;
            }

            try {
              
                // Gửi yêu cầu POST đến API Spring Boot để đăng ký
<<<<<<< HEAD
                await axios.post('http://localhost:8086/auth/register', {
=======
                const response = await axios.post('http://localhost:8086/auth/register', {
>>>>>>> abc00c24 (save userID)
                    userName: this.user.userName,
                    password: this.user.password,
                    fullName: this.user.fullName,
                    phone: this.user.phone,
                });


                this.$router.push('/login'); // Chuyển hướng đến trang login
            } catch (error) {
                // Xử lý lỗi từ API (error.response.data) nếu cần
                console.error('Registration failed', error.response.data);
            }
        },
    },
};
</script>
