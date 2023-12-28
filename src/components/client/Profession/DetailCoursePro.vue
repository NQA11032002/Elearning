<template>
    <div class="w-2/3 m-auto max-sm:w-full max-sm:px-5 sm:px-3 lg:px-0 mt-14">
        <div class="w-full flex my-5 max-sm:flex-col">
            <sidebarteacher-screen></sidebarteacher-screen>
            <div class="ml-6 w-4/5 max-sm:mt-4 bg-white max-sm:w-full max-sm:ml-0 shadow-md">
                <div class="p-4">
                    <p class="text-2xl font-semibold w-full text-center text-blue-900">Quản lý khóa học</p>
                </div>
                <div class="w-full">
                    <div class="flex gap-5 w-full mb-4 max-sm:flex-col cursor-pointer px-2">
                        <div class="" >
                            <img :src="imageCourse.length > 0 ? imageCourse[0].element.urlImage : ''" class="object-cover w-48 h-36 max-sm:w-full" alt="">
                        </div>
                        <div class="flex flex-col gap-3 w-2/3 max-sm:w-full ">
                            <h2 class="font-semibold text-xl text-blue-900">{{ course.title }}</h2>
                            <div class="">
                                <span class="font-medium pr-4">Chuyên đề: {{ countTopic }}</span>
                                <span class="font-medium">Bài giảng: </span>
                            </div>
                            <div class="flex max-sm:w-full gap-5">
                                <span class="text-red-500 font-semibold ">{{ course.price }} VND</span>
                                <span class="text-gray-400 font-semibold line-through">1.599.000 VND</span>
                            </div>
                            <div class="">
                                <a :href="'/edit-course/' + courseId" class="bg-blue-900 text-white p-2 px-4 rounded-md">
                                    Sửa khóa học
                                </a>
                            </div>
                        </div>
                    </div>
    
                    <div class="">
                        <div class="flex justify-between px-2 bg-blue-900 p-2 mx-2">
                            <h3 class="mx-2 text-white font-semibold">Chuyên đề</h3>
                            <!-- course-topic -->
                            <a :href="'/expert/course-topic/' + courseId"><i  class="fa-solid fa-circle-plus flex items-center text-white text-xl cursor-pointer"></i></a>
                        </div>
                        
                        <div class="px-3">
                            <!-- Khi chưa có khóa học -->
                            <div class="p-20 text-center hidden">
                                <span class=" text-blue-900 text-4xl leading-snug">
                                    Khóa học này hiện tại chưa được có thông tin chuyên đề và bài giảng, vui lòng thêm đầy đủ để chúng tôi duyệt
                                </span>
                            </div>
    
                            <!-- Khi có khóa học -->
                            <div v-for="topicItem in topic" :key="topicItem.element.id" class="mt-2 h-full">
                                <div class="flex justify-between p-2 bg-gray-100 h-full">
                                    <div class="">
                                        <h3 class="font-semibold text-blue-900">{{ topicItem.element.name }}</h3>
                                        <div class="">
                                            <span class="text-blue-900 mr-2">Bài giảng:</span>
                                            <i class="fa-solid fa-circle-plus text-blue-900 text-base cursor-pointer"></i>
                                        </div>
                                    </div>
                                    <div class="h-full cursor-pointer flex justify-center">
                                        <a href=""><i class="fa-solid fa-chevron-down text-2xl flex items-center text-blue-900"></i></a>
                                    </div>
                                </div>
                    
                                <!-- Hiển thị danh sách video cho mỗi chủ đề -->
                                <div v-for="(videoItem, index) in topicItem.videos" :key="index" class="p-2 flex flex-col gap-3 ml-3">
                                    <div class="flex justify-between border-b border-b-gray-200 pb-4 last:border-b-0 w-full">
                                        <div class="flex flex-col w-2/4">
                                            <span class="font-black truncate">{{ videoItem.name }}</span>
                                            <span class="text-gray-400">{{ videoItem.duration }}</span>
                                        </div>
                                        <div class="flex gap-2">
                                            <button class="text-blue-900 px-4 rounded-md transition-all">
                                                <i class="fa-regular fa-pen-to-square pr-1"></i>
                                                <span class="max-sm:hidden"> Chỉnh sửa</span>
                                            </button>
                                            <button class="text-blue-900">
                                                <i class="fa-regular fa-eye pr-1"></i>
                                                <span class="max-sm:hidden">Xem ngay</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SidebarteacherScreen from './SidebarteacherScreen.vue';
import axios from '../../../assets/js/axios.js';
import { findApiByName } from "../../../assets/js/apiUtil.js";

export default {
    mounted() {
      this.courseId = this.$route.params.id;
      (async () => {
        await this.getSingleCourse();
        await this.getTopicByIdCourse();
        await this.getVideoByIdTopic();
    })();
    },
    components: {
      SidebarteacherScreen,
    },
    methods: {
        async getSingleCourse(){
            const apiObject = findApiByName("course", "findCourseByID").url;
            const res = await axios.get(apiObject + this.courseId);
            if(res.data.status === "OK"){
                this.course.id = res.data.data.id;
                this.course.title = res.data.data.title;
                this.course.categoryID = res.data.data.categoryID;
                this.course.educationID = res.data.data.educationID;
                this.course.price = res.data.data.price;
                this.course.count = res.data.data.count;
                this.course.description = res.data.data.description;
                if(res.data.data.courseImages.length > 0){
                    for (const element of res.data.data.courseImages) {
                    this.imageCourse.push({ element });
                }
                }
            }
      },
      async getTopicByIdCourse(){
            const apiObject = findApiByName("thematic", "findThematicByID").url;
            const res = await axios.get(apiObject + this.courseId);
            if(res.data.data.length > 0){
                for (const element of res.data.data) {
                    this.topic.push({ element });
                }
            }
            this.countTopic = res.data.data.length;
    },

    async getVideoByIdTopic() {
    const apiObject = findApiByName("video", "common").url;
    console.log(apiObject);
    console.log(this.topic);

    for (const topicItem of this.topic) {
        const idTopic = topicItem.element.id;
        console.log("Id of Topic:", idTopic);

        try {
            const response = await axios.get(`${apiObject}/${idTopic}`);
            const videosForTopic = response.data;

            // Gán danh sách video cho từng chủ đề
            topicItem.videos = videosForTopic.data;

            console.log(`Videos for Topic ${idTopic}:`, videosForTopic);
        } catch (error) {
            console.error(`Error fetching videos for Topic ${idTopic}:`, error);
        }
    }


}


    },
    data() {
      return {
        course: {
         id: 0,
          categoryID: 0,
          educationID: 0,
          title: null,
          description: null,
          price: null,
          count: null,
          status: false,
          
        },
        topic: [],
        videos: [],

        countTopic: 0,
        imageCourse: [],
        isCourse: false,
        courseId: null,
      };
    }
};
</script>
