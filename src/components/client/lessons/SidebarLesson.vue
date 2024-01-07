<template>
  <div class="overflow-y-auto h-screen bg-white max-sm:px-5">
    <h1 class="text-lg font-black pb-3 cursor-default">Nội dung khóa học</h1>

    <div>
      <div class="" v-for="thematic in thematicCourses" :key="thematic.id">
        <div class="cursor-pointer bg-slate-700 text-white w-full px-4 py-2 flex justify-between">
          <div>
            <p class="font-medium text-sm">{{ thematic.name }}</p>
            <p class="font-medium text-sm">Bài học: {{ thematic.videoCourses.length }}</p>
          </div>
          <i class="fa-solid fa-chevron-down"></i>
        </div>

        <div>
          <div @click="selectLesson(video)" class="pl-8 pr-3 flex flex-col gap-2 py-2 cursor-pointer hover:bg-gray-200"
            v-for="video in thematic.videoCourses" :key="video.id">
            <p class="text-gray-700 text-sm">{{ video.name }}</p>
            <p class="text-gray-500 text-sm"><i class="fa-regular fa-circle-play pr-2"></i>{{ video.duration }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    thematicCourses: {
      type: Object,
      required: true,
    },
  },
  methods: {
    selectLesson(video) {
      console.log(video)
      this.$emit('lessonSelected', video);
    }
  }
}
</script>
