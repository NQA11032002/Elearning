<template>
    <body class="LoginForm">
        <div class="LoginForm_container" id="container">
            <div class="form-container log-in-container">
                <form action="#">
                    <h1>Login</h1>
                    <div class="social-container">
                        <a href="#" class="social"><i class="icon-fb fa-brands fa-facebook"></i></a>
                        <a href="#" class="social"><i class="icon-git fa-brands fa-github"></i></a>
                    </div>
                    <span>or use your account</span>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <a href="#">Forgot your password?</a>
                    <button>Log In</button>
                </form>
            </div>
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-right">
                        <h1>Login Form</h1>
                        <p>Welcome to our website! Enjoy your time</p>
                        <a href="#">
                            <button>No account yet? Register</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>

<script>
  import "../../assets/styles/login.scss";
  
export default {
  
  data() {
    return {};
  },
  watch: {},
  name: "App",
  components: {},
};
</script>
