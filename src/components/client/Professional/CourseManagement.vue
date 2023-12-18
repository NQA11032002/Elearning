<template>
    <div class="w-2/3 m-auto max-sm:w-full max-sm:px-5 sm:px-3 lg:px-0 mt-14">
        <div class="w-full flex my-5 max-sm:flex-col">
            <sidebarteacher-screen></sidebarteacher-screen>
            <div class="ml-6 w-4/5 max-sm:mt-4 bg-white max-sm:w-full max-sm:ml-0">
                <div class="p-4">
                    <p class="text-xl font-semibold">Thông tin khóa học</p>
                </div>
                <div class="flex justify-between max-sm:flex-col shadow-md">
                    <div class="w-1/3 text-center p-2 max-sm:w-full">
                        <div class="flex justify-center w-full mb-4 mt-10">
                            <img class="object-cover w-40 h-40 rounded-full" src="../../../assets/images/client/avatars/1.png" alt="">
                            <input type="file" hidden id="selectfile">
                        </div>
                        <label class="text-center cursor-pointer bg-blue-900 text-white rounded p-2" for="selectfile">Chọn ảnh</label>  
        
                    </div>
                    <div class="w-2/3 flex flex-col justify-center max-sm:w-full max-sm:p-2 ">
                        <span class="py-2">Tiêu đề:</span>
                        <input class="outline-none border px-2 border-blue-900 w-2/3 h-8 rounded max-sm:w-full" type="text" placeholder="Tiêu đề:">
        
                        <span class="py-2">Người giảng:</span>
                        <input class="outline-none border px-2 border-blue-900 w-2/3 h-8 rounded max-sm:w-full" type="text" placeholder="Người giảng:">
        
                        <span class="py-2">Giá khóa học:</span>
                        <input class="outline-none border px-2 border-blue-900 w-2/3 h-8 rounded max-sm:w-full" type="number" placeholder="Giá khóa học">
        
                        <span class="py-2">Mô tả khóa học:</span>
                        <textarea class="resize-none outline-none border px-2 border-blue-900 max-sm:w-full w-2/3 rounded" name="" id="" cols="30" rows="10" placeholder="Mô tả khóa học:"></textarea>
        
                        <span class="py-2">Số lượng chuyên đề:</span>
                        <input class="outline-none border px-2 border-blue-900 w-2/3 h-8 rounded max-sm:w-full" type="number" placeholder="Số lượng chuyên đề:">
    
                        <div class="flex justify-end w-2/3 my-4 max-sm:w-full">
                            <button class="bg-gray-400  text-white p-2 w-1/5 mr-4 rounded text-sm max-sm:mr-2">Hủy</button>
                            <button class="bg-blue-900 text-white p-2 w-2/5 rounded text-sm max-sm:mr-0">Lưu khóa học</button>
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