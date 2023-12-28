import router from './router'
import {createApp} from 'vue'
import App from './App.vue'
import "./assets/styles/style.scss"
import "./assets/styles/global.scss"
import "./assets/styles/header.scss"
import "./assets/styles/footer.scss"
import { API_URLS } from './assets/js/config.js';
import './assets/js/authorize.js';

const app = createApp(App)
app.use(router)
app.config.globalProperties.$apiUrls = API_URLS;
app.mount('#app')
