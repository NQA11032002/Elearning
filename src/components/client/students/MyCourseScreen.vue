<template>
  <div class="w-3/4 mx-auto mt-12">
    <div class="py-10">
      <div class="border-b border-b-gray-200 pb-5">
        <h1 class="text-xl font-semibold justify-between flex">Khóa học của tôi <p
            class="text-gray-500 text-lg text-medium">Số lượng: {{ courses.length }}</p>
        </h1>
        <p class="text-sm text-gray-500 pt-3">Bạn chưa hoàn thành khóa học nào.</p>
      </div>

      <div class="flex flex-wrap pt-5 gap-6 w-full">
        <a :href="'/lesson/' + course.id" v-for=" course in courses" :key="course.id"
          class="flex bg-white shadow-md w-1/5 flex-col gap-3 lg:w-course overflow-hidden hover:opacity-80 hover:shadow-lg rounded-lg transition-all">
          <div>
            <img class="flex-shrink-0 h-44 w-full rounded-lg" :src="course.courseImages.length > 0 ?
              course.courseImages[0].urlImage : ''" alt="">
          </div>
          <div class="flex-1 p-3">
            <p class="text-gray-500 text-sm ">{{ course.createdAt }}</p>
            <p class="font-black text-sm truncate">{{ course.title }}</p>
            <p class="flex justify-between text-gray-600 text-sm font-medium">{{ course.userFullName }}</p>
          </div>
        </a>

        <a href="/course"
          class="flex w-1/5 flex-col gap-6 overflow-hidden max-sm:w-full  max-sm:py-4 justify-center items-center rounded-lg transition-all hover:outline-slate-700 outline-2 outline-gray-300 outline-dashed">
          <i class="fa-solid fa-circle-plus text-2xl text-gray-400 "></i>
          <button class="border-slate-700 rounded-lg border py-2 w-32 text-sm text-gray-400">Thêm khóa học</button>
        </a>
      </div>
    </div>

  </div>
</template>

<script>
import axios from '../../../assets/js/axios.js';
import { findApiByName } from "../../../assets/js/apiUtil.js";
import { auth } from "../../../assets/js/auth.js";

export default {
  mounted() {
    //get all course 
    const getCourse = async () => {
      try {
        //get url API
        const apiObject = findApiByName("order", "findCourse").url;

        //get all course ordered
        const res = await axios.get(apiObject + auth());

        if (res.status == 200) {
          if (res.data.data.length > 0) {
            //get courseID from order
            for (const element of res.data.data) {
              // get course by courseID from order 
              const course = await this.getCourseByID(element.courseID);
              this.courses.push({ ...course, userFullName: await this.getUserByID(course.userID) });
            }
          }
        }
        console.log(this.courses);
      } catch (error) {
        console.log(error);
      }
    }

    getCourse();
  },
  setup() {

  },
  methods: {
    //get course by id from arrayID
    async getCourseByID(courseID) {
      // get url API
      const apiObject = findApiByName("course", "findCourseByID").url;

      const res = await axios.get(apiObject + courseID);

      if (res.status === 200) {
        return res.data.data;
      } else {
        console.error('Error fetching course data. Status:', res.status);
        return null;
      }
    },

    async getUserByID(userID) {
      try {
        // Get API URL
        const apiObject = findApiByName("customer", "findUser").url;

        // Make API request
        const res = await axios.get(apiObject + userID);

        if (res.status === 200) {
          return res.data.data.fullName;
        } else {
          console.error('Error fetching user data. Status:', res.status);
          return null;
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        return null;
      }
    },
  },
  components: {

  },
  data() {
    return {
      arrayID: [],
      courses: []
    };
  }
}

</script>
