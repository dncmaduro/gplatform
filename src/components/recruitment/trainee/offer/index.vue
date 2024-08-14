<template>
  <div class="md:block hidden">
    <UContainer>
      <div class="leading-10">
        <div class="text-center">
          <CommonBrandText
            prefix="What we"
            label="<offer/>"
            class="text-2xl font-bold md:text-6xl"
          ></CommonBrandText>
        </div>
      </div>
    </UContainer>
    <UContainer>
      <div class="py-4 text-center text-xs sm:text-base md:py-8">
        <h1>
          GDSC HANU seeks freshmen/newcomers with big ideas! Dive into our fast-paced world, gain
          skills, and launch your career. No experience? No problem! Bring your enthusiasm and we'll
          provide the challenge.
        </h1>
      </div>
    </UContainer>
    <UContainer class="flex flex-row flex-wrap justify-center items-center gap-24 mb-16">
      <div v-for="desire in desireList" :key="desire.id">
          <div class="flex h-full flex-col items-center justify-center gap-4">
            <div class="relative">
              <div class="absolute bottom-0 w-full h-[180px] z-0" :class="desire.bgColor"></div>
              <div class="h-72 w-72 relative z-10">
              <NuxtImg
                :src="desire.memImage"
                :alt="desire.memImage"
                class="w-full h-full object-contain"
              ></NuxtImg>
              </div>
            </div>
            <h2 class="text-center text-2xl font-bold leading-4 md:leading-6">
              {{ desire.content }}
            </h2>
          </div>
        </div>
    </UContainer>
  </div>
</template>
<script setup lang="ts">
const desireList = ref([
  {
    id: 1,
    memImage: '/offer1.png',
    content: 'Hands-on Training',
    bgColor: 'bg-green-400',
  },
  {
    id: 2,
    memImage: '/offer2.png',
    content: 'Mentoring',
    bgColor: 'bg-blue-400'
  },
  {
    id: 3,
    memImage: '/offer3.png',
    content: 'Fast-track Promotion',
    bgColor: 'bg-yellow-400'
  },
]);
</script>
