<template>
    <div class="w-2/3 m-auto max-sm:w-full max-sm:px-5 sm:px-3 lg:px-0 mt-14">
      <PopupConfirm v-if="isCourse" :contents="contents"></PopupConfirm>
      <div class="w-full flex my-5 max-sm:flex-col">
        <sidebarteacher-screen></sidebarteacher-screen>
        <div class="ml-6 w-3/4 max-sm:mt-4 bg-white max-sm:w-full max-sm:ml-0">
          <div class="shadow-md p-5">
            <form class="flex flex-wrap justify-center max-sm:w-full max-sm:p-2 gap-3">
              <p class="text-xl font-semibold">Chỉnh sửa khóa học khóa học</p>
  
              <div class="w-full">
                <input
                  class="text-sm outline-none border px-2 border-gray-300 focus:border-blue-900 w-full py-2 rounded max-sm:w-full"
                  type="text" v-model="course.title" placeholder="Tiêu đề:" />
              </div>
  
              <select id="countries" v-model="course.categoryID"
                class="border w-full outline-none border-gray-300 focus:border-blue-900 text-sm rounded block px-2 py-2">
                <option value=0 disabled selected>Chọn loại khóa học</option>
                <option :value="category.id" v-for="category in categories" :key="category.id">{{ category.name }}
                </option>
              </select>
  
              <select id="countries" v-model="course.educationID"
                class="border w-full outline-none border-gray-300 focus:border-blue-900 text-sm rounded block px-2 py-2">
                <option value=0 disabled selected>Chọn cấp bậc khóa học</option>
                <option :value="education.id" v-for="education in educations" :key="education.id">{{ education.name }}
                </option>
              </select>
  
              <div class="w-full">
                <input v-model="course.count"
                  class="text-sm outline-none border px-2 border-gray-300 focus:border-blue-900 w-full py-2 rounded max-sm:w-full"
                  type="number" placeholder="Số lượng chuyên đề:" />
              </div>
  
              <div class="w-full">
                <input v-model="course.price"
                  class="text-sm outline-none border px-2 border-gray-300 focus:border-blue-900 w-full py-2 rounded max-sm:w-full"
                  type="number" placeholder="Giá khóa học" />
              </div>
  
              <div class="w-full">
                <textarea v-model="course.description"
                  class="py-2 text-sm resize-none outline-none border px-2 border-gray-300 focus:border-blue-900 max-sm:w-full w-full rounded"
                  name="" id="" rows="6" placeholder="Mô tả khóa học:"></textarea>
              </div>
  
              <div class="flex justify-end w-full max-sm:w-full">
                <button class="bg-gray-400 text-white py-2 px-4 mr-4 rounded text-sm max-sm:mr-2">
                  <a href="/expert/courses">Hủy</a>
                </button>
                
                <button @click.prevent="saveCourse" class="bg-blue-900 text-white py-2 px-2 rounded text-sm max-sm:mr-0">
                  Lưu khóa học
                </button>
                <!-- <button class="bg-green-900 text-white py-2 px-2 rounded text-sm max-sm:mr-0 ml-4">
                    Chỉnh sửa chuyên đề
                  </button> -->
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  import SidebarteacherScreen from "./SidebarteacherScreen.vue";
  import axios from "axios";
  import { findApiByName } from "../../../assets/js/apiUtil.js";
  import PopupConfirm from "../common/PopupConfirm.vue";
  
  export default {
    mounted() {
      this.getAllCategories();
      this.getAllEducations();
      this.courseId = this.$route.params.id;
      this.contents.navigate = "/expert/course/"+this.courseId;
      this.getCourseByID();
      console.log(this.courseId);
    },
    components: {
      SidebarteacherScreen,
      PopupConfirm
    },
    methods: {
      async getAllCategories() {
        const apiObject = findApiByName("categories", "common").url;
  
        await axios.get(apiObject).then((res) => {
          if (res.status == 200) {
            this.categories = res.data.data;
          }
        });
      },
      async getAllEducations() {
        const apiObject = findApiByName("educations", "common").url;
  
        await axios.get(apiObject).then((res) => {
          if (res.status == 200) {
            this.educations = res.data.data;
          }
        });
      },
  
      async saveCourse() {
        let apiObject = findApiByName("course", "updateCourse").url;
  
        try {
        const res = await axios.put(apiObject, {
            id: this.courseId,
            title: this.course.title,
            categoryID: this.course.categoryID,
            educationID: this.course.educationID,
            price: this.course.price,
            count: this.course.count,
            description: this.course.description,
        });
        this.isCourse = true;
        console.log(res);

        } catch (error) {
          console.error('Error uploading file:', error);
        }
  
      },
  
      handleFileChange(event) {
        const inputFile = event.target;
        if (inputFile.files.length > 0) {
          // Lấy tên của tệp đầu tiên nếu có
          this.selectedFile = event.target.files[0];
        } else {
          this.selectedFile = "Chưa chọn tệp";
        }
      },
      async getCourseByID(){
        const apiObject = findApiByName("course", "findCourseByID").url;
        const res = await axios.get(apiObject + this.courseId);
        if(res.data.status === "OK"){
            this.course.title = res.data.data.title;
            this.course.categoryID = res.data.data.categoryID;
            this.course.educationID = res.data.data.educationID;
            this.course.price = res.data.data.price;
            this.course.count = res.data.data.count;
            this.course.description = res.data.data.description;
        }
      }
    },
    data() {
      return {
        categories: {
          id: 0,
          name: ""
        },
        educations: {
          id: 0,
          name: ""
        },
        course: {
          categoryID: 0,
          educationID: 0,
          title: null,
          description: null,
          price: null,
          count: null,
          status: false,
        },
        imageCourse: {
          courseID: null,
          urlImage: null
        },
        selectedFile: null,
        isCourse: false,
        contents: {
          title: "Thay đổi khóa học thành công",
          status: true,
          color: "green-600",
          icon: "fa-regular fa-circle-check",
          navigate: ""
        },
        courseId: null,
      }
    }
  };
  </script>
  