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
import InfoExpertScreen from './components/client/experts/InfoExpertScreen.vue'
import AdminHomeScreen from "./components/admin/AdminHomeScreen.vue"
import ProfesserManagerScreen from "./components/admin/ProfesserManagerScreen.vue";
import CourseManagerScreenVue from "./components/admin/CourseMangerScreen.vue";
import StudentManagerScreen from "./components/admin/StudentManagerScreen.vue";
import ApproveScreen from "./components/admin/ApproveScreen.vue";
import LessonsScreen from "./components/admin/LessonsScreen.vue";
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
    path: '/expert',
    component: InfoExpertScreen
  },
  {
    path: '/:catchAll(.*)',
    component: HomeScreenVue
  },
  {
    path: '/adminHome',
    component: AdminHomeScreen
  },
  {
    path:'/ProfesserManager',
    component: ProfesserManagerScreen
  },
  {
    path: '/CourseManager',
    component: CourseManagerScreenVue
  },
  {
    path: '/StudentManager',
    component: StudentManagerScreen,
  },
  {
    path: '/Approve',
    component: ApproveScreen,
  },
  {
    path:'/Lessons',
    component: LessonsScreen,
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
