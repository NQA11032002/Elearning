<script>
import SidebarteacherScreen from './SidebarteacherScreen.vue';

export default {
    components: {
        SidebarteacherScreen,
    },
};
</script>
<template>
    <div class="w-2/3 m-auto max-sm:w-full max-sm:px-5 sm:px-3 lg:px-0 mt-14"> 
        <div class="w-full flex my-5 max-sm:flex-col">
            <sidebarteacher-screen></sidebarteacher-screen>
            <div class="ml-6 w-4/5 max-sm:mt-4 bg-white max-sm:w-full max-sm:ml-0 shadow-md">
                <div class="p-4">
                    <p class="text-xl font-semibold">Quản lý khóa học</p>
                </div>
                <div class="w-full max-sm:px-4">
                    <div class="w-full text-right">
                        <button class="bg-blue-900 text-white p-2 mr-4 mb-4 rounded text-sm max-sm:mr-0">Thêm khóa học</button>
                    </div>
                    <div class="flex shadow-md w-full mb-4 max-sm:flex-col max-sm:px-2 cursor-pointer">
                        <div class="">
                            <img class="object-cover w-60 h-48 max-sm:w-full" src="../../../assets/images/client/courses/1.png" alt="">
                        </div>
                        <div class="w-2/3 max-sm:w-full">
                            <h2 class="p-2 font-semibold text-lg">Khóa học react cho người mới bắt đầu</h2>
                            <div class="flex px-2 mb-2">
                                <img class="object-cover h-8 w-8" src="../../../assets/images/client/avatars/1.png" alt="">
                                <span class="ml-2 flex items-center">Hồ Quang Đạt</span>
                            </div>
                            <span class="px-2 text-gray-300 flex text-center">Khóa học phân tích và thiết kế web theo react</span>
                        </div>
                        <div class="py-2 text-right w-1/3 flex flex-col max-sm:w-full max-sm:justify-center">
                            <span class="text-red-500 mr-4 font-semibold max-sm:flex max-sm:justify-center">Giá: 499.000</span>
                            <div class="flex items-end h-full justify-end mr-4 max-sm:mr-0">
                                <button class="bg-blue-900 text-white p-2 mr-4 rounded w-2/5 max-sm:w-1/2">Chỉnh sửa</button>
                                <button class="bg-green-900 text-white p-2 rounded w-2/5 max-sm:w-1/2">Chi tiết</button>
                            </div>
                        </div>
                    </div>
    
                    <div class="flex shadow-md w-full mb-4 max-sm:flex-col max-sm:px-2 cursor-pointer">
                        <div class="">
                            <img class="object-cover w-60 h-48 max-sm:w-full" src="../../../assets/images/client/courses/1.png" alt="">
                        </div>
                        <div class="w-2/3 max-sm:w-full">
                            <h2 class="p-2 font-semibold text-lg">Khóa học react cho người mới bắt đầu</h2>
                            <div class="flex px-2 mb-2">
                                <img class="object-cover h-8 w-8" src="../../../assets/images/client/avatars/1.png" alt="">
                                <span class="ml-2 flex items-center">Hồ Quang Đạt</span>
                            </div>
                            <span class="px-2 text-gray-300 flex text-center">Khóa học phân tích và thiết kế web theo react</span>
                        </div>
                        <div class="py-2 text-right w-1/3 flex flex-col max-sm:w-full max-sm:justify-center">
                            <span class="text-red-500 mr-4 font-semibold max-sm:flex max-sm:justify-center">Giá: 499.000</span>
                            <div class="flex items-end h-full justify-end mr-4 max-sm:mr-0">
                                <button class="bg-blue-900 text-white p-2 mr-4 rounded w-2/5 max-sm:w-1/2">Chỉnh sửa</button>
                                <button class="bg-green-900 text-white p-2 rounded w-2/5 max-sm:w-1/2">Chi tiết</button>
                            </div>
                        </div>
                    </div>
    
                    <div class="flex shadow-md w-full mb-4 max-sm:flex-col max-sm:px-2 cursor-pointer">
                        <div class="">
                            <img class="object-cover w-60 h-48 max-sm:w-full" src="../../../assets/images/client/courses/1.png" alt="">
                        </div>
                        <div class="w-2/3 max-sm:w-full">
                            <h2 class="p-2 font-semibold text-lg">Khóa học react cho người mới bắt đầu</h2>
                            <div class="flex px-2 mb-2">
                                <img class="object-cover h-8 w-8" src="../../../assets/images/client/avatars/1.png" alt="">
                                <span class="ml-2 flex items-center">Hồ Quang Đạt</span>
                            </div>
                            <span class="px-2 text-gray-300 flex text-center">Khóa học phân tích và thiết kế web theo react</span>
                        </div>
                        <div class="py-2 text-right w-1/3 flex flex-col max-sm:w-full max-sm:justify-center">
                            <span class="text-red-500 mr-4 font-semibold max-sm:flex max-sm:justify-center">Giá: 499.000</span>
                            <div class="flex items-end h-full justify-end mr-4 max-sm:mr-0">
                                <button class="bg-blue-900 text-white p-2 mr-4 rounded w-2/5 max-sm:w-1/2">Chỉnh sửa</button>
                                <button class="bg-green-900 text-white p-2 rounded w-2/5 max-sm:w-1/2">Chi tiết</button>
                            </div>
                        </div>
                    </div>
    
                </div>
            </div>
            
        </div>
    </div>
    
</template>
