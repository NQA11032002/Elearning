<template>
  <div class="home">
    <section class="banner relative">
      <div class="banner__img">
        <div class="banner__content absolute">
          <h1 class="font-semibold">ACADEMYLINK GROUP</h1>
          <h5 class="font-semibold mt-3 mb-3">
            TỰ HÀO LÀ MỘT NỀN TẢNG GIÁO DỤC TRỰC TUYẾN TẠI VIỆT NAM
          </h5>
          <p class="mb-8">
            Với hơn 7 năm kinh nghiệm trong việc phát triển giáo dục trực tuyến
          </p>
          <a href="" class="navigate__link">Tìm khóa học</a>
        </div>
      </div>
    </section>

    <section class="contents">
      <div class="purposes m-auto">
        <h1 class="title text-center font-semibold m-6">Sứ mệnh AcademyLink</h1>
        <div class="sub_purpose grid grid-flow-col">
          <p class="content--left font-semibold">
            Bạn đồng hành vững tin trên con đường chinh phục tri thức.
          </p>

          <div>
            <p class="content--right mb-6">
              Người học là trung tâm - nhu cầu của từng học viên là trọng tâm
              cho mỗi sự phát triển của ACADEMYLINK. Chúng tôi sẽ đem đến cho
              bạn các khóa học chất lượng bởi các chuyên gia có chuyên môn và
              kinh nghiệm trong lĩnh vực của họ. Cung cấp công nghệ học trực
              tuyến tiên tiến hàng đầu tại Việt Nam.
            </p>
            <img src="../../assets/images/client/purpose.png" alt="" />
          </div>
        </div>

        <div class="purpose_card mt-6">
          <p class="font-semibold w-1/2 mb-6 purpose__title">
            ACADEMYLINK tự hào mang đến phương pháp học tập tân tiến và chuẩn
            quốc tế đến cho học viên
          </p>

          <div class="cards flex justify-center">
            <div
              class="card h-40 w-40 text-center flex flex-col justify-center"
            >
              <img
                class="ml-auto mr-auto mb-5"
                src="../../assets/images/client/card/icon_teach.png"
                alt=""
              />
              <h5 class="font-semibold">1,000+</h5>
              <p class="font-medium">Giảng viên chất lượng, chuyên môn</p>
            </div>

            <div
              class="card h-40 w-40 text-center flex flex-col justify-center"
            >
              <img
                class="ml-auto mr-auto mb-5"
                src="../../assets/images/client/card/ht-idea.png"
                alt=""
              />
              <h5 class="font-semibold">1,200+</h5>
              <p class="font-medium">Học viên theo học mỗi ngày</p>
            </div>

            <div
              class="card h-40 w-40 text-center flex flex-col justify-center"
            >
              <img
                class="ml-auto mr-auto mb-5"
                src="../../assets/images/client/card/icon_creative.png"
                alt=""
              />
              <h5 class="font-semibold">3,400+</h5>
              <p class="font-medium">Khoá học đa dạng phong phú</p>
            </div>

            <div
              class="card h-40 w-40 text-center flex flex-col justify-center"
            >
              <img
                class="ml-auto mr-auto mb-5"
                src="../../assets/images/client/card/icon_quality.png"
                alt=""
              />
              <h5 class="font-semibold">7+</h5>
              <p class="font-medium">Năm kinh nghiệm và chuyên môn</p>
            </div>
          </div>
        </div>
      </div>

      <div class="experts mt-9 mb-9">
        <h1 class="title text-center font-semibold m-6 pt-8">
          Các chuyên gia hàng đầu tại AcademyLink
        </h1>
        <div class="expert_sidebar m-auto flex justify-center">
          <i class="fa-solid fa-chevron-left"></i>
          <div class="cards flex">
            <div class="card h-60 w-56 text-center">
              <img
                class="m-auto"
                src="../../assets/images/client/avatars/1.png"
                alt=""
              />
              <p class="mt-3 mb-3 flex-1">Học căn bản HTML,CSS, React từ</p>
              <h5 class="font-semibold flex-shrink-0">Võ Duy Thanh</h5>
            </div>

            <div class="card h-60 w-56 text-center">
              <img
                class="m-auto"
                src="../../assets/images/client/avatars/1.png"
                alt=""
              />
              <p class="mt-3 mb-3 flex-1">Học căn bản HTML,CSS, React từ</p>
              <h5 class="font-semibold flex-shrink-0">Võ Duy Thanh</h5>
            </div>

            <div class="card h-60 w-56 text-center">
              <img
                class="m-auto"
                src="../../assets/images/client/avatars/2.png"
                alt=""
              />
              <p class="mt-3 mb-3 flex-1">Khóa học Backend Java, Spring Boot</p>
              <h5 class="font-semibold flex-shrink-0">Phùng Thái Học</h5>
            </div>

            <div class="card h-60 w-56 text-center">
              <img
                class="m-auto"
                src="../../assets/images/client/avatars/3.png"
                alt=""
              />
              <p class="mt-3 mb-3 flex-1">Khóa thiết kế Website WordPress</p>
              <h5 class="font-semibold flex-shrink-0">Võ Duy Trực</h5>
            </div>
          </div>
          <i class="fa-solid fa-chevron-right"></i>
        </div>
      </div>

      <div class="trending m-auto">
        <div class="title__container flex">
          <img src="../../assets/images/client/hot.png" alt="" />
          <h1 class="title font-semibold">Xu hướng 24h qua</h1>
        </div>

        <div class="courses flex">
          <i class="fa-solid fa-chevron-left"></i>
          <div class="cards mt-6 mb-10 flex">
            <div class="card">
              <img src="../../assets/images/client/courses/1.png" alt="" />

              <div class="card__content">
                <p class="card__title font-semibold">
                  Khóa học ReactJS cơ bản đến nâng cao dành cho người mới bắt
                  đầu
                </p>

                <div class="card__info flex justify-between">
                  <div class="flex">
                    <img
                      class="ml-auto mr-auto mt-5 mb-5"
                      src="../../assets/images/client/avatars/1.png"
                      alt=""
                    />
                    <p>Phùng Thái Học</p>
                  </div>

                  <img
                    src="../../assets/images/client/courses/hot.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div class="card">
              <img src="../../assets/images/client/courses/1.png" alt="" />
              <div class="card__content">
                <p class="card__title font-semibold">
                  Khóa học ReactJS cơ bản đến nâng cao dành cho người mới bắt
                  đầu
                </p>
                <div class="card__info flex justify-between">
                  <div class="flex">
                    <img
                      class="ml-auto mr-auto mt-5 mb-5"
                      src="../../assets/images/client/avatars/1.png"
                      alt=""
                    />
                    <p>Phùng Thái Học</p>
                  </div>

                  <img
                    src="../../assets/images/client/courses/hot.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            
            <div class="card">
              <img src="../../assets/images/client/courses/1.png" alt="" />

              <div class="card__content">
                <p class="card__title font-semibold">
                  Khóa học ReactJS cơ bản đến nâng cao dành cho người mới bắt
                  đầu
                </p>

                <div class="card__info flex justify-between">
                  <div class="flex">
                    <img
                      class="ml-auto mr-auto mt-5 mb-5"
                      src="../../assets/images/client/avatars/1.png"
                      alt=""
                    />
                    <p>Phùng Thái Học</p>
                  </div>

                  <img
                    src="../../assets/images/client/courses/hot.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <i class="fa-solid fa-chevron-right"></i>
        </div>

        <div class="title__container flex">
          <img src="../../assets/images/client/card/icon_creative.png" alt="" />
          <h1 class="title font-semibold">Khóa học khác</h1>
        </div>

        <div class="courses flex">
          <i class="fa-solid fa-chevron-left"></i>
          <div class="cards mt-6 mb-10 flex">
            <div class="card" v-for="course in courses" :key="course.id">
              <img :src="course.urlImage" alt="Course Image" />

              <div class="card__content">
                <p class="card__title font-semibold">
                  {{ course.title }}
                </p>

                <div class="card__info flex justify-between">
                  <div class="flex">
                    <img
                      class="ml-auto mr-auto mt-5 mb-5"
                      src="../../assets/images/client/avatars/1.png"
                      alt=""
                    />
                    <p>Phùng Thái Học</p>
                  </div>

                  <img
                    src="../../assets/images/client/courses/hot.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <i class="fa-solid fa-chevron-right"></i>
        </div>
      </div>

      <div class="about relative">
        <div class="about__container m-auto grid absolute">
          <img
            class="grid-cols-1"
            src="../../assets/images/client/about_1.png"
            alt=""
          />

          <div class="about__left grid-cols-2">
            <h1 class="font-semibold">
              Nâng cao kiến thức của bạn lên từng ngày, có kết quả tương xứng
              với chi phí bỏ ra
            </h1>
            <p>
              Tất cả kiến thức tại AcademyLink đều được review bởi đội ngũ
              chuyên gia có kinh nghiệm. Hãy chọn Expert hoặc Brand mà bạn tin
              tưởng & bắt đầu trải nghiệm. Bạn cũng có thể theo lời khuyến nghị
              của những cá nhân đã trải nghiệm trước đó, người bạn quen hoặc các
              KOLs để lựa chọn kiến thức phù hợp.
            </p>
          </div>

          <div class="about__right">
            <h1 class="font-semibold">
              Nâng cao kiến thức của bạn lên từng ngày, có kết quả tương xứng
              với chi phí bỏ ra
            </h1>
            <p>
              Xây dựng cộng đồng của riêng bạn & nhận lại không giới hạn giá
              trị. AcademyLink & hệ thống đối tác sẽ quảng bá kiến thức hữu ích
              tới hàng trăm ngàn cá nhân có nhu cầu cải thiện chuyên môn.
            </p>
          </div>

          <img src="../../assets/images/client/about_2.png" alt="" />

        </div>
      </div>
    </section>
  </div>
</template>

<script>
import "../../assets/styles/home.scss"

export default {
  props: ['courses'],

  watch: {},
  name: "App",
  components: {},
};
</script>
