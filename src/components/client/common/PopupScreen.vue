<template>
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
          <a href="/course" type="button"
            class="text-gray-500 cursor-pointer bg-white hover:bg-gray-100 focus:outline-none rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Quay
            về</a>
          <a href="/my-course"
            class="text-white bg-slate-600 cursor-pointer focus:outline-none font-medium rounded-lg text-sm inline-flex items-center ml-3 px-5 py-2.5 text-center me-2">
            Khóa học
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contents: {
      type: Object,
      required: true,
    },
  },
};
</script>
