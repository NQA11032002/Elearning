<template>
    <div class="w-2/3 m-auto max-sm:w-full max-sm:px-5 sm:px-3 lg:px-0 mt-14"> 
        <div class="w-full flex my-5 max-sm:flex-col">
            <sidebarteacher-screen></sidebarteacher-screen>
            <div class="ml-6 w-3/4 max-sm:mt-4 max-sm:w-full max-sm:ml-0">

                <div  class="w-full max-sm:px-4">
                    <div class="w-full text-right mb-4 flex justify-between">
                      <p class="text-xl font-semibold">Quản lý khóa học</p>

                        <a href="/expert/course" class="bg-blue-900 text-white px-2 py-2.5 rounded text-sm max-sm:mr-0">Thêm khóa học</a>
                    </div>
                    <div class="flex flex-col gap-4">
                      <div v-for=" course in courses" :key="course.id" class="p-3  bg-white gap-3  shadow-lg flex w-full rounded-md max-sm:flex-col max-sm:px-2">
                        <div class="">  
                            <img class="object-cover w-60 h-48 max-sm:w-full" :src="course.element.courseImages.length > 0 ?
                            course.element.courseImages[0].urlImage : ''" alt="">
                        </div>
                        <div class="w-2/3 max-sm:w-full overflow-hidden">
                            <h2 class="p-2 font-semibold text-lg">{{ course.element.title }}</h2>
                            <span class="px-2 text-gray-300 flex text-left overflow-ellipsis whitespace-nowrap">{{ course.element.description }}</span>
                        </div>
                        <div class="py-2 text-right w-2/5 flex flex-col max-sm:w-full max-sm:justify-center">
                       
                          <h3 class=" py-1 rounded-lg px-2 text-gray-400 line-through">{{ formatPrice(course.element.price ) }}đ</h3>  
                          
                            <p class="text-xl text-red-700 font-semibold">{{ formatPrice(course.element.price - (course.element.price *
                              (course.element.reduce / 100))) }}đ</p>
                                                    
                          <div class="flex items-end h-full justify-end max-sm:mr-0">
                                <!-- <a :href="'/expert/edit-course/' + course.element.id" class="bg-blue-900 text-white p-2 rounded w-2/6 max-sm:w-1/2 text-center"><button >Chỉnh sửa</button></a> -->
                                <a href="" class="bg-red-700 text-white p-2 rounded px-4 max-sm:w-1/2 text-center mr-3">Xóa</a>
                                <a :href="'/expert/course/' + course.element.id" class="bg-slate-700 px-4  text-white p-2 rounded  max-sm:w-1/2 text-center">Chi tiết</a>
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
import { auth } from '@/assets/js/auth';

export default {
    components: {
        SidebarteacherScreen,
    },
    mounted() {
        this.getCourseByUserID();
    },
    data() {
    return {
        courses: []
    }
},
    methods: {
        async getCourseByUserID(){
            const apiObject = findApiByName("course", "findCourseByUserID").url;
            const res = await axios.get(apiObject+auth());
            this.countCourse = res.data.data;

            if (res.status == 200) {
                if (res.data.data.length > 0) {

                for (const element of res.data.data) {
                    this.courses.push({ element });
                }
                console.log(this.courses);
            }
            }
        },

      formatPrice(price) {
        return price.toLocaleString("vi-VN");
      },
    },
    
};
</script>
