<template>
  <div class="w-2/3 m-auto max-sm:w-full max-sm:px-5 sm:px-3 lg:px-0 mt-14">
    <PopupConfirm v-if="isCourse" :contents="contents"></PopupConfirm>
    <div class="w-full flex my-5 max-sm:flex-col">
      <sidebarteacher-screen></sidebarteacher-screen>
      <div class="ml-6 w-4/5 max-sm:mt-4 bg-white max-sm:w-full max-sm:ml-0">
        <div class="shadow-md p-5">
          <form class="flex flex-wrap justify-center max-sm:w-full max-sm:p-2 gap-3">
            <p class="text-xl font-semibold">Thông tin khóa học</p>

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

            <div class="relative h-8 border focus:border-blue-900 w-full rounded max-sm:w-full">
              <label class="absolute flex right-0 items-center pr-1 h-full w-full" for="file-image">
                <p class="text-left w-full pl-2 text-">{{ selectedFile != null ? selectedFile.name : null }}</p>
                <i class="fa-regular fa-folder-open cursor-pointer text-blue-900"></i>
                <input @change="handleFileChange"
                  class="outline-none border px-2 border-blue-900 w-full h-8 rounded max-sm:w-full hidden" type="file"
                  id="file-image" placeholder="Hình ảnh khóa học">
              </label>
            </div>

            <div class="flex justify-end w-full max-sm:w-full">
              <button class="bg-gray-400 text-white py-2 px-4 mr-4 rounded text-sm max-sm:mr-2">
                Hủy
              </button>
              <button @click.prevent="saveCourse" class="bg-blue-900 text-white py-2 px-2 rounded text-sm max-sm:mr-0">
                Lưu khóa học
              </button>
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
import Cookies from 'js-cookie';

export default {
  mounted() {
    this.getAllCategories();
    this.getAllEducations();

    console.log(this.categories)
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
      let apiObject = findApiByName("course", "upload").url;

      try {
        if (this.selectedFile != null) {
          //create params send with api
          const formData = new FormData();
          formData.append('file', this.selectedFile);
          this.isCourse = true;
          this.contents.title =
            "Đang đăng tải khóa học. Vui lòng đợi quá trình hoàn tất";
          this.contents.color = "red-600";
          this.contents.icon = "fa-solid fa-circle-exclamation";

          //send API upload file
          await axios.post(apiObject, formData, {
            headers: {
              'Content-Type': 'multipart/form-data', // Important for handling files
            },
          }).then((response) => {
            if (response.status == 200) {
              apiObject = findApiByName("course", "common").url;
              this.imageCourse.urlImage = response.data.data.url;

              axios.post(apiObject, this.course).then((data) => {
                if (data.status == 200) {
                  this.imageCourse.courseID = data.data.data.id;

                  apiObject = findApiByName("course", "course-image").url;
                  axios.post(apiObject, this.imageCourse).then((res) => {
                    if (res.status == 200) {
                      console.log(res);
                      this.contents.step = "/expert/course-topic/"+res.data.data.courseID;
                      
                      this.isCourse = true;
                      this.contents.title =
                        "Đăng tải khóa học thành công. Nội dung khóa học sẽ được hiển thị sau khi kiểm duyệt thành công. Vui lòng theo dõi tình trạng khóa học tại trang quản lý của bạn.!!!";
                      this.contents.color = "green-500";
                      this.contents.icon = "fa-regular fa-circle-check";
                    } else {
                      this.isCourse = false
                    }
                  })
                }
              });
            }
          })
        }
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
        userID: Cookies.get('userID'),
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
        title: "Đang đăng tải khóa học",
        status: true,
        color: "red-600",
        icon: "fa-solid fa-circle-exclamation",
        navigate: null,
        step: null,
      },
    }
  }
};
</script>
