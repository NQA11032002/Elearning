<template>
    <form v-if="toggleForm">
        <div id="popup-modal" tabindex="-1"
        class="overflow-y-auto w-100  z-zIndex fixed overflow-x-hidden justify-center items-center w-full h-[calc(100%-1rem)] max-h-full">
        <div :class="'border-b-' + contents.color"
            class="p-4  w-full max-w-md max-h-full fixed top-1/2 left-1/2  border-b-4 z-50 -translate-x-1/2 -translate-y-1/2 shadow-2xl shadow-gray-300 bg-white rounded-lg">
            <div class="relative">
    
            <div class="p-4 md:p-5 text-center">
                <i class="text-5xl pb-5 " :class="['text-' + contents.color, contents.icon]"></i>
                <h3 class="mb-5  font-normal text-md text-gray-500 dark:text-gray-400">
                {{ contents.title }}
                </h3>
                <a :href="contents.navigate"
                class="cursor-pointer px-5 py-2.5 focus:outline-none rounded-lg border text-black mr-3 focus:z-10 font-medium hover:opacity-70 ">Quản lý</a>
                <a :href="contents.step"
                class=" cursor-pointer bg-title text-white mr-3 focus:outline-none rounded-lg 0 font-medium px-5 py-2.5 hover:opacity-80 focus:z-10 ">Tiếp tục</a>
              
            </div>
            </div>
        </div>
        </div>
    </form>
    
  </template>
  
  <script>
  export default {
    props: {
      contents: {
        type: Object,
        required: true,
      },
    },
    data() {
        return {
            showForm: true,
        };
    },
    methods: {
        toggleForm() {
      this.showForm = false;
    }
        
    }
  };
  </script>
  