import { createRouter, createWebHistory } from 'vue-router'
import HomeScreenVue from './components/client/HomeScreen.vue'
import TrainingScreenVue from './components/client/TrainingScreen.vue'
import CourseScreenVue from './components/client/CourseScreen.vue'
import SupportScreenVue from './components/client/SupportScreen.vue'
import LoginScreenVue from './components/client/LoginScreen.vue'
import RegisterScreenVue from './components/client/RegisterScreen.vue'
import DetailCourseScreen from './components/client/DetailCourseScreen.vue'
import PaymentScreenVue from './components/client/PaymentScreen.vue'
import MyCourseScreen from './components/client/MyCourseScreen.vue'
import LessonScreen from './components/client/lessons/LessonScreen.vue'

const routes = [
  {
      path: '/',
      component: HomeScreenVue
  },
  {
      path: '/training',
      component: TrainingScreenVue
  },
  {
      path: '/course',
      component: CourseScreenVue
  },
  {
    path: '/detail/:id',
    component: DetailCourseScreen
  },
  {
    path: '/support',
    component: SupportScreenVue
  },
  {
    path: '/login',
    component: LoginScreenVue
  },
  {
    path: '/register',
    component: RegisterScreenVue
  },
  {
    path: '/payment',
    component: PaymentScreenVue
  },
  {
    path: '/my-course',
    component: MyCourseScreen
  },
  {
    path: '/lesson',
    component: LessonScreen
  },
  {
    path: '/:catchAll(.*)',
    component: HomeScreenVue
  },
]


const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
