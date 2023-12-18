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

import ForgotPassScreen from "./components/client/ForgotPassScreen.vue";
import InformationScreen from "./components/client/InformationScreen.vue";
import ChangepassScreen from "./components/client/ChangepassScreen.vue";
import RegisteredCourses from "./components/client/RegisteredCourses.vue";
import GiftCodeScreen from "./components/client/GiftCodeScreen.vue";
import CourseManagement from "./components/client/Professional/CourseManagement.vue";
import EditCourse from "./components/client/Professional/EditCourse.vue";
import DetailCoursePro from "./components/client/Professional/DetailCoursePro.vue";
import InformationPro from "./components/client/Professional/InformationPro.vue";
import TopicInformation from "./components/client/Professional/TopicInformation.vue";
import CourseVideoScreen from "./components/client/Professional/CourseVideoScreen.vue";




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
      path: '/forgotpass',
      component: ForgotPassScreen
  },
  {
      path: '/profile/:id',
      component: InformationScreen
  },
  {
      path: '/changepass/:id',
      component: ChangepassScreen
  },
  {
    path: '/registered-course/:id',
    component: RegisteredCourses
  },
  {
    path: '/detail-course/:id',
    component: DetailCoursePro
  },
  {
    path: '/gift-code/:id',
    component: GiftCodeScreen
  },
  {
    path: '/course-management/:id',
    component: CourseManagement
  },
  {
    path: '/edit-course/:id',
    component: EditCourse
  },
  {
    path: '/information-pro/:id',
    component: InformationPro
  },
  {
    path: '/topicinfor/:id',
    component: TopicInformation
  },
  {
    path: '/addvideocourse/:id',
    component: CourseVideoScreen
  },

  

]


const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
