<template>
    <div>
      <UContainer>
        <div class="leading-10 text-center">
          <CommonBrandText
            label="<Training/>"
            suffix="progress"
            class="text-2xl font-bold md:text-6xl"
          ></CommonBrandText>
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
      <UContainer class="flex flex-col gap-4" :ui="{ constrained: 'max-w-2xl' }">
        <div v-for="progress in list" :key="progress.id" class="flex flex-col gap-2">
          <CommonBrandText
            :label="progress.label"
            :suffix="progress.suffix"
            :color="progress.titleColor"
            class="text-center text-2xl font-bold"
          ></CommonBrandText>
          <div class="flex flex-row justify-center md:flex-col">
            <div class="flex justify-center" :class="{ 'flex-col md:flex-row': Number(progress.id) % 2 === 0, 'flex-row': Number(progress.id) % 2 !== 0 }">
              <div v-for="(month, index) in progress.monthList" :key="index">
                <div class="flex items-center justify-center" :class="{ 'flex-col md:flex-row': Number(progress.id) % 2 === 0, 'flex-row': Number(progress.id) % 2 !== 0 }">
                  <UBadge color="white" variant="solid" size="lg" :ui="{ rounded: 'rounded-full' }">{{ month }}</UBadge>
                  <div
                    v-show="index < progress.monthList.length - 1"
                    :class="[getBackgroundColorClass(progress.lineColor), { 'h-12 w-1 md:h-1 md:w-40': Number(progress.id) % 2 === 0, 'h-1 w-40': Number(progress.id) % 2 !== 0 }]"
                  ></div>
                </div>
              </div>
            </div>
            <div class="flex flex-row items-center justify-between py-8 text-xs md:px-8" :class="{ 'flex-col md:flex-row': Number(progress.id) % 2 === 0, 'flex-row': Number(progress.id) % 2 !== 0 }">
              <div v-for="(skill, index) in progress.levels" :key="index">
                <p>{{ skill }}</p>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </div>
  </template>
  
  <script setup lang="ts">
  type progressList = {
    id: string;
    label: string;
    suffix: string;
    levels: string[];
    monthList: string[];
    titleColor: string;
    lineColor: string;
  };
  
  const list = ref<progressList[]>([
    {
      id: '1',
      label: '<Culture/>',
      suffix: 'Training',
      levels: [],
      monthList: ['December', 'January'],
      titleColor: 'blue-500',
      lineColor: 'blue-100'
    },
    {
      id: '2',
      label: '<Technical/>',
      suffix: 'Training',
      monthList: ['January', 'March', 'May', 'June'],
      levels: ['Basic Programming', 'Advance Programming', 'Framework Using'],
      titleColor: 'red-500',
      lineColor: 'red-100'
    },
    {
      id: '3',
      label: '<Graduate/>',
      suffix: 'Day',
      monthList: ['July'],
      levels: [],
      titleColor: 'green-500',
      lineColor: ''
    },
  ]);
  
  function getBackgroundColorClass(color: string): string {
    return `bg-${color}`;
  }
  
  </script>
  