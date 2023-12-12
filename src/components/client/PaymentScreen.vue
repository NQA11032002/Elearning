<template>
  <div class=" text-slate-600 flex lg:w-2/3 mx-auto gap-6 h-full py-5 max-sm:flex-col max-sm:w-full max-sm:px-5 md:w-10/12">
    <div class="border-r lg:w-1/3 border-slate-700 flex flex-col gap-5 pr-5 max-sm:flex-col max-sm:w-full max-sm:pr-0 max-sm:border-r-0">
      <div class="border-b border-slate-700 pb-4">
        <h3 class="text-xl font-semibold text-slate-700 max-sm:text-lg max-sm:text-center">Đang chờ thanh toán</h3>
        <p class="text-center text-2xl font-medium mt-3 text-slate-700">04:42</p>
      </div>

      <div class="border-b border-slate-700 pb-4 flex flex-col gap-3">
        <p class="font-medium text-slate-700">Tên khóa học: <label for="" class="pl-1 text-orange-400 font-medium">HTML PRO</label></p>
        <p class="font-medium text-slate-700">Mã đơn hàng: <label class="pl-1 text-orange-400 font-medium" for="">FBC1X29L</label></p>
      </div>

      <div class="flex border-b border-slate-700 pb-4">
        <input type="text" class="rounded-md py-2 px-4 w-full text-sm bg-slate-600 outline-none  text-gray-100" placeholder="Nhập mã khuyến mãi" />

        <button class="border rounded-md text-sm text-gray-300 ml-3 text-center outline-none w-32 bg-neutral-800 border-slate-500 px-4 cursor-pointer">ÁP DỤNG</button>
      </div>

      <div>
        <h1 class="text-xl font-semibold text-slate-700 mb-2 max-sm:text-lg">Chi tiết thanh toán</h1>

        <div class=" bg-neutral-800 p-3 rounded-lg py-5 shadow-lg">
          <div class="flex justify-between border-b border-slate-700 pb-5">
            <p class="flex-shrink-0 font-medium text-gray-300">Giá bán: </p>
            <div class="flex-1 flex justify-end gap-3">
              <p class="text-sm line-through text-gray-300">2.500.000đ</p>
              <p class="text-sky-300">1.299.00đ</p>
            </div>
          </div>

          <div class="flex justify-between pt-5">
            <p class="font-medium text-gray-300">Tổng tiền:</p>
            <h3 class="text-xl text-sky-300">1.299.000đ</h3>
          </div>
        </div>
      </div>
    </div>

    <div >
      <div class="flex flex-col gap-5">
        <div>
          <h1 class="text-xl font-semibold text-slate-700 max-sm:text-lg">Chuyển khoản bằng QR</h1>
          <div class="flex items-center justify-center gap-5 max-sm:flex-col max-sm:gap-0">
            <img
              class="w-36 h-36 object-cover rounded-lg my-4"
              src="https://i.vdoc.vn/data/image/2017/11/23/cach-tao-ma-qr-code.png"
              alt=""
            />

            <div class="flex flex-col gap-3">
              <p class="text-sm">Bước 1: Mở app ngân hàng và quét mã QR</p>
              <p class="text-sm">
                Bước 2: Đảm bảo nội dung chuyển khoản là
                <label for="" class="text-orange-400">F8C1X29L</label>
              </p>
              <p class="text-sm">Bước 3: Thực hiện thanh toán.</p>
            </div>
          </div>
        </div>

        <div class="">
          <h1 class="text-xl font-semibold text-slate-700 max-sm:text-lg">Chuyển khoản thủ công</h1>
          <div class="flex flex-wrap gap-5 w-full mt-3">
            <div class="w-1/3 bg-neutral-800 p-3 rounded-lg max-sm:w-full">
              <p class="text-gray-400 text-sm">Số tài khoản</p>
              <div class="flex justify-between items-center  mt-2">
                <p class="text-gray-200">9353538222</p>
                <img class="cursor-grab hover:opacity-80" src="https://fullstack.edu.vn/static/media/clone.d2ecd3252b355d732cabb677ec33e5c6.svg" alt="">
              </div>
            </div>

            <div class="w-1/3 bg-neutral-800 p-3 rounded-lg max-sm:w-full">
              <p class="text-sm text-gray-400">Tên tài khoản</p>
              <div class="mt-2">
                <h1 class="font-medium text-gray-200">ĐẶNG NGỌC SƠN</h1>
              </div>
            </div>

            <div class="w-1/3 bg-neutral-800 p-3 rounded-lg max-sm:w-full">
              <p class="text-sm text-gray-400">Nội dung</p>
              <div class="flex justify-between items-center mt-2">
                <p class="text-orange-400">F8C1X29L</p>
                <img class="cursor-grab hover:opacity-80" src="https://fullstack.edu.vn/static/media/clone.d2ecd3252b355d732cabb677ec33e5c6.svg" alt="">
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
          <p class="text-sm">Tối đa 5 phút sau thời gian chuyển khoản, nếu hệ thống không phản hồi vui lòng liên hệ ngay bộ phận hỗ trợ của F8.</p>

          <div class="flex items-center gap-2">
            <img src="https://fullstack.edu.vn/static/media/phone.0c60754adb11aa1f42791f4b80423f6d.svg" alt="">
            <p class="text-sm">0246.329.1102</p>
          </div>
          
          <div class="flex items-center gap-2">
            <img src="	https://fullstack.edu.vn/static/media/envelope.e7b59ce57be76a9435865a20e7021f56.svg" alt="">
            <p class="text-sm">contact@fullstack.edu.vn</p>
          </div>

          <div class="flex items-center gap-2">
            <img src="https://fullstack.edu.vn/static/media/map-location.d448ea4630d95df7331a9b1162a39a8f.svg" alt="">
            <p class="text-sm">Số 11D, lô A10, khu đô thị Nam Trung Yên, Phường Yên Hòa, Quận Cầu Giấy, TP. Hà Nội</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
