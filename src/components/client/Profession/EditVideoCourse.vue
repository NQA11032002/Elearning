<template>
    <div class="w-2/3 m-auto max-sm:w-full max-sm:px-5 sm:px-3 lg:px-0 mt-14">
      <div class="w-full flex my-5 max-sm:flex-col">
        <PopupConfirm v-if="isCourse" :contents="contents"></PopupConfirm>
        <sidebarteacher-screen></sidebarteacher-screen>
        <div class="ml-6 w-4/5 max-sm:mt-4 bg-white max-sm:ml-0 shadow-md ">
          <div class="p-4">
            <p class="text-3xl font-semibold flex justify-center text-blue-900">Thông tin bài giảng</p>
          </div>
          <div class="flex justify-between max-sm:flex-col">
            <form @submit.prevent="uploadLesson" class="w-full flex flex-col justify-center max-sm:w-full max-sm:p-2"
              style="margin-left: 50%; transform: translateX(-50%);">
              <!-- <span class="py-2 font-semibold">Mã khóa học:</span>
                          <input class="outline-none border px-2 border-blue-900 w-full h-8 rounded max-sm:w-full" type="text" placeholder="Mã khóa học:">
      
                          <span class="py-2 font-semibold">Mã chuyên đề:</span>
                          <input class="outline-none border px-2 border-blue-900 w-full h-8 rounded max-sm:w-full" type="text" placeholder="Mã khóa học:">
           -->
              <span class="py-2 font-semibold">Tên bài giảng</span>
              <input v-model="lesson.name" class="outline-none border px-2 border-blue-900 w-full h-8 rounded max-sm:w-full"
                type="text" placeholder="Tên bài giảng">
  
  
              <span class="py-2 font-semibold">Chọn video giảng:</span>
              <div class="relative h-8 border border-blue-900 w-full rounded max-sm:w-full">
                <label class="absolute flex right-0 items-center pr-1 h-full w-full" for="filevideocourse">
                  <p class="text-left w-full pl-2 text-gray-400">{{ selectedFile }}</p>
                  <i class="fa-regular fa-folder-open cursor-pointer text-blue-900"></i>
                  <input @change="handleFileChange"
                    class="outline-none border px-2 border-blue-900 w-full h-8 rounded max-sm:w-full hidden" type="file"
                    id="filevideocourse" placeholder="Bài giảng">
                </label>
              </div>
  
              <div class="flex justify-end w-full my-4 max-sm:w-full">
                <button class="bg-gray-400  text-white p-2 w-1/5 mr-4 rounded text-sm max-sm:mr-2">Hủy</button>
                <button class="bg-blue-900 text-white p-2 w-2/5 rounded text-sm max-sm:mr-0">Lưu bài giảng</button>
              </div>
            </form>
          </div>
  
        </div>
  
      </div>
    </div>
  </template>
  <script>
  import SidebarteacherScreen from './SidebarteacherScreen.vue';
  import axios from "axios";
  import PopupConfirm from "../common/PopupConfirm.vue";
  import { findApiByName } from "../../../assets/js/apiUtil.js";
  export default {
    mounted() {
      this.updateVideoCourse();
      this.videoID = this.$route.params.id;
      console.log(this.videoID);
    },
    components: {
      SidebarteacherScreen,
      PopupConfirm
    },
    data() {
      return {
        selectedFile: null, // Tên mặc định khi chưa có tệp nào được chọn
        lesson: {
          name: "",
          thematicID: this.$route.params.id,
          urlVideo: "",
          duration: ""
        },
        isCourse: false,
        contents: {
            title: "Thêm video thành công",
            status: true,
            color: "green-600",
            icon: "fa-regular fa-circle-check",
            navigate: "#"
          },
        videoID: "",
      };
    },
    methods: {
  
    //   async uploadLesson() {
    //     try {
    //       if (this.selectedFile != null) {
    //         //create params send with api
    //         const formData = new FormData();
    //         formData.append('file', this.selectedFile);
  
    //         //send API upload file
    //         await axios.post("http://localhost:8087/api/upload", formData, {
    //           headers: {
    //             'Content-Type': 'multipart/form-data', // Important for handling files
    //           },
    //         }).then((response) => {
    //           if (response.status == 200) {
    //             const res = response.data.data;
    //             this.lesson.duration = res.duration;
    //             this.lesson.urlVideo = res.url;
                
    //             axios.put("http://localhost:8087/api/course-video", this.lesson).then((res) => {
    //               console.log(res)
    //             })
    //           }
    //         })
    //       }
    //     } catch (error) {
    //       console.error('Error uploading file:', error);
    //     }
    //   },

      async updateVideoCourse() {
        try {
            //create params send with api
            const apiObject = findApiByName("video", "common").url;
            console.log(apiObject);
            const res = await axios.get(apiObject + this.videoID);
            console.log(res);

            // const formData = new FormData();
            // formData.append('file', this.selectedFile);
  
            // //send API upload file
            // await axios.post("http://localhost:8087/api/upload", formData, {
            //   headers: {
            //     'Content-Type': 'multipart/form-data', // Important for handling files
            //   },
            // }).then((response) => {
            //   if (response.status == 200) {
            //     const res = response.data.data;
            //     this.lesson.duration = res.duration;
            //     this.lesson.urlVideo = res.url;
                
            //     axios.put("http://localhost:8087/api/course-video", this.lesson).then((res) => {
            //       console.log(res)
            //     })
            //   }
            // })
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
  };
  
  </script>
  