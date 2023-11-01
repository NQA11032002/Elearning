<template>
    <body class="LoginForm">
        <div class="LoginForm_container" id="container">
            <div class="form-container log-in-container">
                <form action="#">
                    <h1>Create Account</h1>
                    <span>Create your new account</span>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Repeat your password" />
                    <a href="#"></a>
                    <button>Register</button>
                </form>
            </div>
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-right">
                        <h1>Register Form</h1>
                        <p>Have already an account? Login now!</p>
                        <a href="#">
                            <button>Login</button>
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
