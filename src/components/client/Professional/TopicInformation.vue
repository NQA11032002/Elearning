<template>
    <div class="w-2/3 m-auto max-sm:w-full max-sm:px-5 sm:px-3 lg:px-0 mt-14">
        <div class="w-full flex my-5 max-sm:flex-col">
            <sidebarteacher-screen></sidebarteacher-screen>
            <div class="ml-6 w-4/5 max-sm:mt-4 bg-white max-sm:w-full max-sm:ml-0">
                <div class="p-4">
                    <p class="text-3xl font-semibold flex justify-center text-blue-900">Thông tin chuyên đề</p>
                </div>
                <div class="flex justify-between max-sm:flex-col shadow-md">
                    <div class="w-full flex flex-col justify-center max-sm:w-full max-sm:p-2" style="margin-left: 50%; transform: translateX(-50%);">
                        <span class="py-2 font-semibold">Mã khóa học:</span>
                        <input class="outline-none border px-2 border-blue-900 w-full h-8 rounded max-sm:w-full" type="text" placeholder="Mã khóa học:">
        
                        <span class="py-2 font-semibold">Tên chuyên đề: (Số chuyên đề được phép <span class="text-red-500">2</span> )</span>
                        <input class="outline-none border px-2 border-blue-900 w-full h-8 rounded max-sm:w-full" type="text" placeholder="Tên chuyên đề:">
        
                        <span class="py-2 font-semibold">Bài giảng:</span>
                        <input class="outline-none border px-2 border-blue-900 w-full h-8 rounded max-sm:w-full" type="number" placeholder="Bài giảng">
    
                        <div class="flex justify-end w-full my-4 max-sm:w-full">
                            <button class="bg-gray-400  text-white p-2 w-1/5 mr-4 rounded text-sm max-sm:mr-2">Hủy</button>
                            <button class="bg-blue-900 text-white p-2 w-2/5 rounded text-sm max-sm:mr-0">Lưu chuyên đề</button>
                        </div>
    
                        
                    </div>
                </div>
                
            </div>
            
        </div>
    </div>
    
</template>
<script>
import SidebarteacherScreen from './SidebarteacherScreen.vue';

export default {
    components: {
        SidebarteacherScreen,
    },
};
</script>