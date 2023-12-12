<template>
  <div v-if="course" class="max-w-screen-lg m-auto px-3 my-10 flex flex-col gap-7">
    <div class="w-full">
      <div class="rounded-lg flex flex-col gap-3">
        <div class="w-detail">
          <h1 class="text-gray-700 font-semibold text-xl">{{ course.title }}</h1>

          <div class="flex justify-between gap-3 mt-2">
            <p class="text-gray-400">
              <i class="fa-regular fa-clock"></i>{{ course.createdAt }}
            </p>
            <p class="text-gray-400">
              Tác giả: <label for="" class="font-semibold text-black">EvonDev</label>
            </p>
          </div>
        </div>

        <div class="w-full flex justify-between gap-10">
          <div class="flex flex-col w-2/3 gap-2 bg-white rounded-xl shadow-md overflow-hidden">
            <img
              class="object-cover h-80 flex-shrink-0"
              :src="course.urlImage"
              alt=""
            />
            <div class="flex pb-2 justify-around mt-auto flex-1 cursor-pointer">
              <img
                @click="changeImage(image.urlImage)"
                v-for="image in course.courseImages"
                :key="image.id"
                class="w-24 h-24 rounded-xl object-cover hover:opacity-70 border shadow-sm"
                :src="image.urlImage"
                alt=""
              />
            </div>
          </div>

          <div class="w-1/3 bg-white shadow-md border border-gray-200 rounded-lg p-5">
            <h1 class="font-semibold text-xl text-red-600">
              {{ formatPrice(course.price) }}đ
            </h1>
            <div  class="w-full flex justify-between mt-3">
              <h3 class="line-through text-gray-400 font-semibold">{{ formatPrice(course.price - (course.price * (course.reduce / 100))) }}đ</h3>
              <p  class="bg-red-800 py-1 rounded-lg px-2 text-white text-sm text-center">
                Giảm giá {{course.reduce}}%
              </p>
            </div>

            <form action="" class="flex flex-col gap-5 mt-5">
              <input
                type="text"
                placeholder="Tên của bạn"
                class="rounded-lg border border-gray-100 text-sm py-2 px-2 outline-none"
              />
              <input
                type="text"
                placeholder="Email"
                class="rounded-lg border border-gray-100 text-sm py-2 px-2 outline-none"
              />
              <input
                type="text"
                placeholder="Số điện thoại"
                class="rounded-lg border border-gray-100 text-sm py-2 px-2 outline-none"
              />

              <input
                type="submit"
                value="ĐĂNG KÝ"
                class="bg-gray-700 text-white rounded-lg py-2 font-medium cursor-pointer hover:opacity-70"
              />
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="flex gap-10 w-full bg-white rounded-lg p-5 shadow-md">
      <div class="w-2/3">
        <p class="text-sm leading-7 text-slate-600">{{ course.description }}</p>
      </div>
      <div class="1/3 mx-auto">
        <img
          class="rounded-full w-full h-36 object-cover"
          src="https://static.kt.city/e0ebee87-aefb-40bf-96a3-9a53986dfc17.jpg"
          alt=""
        />
      </div>
    </div>

    <div class="bg-white rounded-lg p-5 mt-5 shadow-md">
      <h1 class="font-semibold text-xl">
        <i class="fa-solid fa-book pr-2"></i>NỘI DUNG BÀI HỌC
      </h1>

      <div class="mt-3 flex flex-col gap-5">
        <div v-for="thematic in course.thematicCourses" :key="thematic.id">
          <h1 class="bg-slate-600 text-white py-2 px-2">{{ thematic.name }}</h1>

          <div v-for="video in thematic.videoCourses" :key="video.id" class="flex justify-between mt-4 mx-4">
            <p class="text-gray-600">
              <i class="fa-regular fa-circle-play pr-2"></i>{{ video.name }}
            </p>
            <p class="text-gray-600">{{ video.duration }}</p>
          </div>

        </div>
      </div>
    </div>

    <div>
      <div class="bg-white rounded-lg p-5 mt-5 shadow-md">
        <h1 class="font-semibold text-xl">
          <i class="fa-regular fa-comments pr-2"></i>ĐÁNH GIÁ KHÓA HỌC
        </h1>

        <form class="mt-3" @submit.prevent="submitFormEvaluation">
          <div class="w-full flex gap-3">

            <input
              v-model="formData.comment" 
              name="evaluation"
              required
              type="text"
              class="border-b-slate-200 border-b px-2 bg-transparent w-full outline-none"
              placeholder="Đánh giá khóa học..."
            />
            
            <input
              v-model="formData.rate" 
              :id="course.id"
              ref="evaluationInput"
              required
              type="number"
              min="1"
              max="10"
              class="border-b-slate-200 border-b px-2 bg-transparent w-full outline-none"
              placeholder="Điểm: 1/10"
            />
            <input
              type="submit"
              value="Bình luận"
              class="hover:opacity-70 cursor-pointer bg-slate-700 text-white rounded-lg px-3 py-2 text-sm"
            />
          </div>
        </form>

        <div class="flex flex-col gap-5 mt-5">
          <div class="flex gap-3 border-b-slate-200 border-b w-full pb-3 last:border-b-0" v-for="(evaluation) in displayedEvaluations" :key="evaluation.id">
            <div>
              <img
                class="w-10 h-10 rounded-full object-cover"
                src="https://musicart.xboxlive.com/7/4d4d6500-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"
                alt=""
              />
            </div>

            <div class="flex flex-col gap-1">
              <p class="font-semibold text-sm">Nguyễn quốc anh</p>
              <p class="text-sm text-gray-400 text-sm">
                <i class="fa-regular fa-clock pr-2"></i>{{ evaluation.createdAt }}
              </p>
              <p class="bg-transparent w-full outline-none text-sm text-slate-600">
                {{ evaluation.comment }}
              </p>
            </div>
          </div>

          <button @click="changeShowEvaluate" v-if="!showMoreEvaluate && course.courseEvaluations.length > 5" class="bg-slate-700 text-white w-28 py-2 rounded-lg mx-auto hover:opacity-70">Xem thêm</button>
          <button @click="changeShowEvaluate" v-if="showMoreEvaluate && course.courseEvaluations.length > 5" class="bg-slate-700 text-white w-28 py-2 rounded-lg mx-auto hover:opacity-70">Thu gọn</button>
        </div>
      </div>
    </div>
  </div>
  <p v-else>Loading...</p>
</template>

<script>
  import { ref } from "vue";
  import axios from "axios";
  import { useRoute } from 'vue-router';

  export default {
    setup(){
      const course = ref();
      const route = useRoute();
      const courseId = route.params.id;

      const getCourse = async () => {

        try {
          const res = await axios.get("http://localhost:8087/api/course/" + courseId);

          course.value = res.data.data;

          if(course.value.courseImages.length > 0)
          {
            course.value.urlImage = course.value.courseImages[0].urlImage;
          }

        } catch (error) {
          console.log(error);
        }
    }

    getCourse();

    return {
      course,
      getCourse
    }
    },
    methods: {
      formatPrice(price) {
        return price.toLocaleString("vi-VN");
      },
      
      //insert evaluation
      async insertEvaluation() {
        try
        {
          console.log(this.formData)
          const res = await axios.post("http://localhost:8087/api/evaluation", this.formData);
          
          if(res.status == 200)
          {
            this.getCourse();
          }
          
        } catch (error) {
          console.log(error);
        }
      },

      //submit form evaluation
      submitFormEvaluation(){
        const inputElement = this.$refs.evaluationInput;
        if (inputElement) {
          this.formData.courseID = inputElement.id;

          this.insertEvaluation();
        }
      },
      
      //change more or less evaluate
      changeShowEvaluate(){
        this.showMoreEvaluate = !this.showMoreEvaluate;

        if(this.showMoreEvaluate == false)
        {
          this.itemsPerPage = 5;
        }
        else
        {
          this.itemsPerPage = this.course.courseEvaluations.length;
        }
      },

      //click subImage in page detail change main Image
      changeImage(newImageUrl) {
        this.course.urlImage = newImageUrl;
      },
    },
    computed: {
      displayedEvaluations() {
        const start = (this.currentPage - 1) * this.itemsPerPage;
        const end = start + this.itemsPerPage;
        return this.course.courseEvaluations.slice(start, end);
      },
      pages() {
        return Math.ceil(this.course.courseEvaluations.length / this.itemsPerPage);
      },
    },
    data() {
      return {
        formData: {
          courseID: 1,
          comment: '',
          rate: 1,
          userID: 1,
        },
        showMoreEvaluate: false,
        currentPage: 1,
        itemsPerPage: 5,
      };
    },
    watch: {},
    name: "DetailCourse",
    components: {},
  };
</script>
