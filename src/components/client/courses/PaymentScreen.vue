<template>
  <div v-if="course != null" :class="isPopup ? 'opacity-50' : ''"
    class="text-slate-600 flex lg:w-2/3 my-28 mx-auto gap-6 h-full py-5 max-sm:flex-col bg-white shadow-md rounded-lg px-5 max-sm:w-full max-sm:px-5 md:w-10/12">

    <div
      class="border-r lg:w-1/3 border-slate-700 flex flex-col gap-5 pr-5 max-sm:flex-col max-sm:w-full max-sm:pr-0 max-sm:border-r-0">
      <div class="border-b border-slate-700 pb-4">
        <h3 class="text-xl font-semibold text-slate-700 max-sm:text-lg max-sm:text-center">
          Đang chờ thanh toán
        </h3>
        <p class="text-center text-2xl font-medium mt-3 text-slate-700">
          {{ countdown }}
        </p>
      </div>

      <div class="border-b border-slate-700 pb-4 flex flex-col gap-3">
        <p class="font-medium text-slate-700">
          Tên khóa học:
          <label for="" class="pl-1 text-orange-400 font-medium">{{
            course.title
          }}</label>
        </p>
        <p class="font-medium text-slate-700">
          Mã đơn hàng:
          <label class="pl-1 text-orange-400 font-medium" for="">{{
            orderData.codeOrder
          }}</label>
        </p>
      </div>

      <div class="flex border-b border-slate-700 pb-4">
        <input type="text" class="rounded-md py-2 px-4 w-full text-sm bg-slate-600 outline-none text-gray-100"
          placeholder="Nhập mã khuyến mãi" />

        <button
          class="border rounded-md text-sm text-gray-300 ml-3 text-center outline-none bg-neutral-800 border-slate-500 w-44 cursor-pointer">
          ÁP DỤNG
        </button>
      </div>

      <div class="flex flex-col gap-5">
        <h1 class="text-xl font-semibold text-slate-700 max-sm:text-lg">
          Chi tiết thanh toán
        </h1>

        <div class="bg-neutral-800 p-3 rounded-lg py-5 shadow-lg">
          <div class="flex justify-between border-b border-slate-700 pb-5">
            <p class="flex-shrink-0 font-medium text-gray-300">Giá bán:</p>
            <div class="flex-1 flex justify-end gap-3">
              <p class="text-sm line-through text-gray-300">
                {{ convertToVND(course.price) }}
              </p>
              <p class="text-sky-300">
                {{
                  convertToVND(
                    course.price - course.price * (course.reduce / 100)
                  )
                }}
              </p>
            </div>
          </div>

          <div class="flex justify-between pt-5">
            <p class="font-medium text-gray-300">Tổng tiền:</p>
            <h3 class="text-xl text-sky-300">
              {{
                convertToVND(
                  course.price - course.price * (course.reduce / 100)
                )
              }}
            </h3>
          </div>
        </div>

        <div>
          <button @click="submitFormOrderCourse"
            class="bg-neutral-800 font-medium text-center hover:opacity-80 text-white text-sm w-full py-3 rounded-lg">
            THANH TOÁN
          </button>
        </div>
      </div>
    </div>

    <div>
      <div class="flex flex-col gap-5">
        <div>
          <h1 class="text-xl font-semibold text-slate-700 max-sm:text-lg">
            Chuyển khoản bằng QR
          </h1>
          <div class="flex items-center justify-center gap-5 max-sm:flex-col max-sm:gap-0">
            <img class="w-36 h-36 object-cover rounded-lg my-4"
              src="https://i.vdoc.vn/data/image/2017/11/23/cach-tao-ma-qr-code.png" alt="" />

            <div class="flex flex-col gap-3">
              <p class="text-sm">Bước 1: Mở app ngân hàng và quét mã QR</p>
              <p class="text-sm">
                Bước 2: Đảm bảo nội dung chuyển khoản là
                <label for="" class="text-orange-400">
                  {{ orderData.codeOrder }}</label>
              </p>
              <p class="text-sm">Bước 3: Thực hiện thanh toán.</p>
            </div>
          </div>
        </div>

        <div class="">
          <h1 class="text-xl font-semibold text-slate-700 max-sm:text-lg">
            Chuyển khoản thủ công
          </h1>
          <div class="flex flex-wrap gap-5 w-full mt-3">
            <div class="w-1/3 bg-neutral-800 p-3 rounded-lg max-sm:w-full">
              <p class="text-gray-400 text-sm">Số tài khoản</p>
              <div class="flex justify-between items-center mt-2">
                <p class="text-gray-200">9353538222</p>
                <img class="cursor-grab hover:opacity-80"
                  src="https://fullstack.edu.vn/static/media/clone.d2ecd3252b355d732cabb677ec33e5c6.svg" alt="" />
              </div>
            </div>

            <div class="w-1/3 bg-neutral-800 p-3 rounded-lg max-sm:w-full">
              <p class="text-sm text-gray-400">Tên tài khoản</p>
              <div class="mt-2">
                <h1 class="font-medium text-gray-200">HỒ QUỐC SƠN</h1>
              </div>
            </div>

            <div class="w-1/3 bg-neutral-800 p-3 rounded-lg max-sm:w-full">
              <p class="text-sm text-gray-400">Nội dung</p>
              <div class="flex justify-between items-center mt-2">
                <p class="text-orange-400">
                  {{ orderData.codeOrder }}
                </p>
                <img class="cursor-grab hover:opacity-80"
                  src="https://fullstack.edu.vn/static/media/clone.d2ecd3252b355d732cabb677ec33e5c6.svg" alt="" />
              </div>
            </div>

            <div class="w-1/3 bg-neutral-800 p-3 rounded-lg max-sm:w-full">
              <p class="text-sm text-gray-400">Chi nhánh</p>
              <div class="mt-2">
                <p class="text-gray-200">Vietcombank Hà Nội</p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-3">
          <h1 class="text-xl font-medium">Lưu ý</h1>
          <p class="text-sm">
            Tối đa 5 phút sau thời gian chuyển khoản, nếu hệ thống không phản
            hồi vui lòng liên hệ ngay bộ phận hỗ trợ của F8.
          </p>

          <div class="flex items-center gap-2">
            <img src="https://fullstack.edu.vn/static/media/phone.0c60754adb11aa1f42791f4b80423f6d.svg" alt="" />
            <p class="text-sm">0246.329.1102</p>
          </div>

          <div class="flex items-center gap-2">
            <img src="	https://fullstack.edu.vn/static/media/envelope.e7b59ce57be76a9435865a20e7021f56.svg" alt="" />
            <p class="text-sm">contact@fullstack.edu.vn</p>
          </div>

          <div class="flex items-center gap-2">
            <img src="https://fullstack.edu.vn/static/media/map-location.d448ea4630d95df7331a9b1162a39a8f.svg" />
            <p class="text-sm">
              Số 11D, lô A10, khu đô thị Nam Trung Yên, Phường Yên Hòa, Quận Cầu
              Giấy, TP. Hà Nội
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <PopupScreen v-if="isPopup" :contents="contents"></PopupScreen>
</template>
<script>
import { useRoute } from "vue-router";
import { ref } from "vue";
import axios from "axios";
import PopupScreen from "../common/PopupScreen.vue";
import { findApiByName } from "../../../assets/js/apiUtil.js";
import { auth } from "../../../assets/js/auth.js";

export default {
  mounted() {
    const isRegistered = async () => {
      try {
        //get url API
        const apiObject = findApiByName("order", "course").url;
        const res = await axios.get(apiObject, {
          params: {
            courseID: parseInt(this.orderData.courseID),
            userID: auth(),
          },
        });

        this.isRegistered = res.data;

        if (this.isRegistered) {
          this.isPopup = true;
        }
        else {
          this.isPopup = false;
        }

        if (!this.isRegistered) {
      // Convert initial time to seconds
      let timeInSeconds = this.convertTimeToSeconds(this.countdown);

      // Update the countdown every second
      this.interval = setInterval(() => {
        if (timeInSeconds > 0) {
          timeInSeconds--;
          this.countdown = this.convertSecondsToTime(timeInSeconds);

        } else {
          // Countdown reached zero, you can perform additional actions here
          clearInterval(this.interval);
          this.isPopup = true;

          // Change contents in the child component
          this.changeInfoPopup("Hết thời hạn thanh toán, vui lòng thử lại.!", "red-600", "fa-solid fa-circle-exclamation")
        }
      }, 1000);
    } else {
      clearInterval(this.interval);
      this.changeInfoPopup("Bạn đã đăng ký khóa học này. Vui lòng theo dõi tại trang khóa học của bạn", "red-600", "fa-solid fa-circle-exclamation");
    }
      } catch (error) {
        console.log(error);
      }
    };

    isRegistered();

  },
  setup() {
    const course = ref();
    const route = useRoute();
    const courseId = route.params.id;

    const getCourse = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8087/api/course/" + courseId
        );

        course.value = res.data.data;

        if (course.value.courseImages.length > 0) {
          course.value.urlImage = course.value.courseImages[0].urlImage;
        }
      } catch (error) {
        console.log(error);
      }
    };

    getCourse();

    return {
      course,
      getCourse,
    };
  },
  methods: {
    changeInfoPopup(title, color, content) {
      this.contents.title = title;
      this.contents.color = color;
      this.contents.icon = content;
    },
    convertToVND(price) {
      // Assuming amount is in the foreign currency
      return price.toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
      });
    },
    convertTimeToSeconds(time) {
      const [minutes, seconds] = time.split(":").map(Number);
      return minutes * 60 + seconds;
    },
    convertSecondsToTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${String(minutes).padStart(2, "0")}:${String(
        remainingSeconds
      ).padStart(2, "0")}`;
    },

    // submit order course
    async submitFormOrderCourse() {
      try {
        this.orderData.totalPrice =
          this.course.price - this.course.price * (this.course.reduce / 100);

        const res = await axios
          .post("http://localhost:8085/api/order", this.orderData)
          .then(async (data) => {
            if (data.status == 200) {
              this.paymentData.orderID = data.data.data.id;

              this.paymentData.paymentMethod = "Smart Banking Online";

              await axios
                .post("http://localhost:8085/api/payment", this.paymentData)
                .then(async () => {
                  this.orderData.status = "Đăng ký thành công";
                  await axios
                    .put(
                      "http://localhost:8085/api/order/" + data.data.data.id,
                      this.orderData
                    )
                    .then(async (response) => {
                      if (response.status == 200) {
                        clearInterval(this.interval);

                        this.changeInfoPopup("Đăng ký khóa học thành công. Vui lòng theo dõi khóa học tại trang khóa học của bạn.!!!", "green-500", "fa-regular fa-circle-check")
                        this.isPopup = true;
                        this.isRegistered = true;
                      }
                    });
                });
            }
          });
        return res;
      } catch (error) {
        console.log(error);
      }
    },
  },

  data() {
    return {
      isRegistered: false,
      paymentData: {
        orderID: 0,
        paymentMethod: "",
      },
      interval: null,
      countdown: "05:00",
      orderData: {
        userID: auth(),
        courseID: this.$route.params.id,
        totalPrice: 0,
        codeOrder:
          Math.random().toString(36).substring(2, 10) +
          "-" +
          this.$route.params.id +
          "-" +
          auth(),
        status: "Đang xử lý",
      },
      isPopup: false,
      contents: {
        title: "Bạn đã đăng ký khóa học này. Vui lòng theo dõi tại trang khóa học của bạn",
        status: true,
        color: "red-600",
        icon: "fa-solid fa-circle-exclamation"
      },
    };
  },
  beforeUnmount() {
    clearInterval(this.interval); // Clear the interval to prevent memory leaks
  },
  components: {
    PopupScreen,
  },
  name: "PaymentScreen",
};
</script>
