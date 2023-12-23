<template>
  <div class="w-2/3 m-auto max-sm:w-full max-sm:px-5 sm:px-3 lg:px-0 mt-14">
    <div class="w-full flex my-5 max-sm:flex-col">
      <sidebarteacher-screen></sidebarteacher-screen>
      <div class="ml-6 w-4/5 max-sm:mt-4 bg-white max-sm:w-full max-sm:ml-0">
        <div class="shadow-md p-5">
          <div class="flex flex-wrap justify-center max-sm:w-full max-sm:p-2 gap-3">
            <p class="text-xl font-semibold">Thông tin khóa học</p>

            <div class="w-full">
              <input
                class="text-sm outline-none border px-2 border-gray-300 focus:border-blue-900 w-full py-2 rounded max-sm:w-full"
                type="text" placeholder="Tiêu đề:" />
            </div>

            <select id="countries"
              class="border w-full outline-none border-gray-300 focus:border-blue-900 text-sm rounded block px-2 py-2">
              <option selected>Chọn loại khóa học</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>

            <select id="countries"
              class="border w-full outline-none border-gray-300 focus:border-blue-900 text-sm rounded block px-2 py-2">
              <option selected class="text-gray-400">
                Chọn cấp bậc khóa học
              </option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>

            <div class="w-full">
              <input
                class="text-sm outline-none border px-2 border-gray-300 focus:border-blue-900 w-full py-2 rounded max-sm:w-full"
                type="number" placeholder="Số lượng chuyên đề:" />
            </div>

            <div class="w-full">
              <input
                class="text-sm outline-none border px-2 border-gray-300 focus:border-blue-900 w-full py-2 rounded max-sm:w-full"
                type="number" placeholder="Giá khóa học" />
            </div>

            <div class="w-full">
              <textarea
                class="py-2 text-sm resize-none outline-none border px-2 border-gray-300 focus:border-blue-900 max-sm:w-full w-full rounded"
                name="" id="" rows="6" placeholder="Mô tả khóa học:"></textarea>
            </div>

            <label class="w-full relative py-2 border border-gray-300 focus:border-blue-900 rounded max-sm:w-full">
              <p class="text-left text-sm w-full pl-2 text-gray-300">
                Chọn ảnh khóa học (ít nhất 1 ảnh)*
              </p>
              <i
                class="absolute fa-regular fa-folder-open cursor-pointer right-2 text-gray-300 top-1/2 -translate-y-1/2"></i>
              <input hidden type="file" id="image-course" />
            </label>

            <div class="flex justify-end w-full max-sm:w-full">
              <button class="bg-gray-400 text-white py-2 px-4 mr-4 rounded text-sm max-sm:mr-2">
                Hủy
              </button>
              <button class="bg-blue-900 text-white py-2 px-2 rounded text-sm max-sm:mr-0">
                Lưu khóa học
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SidebarteacherScreen from "./SidebarteacherScreen.vue";
import axios from "axios";
import { findApiByName } from "../../../assets/js/apiUtil.js";

export default {
  mounted:{

  },
  components: {
    SidebarteacherScreen,
  },
  methods(){
    const categories = async () => {
      const apiObject = findApiByName("categories", "common").url;

      await axios.get(apiObject).then((res) => {
        console.log(res)
      });

    } 

    categories();
  },
  data(){
    return {
      categories: {
        id: 0,
        name: ""
      },
      educations: {
        id: 0,
        name: ""
      }
    }
  }
};
</script>
