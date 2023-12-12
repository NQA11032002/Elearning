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
        <div class="ml-6 w-4/5 max-sm:mt-4 bg-white max-sm:w-full max-sm:ml-0">
            <div class="p-4">
                <p class="text-xl font-semibold">Kích hoạt mã</p>
                
            </div>
            <div class="w-full rounded-xl flex justify-center flex-col py-12 px-40 mb border-b border-gray-100 max-sm:flex-col max-sm:py-6 max-sm:px-4">
                <div class="flex flex-col text-center">
                    <span class="font-semibold text-3xl max-sm:text-xl text-blue-900">KÍCH HOẠT MÃ</span>
                    <span class="text-blue-900 my-4 font-medium max-sm:text-sm">Sử dụng cho mã E-Code hoặc mã E-Voucher</span>
                </div>
                <div class="max-sm:w-full flex justify-center max-sm:justify-center max-sm:mb-4">
                    <img class="w-40 h-40 rounded-full object-cover max-sm:w-24 max-sm:h-24" src="../../assets/images/client/avatars/1.png" alt="">
                </div>
                <div class="text-center mt-4">
                    <input class="outline-none border border-blue-900 p-2 rounded-md bg-gray-200 max-sm:w-44 max-sm:text-sm" type="text" name="" id="" placeholder="Nhập mã đổi thưởng">
                    <button class="text-white bg-blue-900 p-2 rounded-md w-32 ml-4 max-sm:ml-0 max-sm:mt-4">Kích hoạt</button>
                </div>
            </div>
            
        </div>
        
    </div>
</template>