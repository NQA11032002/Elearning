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
                    <p class="text-2xl font-semibold w-full text-center text-blue-900">Quản lý khóa học</p>
                </div>
                <div class="w-full">
                    <div class="flex gap-5 w-full mb-4 max-sm:flex-col cursor-pointer px-2">
                        <div class="">
                            <img class="object-cover w-48 h-36 max-sm:w-full" src="../../../assets/images/client/courses/1.png" alt="">
                        </div>
                        <div class="flex flex-col gap-3 w-2/3 max-sm:w-full ">
                            <h2 class="font-semibold text-xl text-blue-900">Khóa học react cho người mới bắt đầu</h2>
                            <div class="">
                                <span class="font-medium pr-4">Chuyên đề: 2</span>
                                <span class="font-medium">Bài giảng: 4</span>
                            </div>
                            <div class="flex max-sm:w-full gap-5">
                                <span class="text-red-500 font-semibold ">Giá: 499.000</span>
                                <span class="text-gray-400 font-semibold line-through">599.000</span>
                            </div>
                            <div class="">
                                <a href="" class="bg-blue-900 text-white p-2 px-4 rounded-md">
                                    Chi tiết
                                </a>
                            </div>
                        </div>
                        
                    </div>
                    
    
                    <div class="">
                        <div class="flex justify-between px-2 bg-blue-900 p-2 mx-2">
                            <h3 class="mx-2 text-white font-semibold">Chuyên đề</h3>
                            <i class="fa-solid fa-circle-plus flex items-center text-white text-xl cursor-pointer"></i>
                        </div>
                        
                        <div class="px-3">
                            <!-- Khi chưa có khóa học -->
                            <div class="p-20 text-center hidden">
                                <span class=" text-blue-900 text-4xl leading-snug">
                                    Khóa học này hiện tại chưa được có thông tin chuyên đề và bài giảng, vui lòng thêm đầy đủ để chúng tôi duyệt
                                </span>
                            </div>
    
                            <!-- Khi có khóa học -->
                            <div class="mt-2 h-full">
                                <div class="flex justify-between p-2 bg-gray-100 h-full">
                                    <div class="">
                                        <h3 class="font-semibold text-blue-900">Chuyên đề 1: Phân tích dữ liệu</h3>
                                        <div class="">
                                            <span class="text-blue-900 mr-2">Bài giảng: 2</span>
                                            <i class="fa-solid fa-circle-plus text-blue-900 text-base cursor-pointer"></i>
                                        </div>
                                    </div>
                                    <div class="h-full cursor-pointer flex justify-center">  
                                        <i class="fa-solid fa-chevron-down text-2xl flex items-center text-blue-900"></i>
                                    </div>
                                </div>
                                <div class="p-2 flex flex-col gap-3 ml-3">
                                    <div class="flex justify-between border-b border-b-gray-200 pb-4 last:border-b-0 w-full">
                                        <div class="flex flex-col w-2/4">
                                            <span class="font-black truncate">1. Làm thế nào để khi gặp dữ liệu lớn</span>
                                            <span class="text-gray-400">01:30:43</span>
                                        </div>
                                        <div class="flex gap-2">
                                            <button class="text-blue-900 px-4 rounded-md transition-all"><i class="fa-regular fa-pen-to-square pr-1"></i> <span class="max-sm:hidden"> Chỉnh sửa</span></button>
                                            <button class="text-blue-900"><i class="fa-regular fa-eye pr-1"></i> <span class="max-sm:hidden">Xem ngay</span></button>
                                        </div>
                                    </div>
                                    
                                    <div class="flex justify-between border-b border-b-gray-200 pb-4 last:border-b-0 w-full">
                                        <div class="flex flex-col w-2/4">
                                            <span class="font-black truncate">1. Làm thế nào để khi gặp dữ liệu lớn</span>
                                            <span class="text-gray-400">01:30:43</span>
                                        </div>
                                        <div class="flex gap-2">
                                            <button class="text-blue-900 px-4 rounded-md transition-all"><i class="fa-regular fa-pen-to-square pr-1"></i> <span class="max-sm:hidden"> Chỉnh sửa</span></button>
                                            <button class="text-blue-900"><i class="fa-regular fa-eye pr-1"></i> <span class="max-sm:hidden">Xem ngay</span></button>
                                        </div>
                                    </div>
    
                                    <div class="flex justify-between border-b border-b-gray-200 pb-4 last:border-b-0 w-full">
                                        <div class="flex flex-col w-2/4">
                                            <span class="font-black truncate">1. Làm thế nào để khi gặp dữ liệu lớn</span>
                                            <span class="text-gray-400">01:30:43</span>
                                        </div>
                                        <div class="flex gap-2">
                                            <button class="text-blue-900 px-4 rounded-md transition-all"><i class="fa-regular fa-pen-to-square pr-1"></i> <span class="max-sm:hidden"> Chỉnh sửa</span></button>
                                            <button class="text-blue-900"><i class="fa-regular fa-eye pr-1"></i> <span class="max-sm:hidden">Xem ngay</span></button>
                                        </div>
                                    </div>
    
                                </div>
                                
                            </div>
                        </div>
    
                        <div class="px-3">
                            <!-- Khi chưa có khóa học -->
                            <div class="p-20 text-center hidden">
                                <span class=" text-blue-900 text-4xl leading-snug">
                                    Khóa học này hiện tại chưa được có thông tin chuyên đề và bài giảng, vui lòng thêm đầy đủ để chúng tôi duyệt
                                </span>
                            </div>
    
                            <!-- Khi có khóa học -->
                            <div class="mt-2 h-full">
                                <div class="flex justify-between p-2 bg-gray-100 h-full">
                                    <div class="">
                                        <h3 class="font-semibold text-blue-900">Chuyên đề 1: Phân tích dữ liệu</h3>
                                        <div class="">
                                            <span class="text-blue-900 mr-2">Bài giảng: 2</span>
                                            <i class="fa-solid fa-circle-plus text-blue-900 text-base cursor-pointer"></i>
                                        </div>
                                    </div>
                                    <div class="h-full cursor-pointer flex justify-center">  
                                        <i class="fa-solid fa-chevron-down text-2xl flex items-center text-blue-900"></i>
                                    </div>
                                </div>
                                <div class="p-2 flex flex-col gap-3 ml-3">
                                    <div class="flex justify-between border-b border-b-gray-200 pb-4 last:border-b-0 w-full">
                                        <div class="flex flex-col w-2/4">
                                            <span class="font-black truncate">1. Làm thế nào để khi gặp dữ liệu lớn</span>
                                            <span class="text-gray-400">01:30:43</span>
                                        </div>
                                        <div class="flex gap-2">
                                            <button class="text-blue-900 px-4 rounded-md transition-all"><i class="fa-regular fa-pen-to-square pr-1"></i> <span class="max-sm:hidden"> Chỉnh sửa</span></button>
                                            <button class="text-blue-900"><i class="fa-regular fa-eye pr-1"></i> <span class="max-sm:hidden">Xem ngay</span></button>
                                        </div>
                                    </div>
                                    
                                    <div class="flex justify-between border-b border-b-gray-200 pb-4 last:border-b-0 w-full">
                                        <div class="flex flex-col w-2/4">
                                            <span class="font-black truncate">1. Làm thế nào để khi gặp dữ liệu lớn</span>
                                            <span class="text-gray-400">01:30:43</span>
                                        </div>
                                        <div class="flex gap-2">
                                            <button class="text-blue-900 px-4 rounded-md transition-all"><i class="fa-regular fa-pen-to-square pr-1"></i> <span class="max-sm:hidden"> Chỉnh sửa</span></button>
                                            <button class="text-blue-900"><i class="fa-regular fa-eye pr-1"></i> <span class="max-sm:hidden">Xem ngay</span></button>
                                        </div>
                                    </div>
    
                                    <div class="flex justify-between border-b border-b-gray-200 pb-4 last:border-b-0 w-full">
                                        <div class="flex flex-col w-2/4">
                                            <span class="font-black truncate">1. Làm thế nào để khi gặp dữ liệu lớn</span>
                                            <span class="text-gray-400">01:30:43</span>
                                        </div>
                                        <div class="flex gap-2">
                                            <button class="text-blue-900 px-4 rounded-md transition-all"><i class="fa-regular fa-pen-to-square pr-1"></i> <span class="max-sm:hidden"> Chỉnh sửa</span></button>
                                            <button class="text-blue-900"><i class="fa-regular fa-eye pr-1"></i> <span class="max-sm:hidden">Xem ngay</span></button>
                                        </div>
                                    </div>
    
                                </div>
                                
                            </div>
                        </div>
    
                        <div class="px-3">
                            <!-- Khi chưa có khóa học -->
                            <div class="p-20 text-center hidden">
                                <span class=" text-blue-900 text-4xl leading-snug">
                                    Khóa học này hiện tại chưa được có thông tin chuyên đề và bài giảng, vui lòng thêm đầy đủ để chúng tôi duyệt
                                </span>
                            </div>
    
                            <!-- Khi có khóa học -->
                            <div class="mt-2 h-full">
                                <div class="flex justify-between p-2 bg-gray-100 h-full">
                                    <div class="">
                                        <h3 class="font-semibold text-blue-900">Chuyên đề 1: Phân tích dữ liệu</h3>
                                        <div class="">
                                            <span class="text-blue-900 mr-2">Bài giảng: 2</span>
                                            <i class="fa-solid fa-circle-plus text-blue-900 text-base cursor-pointer"></i>
                                        </div>
                                    </div>
                                    <div class="h-full cursor-pointer flex justify-center">  
                                        <i class="fa-solid fa-chevron-down text-2xl flex items-center text-blue-900"></i>
                                    </div>
                                </div>
                                <div class="p-2 flex flex-col gap-3 ml-3">
                                    <div class="flex justify-between border-b border-b-gray-200 pb-4 last:border-b-0 w-full">
                                        <div class="flex flex-col w-2/4">
                                            <span class="font-black truncate">1. Làm thế nào để khi gặp dữ liệu lớn</span>
                                            <span class="text-gray-400">01:30:43</span>
                                        </div>
                                        <div class="flex gap-2">
                                            <button class="text-blue-900 px-4 rounded-md transition-all"><i class="fa-regular fa-pen-to-square pr-1"></i> <span class="max-sm:hidden"> Chỉnh sửa</span></button>
                                            <button class="text-blue-900"><i class="fa-regular fa-eye pr-1"></i> <span class="max-sm:hidden">Xem ngay</span></button>
                                        </div>
                                    </div>
                                    
                                    <div class="flex justify-between border-b border-b-gray-200 pb-4 last:border-b-0 w-full">
                                        <div class="flex flex-col w-2/4">
                                            <span class="font-black truncate">1. Làm thế nào để khi gặp dữ liệu lớn</span>
                                            <span class="text-gray-400">01:30:43</span>
                                        </div>
                                        <div class="flex gap-2">
                                            <button class="text-blue-900 px-4 rounded-md transition-all"><i class="fa-regular fa-pen-to-square pr-1"></i> <span class="max-sm:hidden"> Chỉnh sửa</span></button>
                                            <button class="text-blue-900"><i class="fa-regular fa-eye pr-1"></i> <span class="max-sm:hidden">Xem ngay</span></button>
                                        </div>
                                    </div>
    
                                    <div class="flex justify-between border-b border-b-gray-200 pb-4 last:border-b-0 w-full">
                                        <div class="flex flex-col w-2/4">
                                            <span class="font-black truncate">1. Làm thế nào để khi gặp dữ liệu lớn</span>
                                            <span class="text-gray-400">01:30:43</span>
                                        </div>
                                        <div class="flex gap-2">
                                            <button class="text-blue-900 px-4 rounded-md transition-all"><i class="fa-regular fa-pen-to-square pr-1"></i> <span class="max-sm:hidden"> Chỉnh sửa</span></button>
                                            <button class="text-blue-900"><i class="fa-regular fa-eye pr-1"></i> <span class="max-sm:hidden">Xem ngay</span></button>
                                        </div>
                                    </div>
    
                                </div>
                                
                            </div>
                        </div>
                    </div>
    
                    
                    
                </div>
            </div>
            
        </div>
    </div>
    
</template>