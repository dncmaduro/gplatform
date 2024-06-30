<template>
  <div>
    <UContainer class="text-center">
      <div class="flex flex-row items-center justify-center leading-10">
        <CommonBrandText
          label="Spotlight"
          suffix="position"
          class="text-2xl font-bold sm:text-6xl"
        ></CommonBrandText>
      </div>
    </UContainer>
    <UContainer class="my-10 flex flex-row flex-wrap items-center justify-center gap-4">
      <div v-for="(category, index) in categories" :key="category.id">
        <UCard
          :ui="{ strategy: 'override', body: '' }"
          class="cursor-pointer rounded-full p-1 sm:px-3 sm:py-2"
          :class="
            clickState[index]
              ? 'bg-primary text-white'
              : 'transition duration-300 ease-in-out hover:bg-blue-50'
          "
          @click="() => handleStatus(index)"
        >
          <p class="text-center text-xs sm:text-sm">{{ category.content }}</p>
        </UCard>
      </div>
    </UContainer>
    <UContainer
      v-if="searchQueryList.length"
      class="my-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
    >
      <div v-for="searchQuery in searchQueryList" :key="searchQuery.id">
        <RecruitmentJobItem
          :id="searchQuery.id"
          :team="searchQuery.team"
          :tag="searchQuery.tag"
          :title="searchQuery.title"
          :description="searchQuery.description"
        ></RecruitmentJobItem>
      </div>
    </UContainer>
    <UContainer v-if="searchQueryList.length" class="mb-10 text-center">
      <UButton
        label="See more"
        icon="i-heroicons-arrow-small-right-solid"
        color="transparent"
        class="cursor-pointer rounded-full border border-2 border-solid border-gray-300 text-black transition duration-300 ease-in-out hover:bg-blue-50"
        v-if="searchQueryList.length > 6"
      ></UButton>
    </UContainer>
    <UContainer v-else class="text-center mb-10">
      <p class="text-2xl font-bold text-gray-600 mb-10">More job openings are coming soon!</p>
      <UButton
        label="Browse all jobs"
        icon="i-heroicons-arrow-small-right-solid"
        trailing="false"
        class="cursor-pointer rounded-full text-white py-2 px-4"
      ></UButton>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import type { DescriptionItem, JobItem } from '~/types/recruitment/job';

const categories = ref<DescriptionItem[]>([
  { id: '1', content: 'Board of Leader' },
  { id: '2', content: 'Technical Department' },
  { id: '3', content: 'Marketing Department' },
  { id: '4', content: 'Event Department' },
  { id: '5', content: 'Human Resources Department' },
]);
const searchQueryList = ref<JobItem[]>([
  {
    id: '1',
    tag: 'New',
    team: 'Board of Leader',
    title: 'Human Resources Engagement Lead',
    description: 'Develop the products and tools of the future for billions of users.',
  },
  {
    id: '2',
    tag: 'New',
    team: 'Board of Leader',
    title: 'Human Resources Engagement Lead',
    description: 'Develop the products and tools of the future for billions of users.',
  },
  {
    id: '3',
    tag: 'New',
    team: 'Board of Leader',
    title: 'Human Resources Engagement Lead',
    description: 'Develop the products and tools of the future for billions of users.',
  },
  {
    id: '4',
    tag: 'Hot',
    team: 'Board of Leader',
    title: 'Human Resources Engagement Lead',
    description: 'Develop the products and tools of the future for billions of users.',
  },
  {
    id: '5',
    tag: 'New',
    team: 'Board of Leader',
    title: 'Human Resources Engagement Lead',
    description: 'Develop the products and tools of the future for billions of users.',
  },
  {
    id: '6',
    tag: 'New',
    team: 'Board of Leader',
    title: 'Human Resources Engagement Lead',
    description: 'Develop the products and tools of the future for billions of users.',
  },
]);

const clickState = ref<boolean[]>(new Array(categories.value.length).fill(false));

const handleStatus = (index: number) => {
  clickState.value = clickState.value.map((state: boolean, i: number) =>
    i === index ? true : false,
  );
};
</script>
