import router from './router'
import {createApp} from 'vue'
import App from './App.vue'
import "./assets/styles/style.css"
import "./assets/styles/global.scss"
import "./assets/styles/header.scss"
import "./assets/styles/footer.scss"

const app = createApp(App)
app.use(router)
app.mount('#app')
