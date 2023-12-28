<template>
    <div class="w-2/3 m-auto max-sm:w-full max-sm:px-5 sm:px-3 lg:px-0 mt-14">
        <div class="w-full flex my-5 max-sm:flex-col">
            <PopupConfirm v-if="user.isChangeInfor" :contents="contents"></PopupConfirm>
            <sidebarteacher-screen></sidebarteacher-screen>
            <div class="ml-6 w-4/5 max-sm:mt-4 bg-white max-sm:w-full max-sm:ml-0">
                <div class="p-4">
                    <p class="text-3xl font-semibold flex justify-center text-blue-900">Thông tin chuyên đề</p>
                </div>
                <form action="" @submit.prevent="insertTopicCourse">
                    <div class="flex justify-between max-sm:flex-col shadow-md">
                        <div class="w-full flex flex-col justify-center max-sm:w-full max-sm:p-2" style="margin-left: 50%; transform: translateX(-50%);">
                            <span class="py-2 font-semibold">Mã khóa học:</span>
                            <input v-model="course.id" disabled class="outline-none border px-2 focus:border-blue-900 w-full h-8 rounded max-sm:w-full" type="text" placeholder="Mã khóa học:">
            
                            <span class="py-2 font-semibold">Tên chuyên đề:</span>
                            <input v-model="course.name" class="outline-none border px-2 focus:border-blue-900 w-full h-8 rounded max-sm:w-full" type="text" placeholder="Tên chuyên đề:">
            
                            <div class="flex justify-end w-full my-4 max-sm:w-full">
                                <a :href="'/detail-course/' + course.id" class="bg-gray-400  text-white p-2 mr-4 rounded text-sm max-sm:mr-2 w-1/5 text-center"><button >Hủy</button></a>
                                <button type="submit" class="bg-blue-900 text-white p-2 w-2/5 rounded text-sm max-sm:mr-0">Lưu chuyên đề</button>
                            </div>
                        </div>
                    </div>
                </form>
                
                
            </div>
            
        </div>
    </div>
    
</template>
<script>
import SidebarteacherScreen from './SidebarteacherScreen.vue';
import axios from '../../../assets/js/axios.js';
import { findApiByName } from "../../../assets/js/apiUtil.js";
import PopupConfirm from "../common/PopupConfirm.vue";

export default {
    mounted() {
      this.courseId = this.$route.params.id;
      
      this.getSingleCourse();
    },
    components: {
      SidebarteacherScreen,
      PopupConfirm
    },
    methods: {
        async getSingleCourse(){
            const apiObject = findApiByName("course", "findCourseByID").url;
            const res = await axios.get(apiObject + this.courseId);
            if(res.data.status === "OK"){
                this.course.id = res.data.data.id;
            }
        },
        async insertTopicCourse(){
            const apiObject = findApiByName("thematic", "common").url;
            const res = await axios.post(apiObject, {
                courseID: this.course.id,
                name: this.course.name
            });
            if(res.data.data != null){
                this.user.isChangeInfor = true;
            }
            console.log(res.data.data);
        }
    },
    data() {
      return {
        course: {
            id: 0,
            name: "",
            numberTopic: "",
        },
        user: {
            isChangeInfor: false,
        },

      };
    }
};
</script>