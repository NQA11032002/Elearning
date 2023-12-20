<template>
  <div id="popup-modal" tabindex="-1" class="overflow-y-auto w-100 fixed overflow-x-hidden justify-center items-center w-full h-[calc(100%-1rem)] max-h-full">
    <div class="p-4 w-full max-w-md max-h-full fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 shadow-2xl shadow-gray-300 bg-white rounded-lg">
        <div class="relative  dark:bg-gray-700 z-50 ">
            <button type="button" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span class="sr-only">Close modal</span>
            </button>
            <div class="p-4 md:p-5 text-center">
                <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">{{ contents.title }}</h3>

                <a href="/course" type="button" class="text-gray-500 cursor-pointer bg-white hover:bg-gray-100 focus:outline-none rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Quay về</a>
                <a href="/my-course" class="text-white cursor-pointer bg-blue-900 hover:bg-blue-700 focus:outline-none  dark:focus:ring-blue-900 font-medium rounded-lg text-sm inline-flex items-center ml-3 px-5 py-2.5 text-center me-2">
                  Khóa học
              </a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>


export default{
  props: {
    contents: {
      type: Object,
      required: true,
    },
  },
}
</script>
