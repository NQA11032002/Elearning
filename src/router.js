import { createRouter, createWebHistory } from 'vue-router'
import HomeScreenVue from './components/client/pages/HomeScreen.vue'
import TrainingScreenVue from './components/client/pages/TrainingScreen.vue'
import CourseScreenVue from './components/client/courses/CourseScreen.vue'
import SupportScreenVue from './components/client/pages/SupportScreen.vue'
import LoginScreenVue from './components/client/auths/LoginScreen.vue'
import RegisterScreenVue from './components/client/auths/RegisterScreen.vue'
import DetailCourseScreen from './components/client/courses/DetailCourseScreen.vue'

import PaymentScreenVue from './components/client/courses/PaymentScreen.vue'
import LessonScreen from './components/client/lessons/LessonScreen.vue'
import InfoExpertScreen from './components/client/experts/InfoExpertScreen.vue'
import InformationScreen from "./components/client/students/InfoStudentScreen.vue";
import MyCourseScreen from './components/client/students/MyCourseScreen.vue'


import ForgotPassScreen from "./components/client/auths/ForgotPassScreen.vue";
import ChangepassScreen from "./components/client/auths/ChangepassScreen.vue";

import GiftCodeScreen from "./components/client/GiftCodeScreen.vue";

import CourseManagement from "./components/client/Profession/CourseManagement.vue";
import EditCourse from "./components/client/Profession/EditCourse.vue";
import DetailCoursePro from "./components/client/Profession/DetailCoursePro.vue";
import InformationPro from "./components/client/Profession/InformationPro.vue";
import TopicInformation from "./components/client/Profession/TopicInformation.vue";
import CourseVideoScreen from "./components/client/Profession/CourseVideoScreen.vue";
import CourseManager from "./components/client/Profession/CourseManager.vue";


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
    path: '/course/:id',
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
    path: '/payment/:id',
    component: PaymentScreenVue
  },
  {
    path: '/my-course',
    component: MyCourseScreen
  },
  {
    path: '/lesson/:id',
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
      path: '/profile',
      component: InformationScreen
  },
  {
      path: '/changepass',
      component: ChangepassScreen
  },

  {
    path: '/detail-course/:id',
    component: DetailCoursePro
  },
  {
    path: '/gift-code',
    component: GiftCodeScreen
  },
  {
    path: '/expert/course',
    component: CourseManagement
  },
  {
    path: '/edit-course/:id',
    component: EditCourse
  },
  {
    path: '/profile-expert',
    component: InformationPro
  },
  {
    path: '/expert/course-topic/:id',
    component: TopicInformation
  },
  {
    path: '/expert/course-lesson/:id',
    component: CourseVideoScreen
  },
  {
    path: '/expert/courses',
    component: CourseManager
  },
  
]


const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
