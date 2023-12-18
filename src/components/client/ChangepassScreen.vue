<script>
import SidebarmemberScreen from './SidebarmemberScreen.vue';

export default {
    components: {
        SidebarmemberScreen,
    },
};
</script>
<template>
    <div class="w-full flex my-5 max-sm:flex-col">
        <sidebarmember-screen></sidebarmember-screen>
        <div class="ml-6 w-4/5 max-sm:mt-4 bg-white max-sm:w-full max-sm:ml-0 shadow-md">
            <div class="p-4">
                <p class="text-xl font-semibold">Đổi mật khẩu</p>
                <span class="text-gray-500 text-sm">Cập nhật mật khẩu</span>
            </div>
            <div class="w-full flex justify-center rounded-xl py-12 px-40 max-sm:px-0 mb border-b border-gray-100 max-sm:flex-col max-sm:py-6">
                <div class="flex flex-col w-80 max-sm:w-full max-sm:px-2 max-sm:flex max-sm:justify-center">
                    <span class="font-semibold">Mật khẩu cũ</span>
                    <input class="outline-none border border-blue-900 mb-4 p-2 rounded-md" type="password" placeholder="Nhập mật khẩu cũ">
                    <span class="font-semibold">Mật khẩu mới</span>
                    <input class="outline-none border border-blue-900 mb-4 p-2 rounded-md" type="password" placeholder="Nhập mật khẩu mới">
                    <span class="font-semibold">Nhập lại mật khẩu mới</span>
                    <input class="outline-none border border-blue-900 mb-2 p-2 rounded-md" type="password" placeholder="Nhập lại mật khẩu mới">
                    <span class="text-red-600 mb-4 ">Đổi mật khẩu thất bại</span>
                    <button class="bg-blue-900 text-white p-2 rounded-md">Đổi mật khẩu</button>
                </div>
            </div>
        </div>
    </div>
</template>