<template>
  <div>
    <UContainer class="mb-10 text-center">
      <div class="leading-10">
        <div class="flex lg:flex-row flex-col justify-center">
          <span class="text-2xl font-bold sm:text-6xl">The most</span>
          <CommonBrandText
            prefix="<"
            label="impactful work"
            suffix="/>"
            class="text-primary text-2xl font-bold sm:text-6xl"
          ></CommonBrandText>
        </div>
        <span class="text-2xl font-bold sm:text-6xl"> of your student life</span>
      </div>
    </UContainer>
    <UContainer class="md:flex md:flex-row md:justify-between md:items-center md:gap-16 ">
      <div class="basis-1/2">
        <div v-for="job in jobNavigationList" :key="job.jobId">
          <UCard class="mb-4">
            <div class="flex flex-row items-center justify-between">
              <div class="flex flex-row gap-1">
                <span>{{ job.jobName }}</span>
                <CommonBrandText
                  prefix="<"
                  :label="job.posNumber"
                  suffix="/>"
                  class="text-primary text-medium text-base font-bold"
                ></CommonBrandText>
              </div>
              <UIcon name="i-heroicons-arrow-up-right-solid" class="w-15 h-15"></UIcon>
            </div>
          </UCard>
        </div>
      </div>
      <div class="basis-1/2 w-full md:my-0 my-8">
        <NuxtImg src="/gdsc.png" alt="gdsc" class="h-full w-full" />
      </div>
    </UContainer>
  </div>
</template>
<script setup lang="ts">
import type { JobTitle } from '~/types/recruitment/job-title';

const jobNavigationList = ref<JobTitle[]>([
  {
    jobId: 1,
    jobName: 'All team',
    posNumber: '6 positions',
  },
  {
    jobId: 2,
    jobName: 'Board of Leader',
    posNumber: '6 positions',
  },
  {
    jobId: 3,
    jobName: 'Technical',
    posNumber: '6 positions',
  },
  {
    jobId: 4,
    jobName: 'Marketing',
    posNumber: '6 positions',
  },
  {
    jobId: 5,
    jobName: 'Event',
    posNumber: '6 positions',
  },
  {
    jobId: 6,
    jobName: 'Human Resources',
    posNumber: '6 positions',
  },
]);
</script>
