<template>
  <div>
    <UContainer class="mb-10 text-center">
      <div class="leading-10">
        <div class="flex flex-col justify-center lg:flex-row">
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
    <UContainer class="md:flex md:flex-row md:items-center md:justify-between md:gap-16">
      <div class="basis-1/2">
        <div v-for="job in jobNavigationList" :key="job.jobId">
          <UCard class="mb-4 px-3 py-2 lg:py-3 xl:py-4 rounded-full" :ui="{ strategy: 'override', body: '' }">
            <div class="flex flex-row items-center justify-between">
              <div class="flex flex-row gap-1 items-center">
                <span class="sm:text-base text-sm">{{ job.jobName }}</span>
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
      <div class="relative my-8 w-full h-full basis-3/5 md:my-0 xl:basis-1/2">
        <NuxtImg src="/gdsc.png" alt="gdsc" class="h-full w-full" />
        <div class="absolute lg:top-[60%] top-1/2 lg:px-8 px-4 flex flex-col sm:gap-3 gap-2">
          <span class="lg:text-3xl md:text-2xl sm:text-3xl text-base font-bold text-red  text-white text-center"
            >Are you a first year student or have no experience?</span
          >
          <UButton
            label="Visit G<Technical/>Trainee Page"
            icon="i-heroicons-arrow-right-solid"
            size="sm"
            class="mx-auto rounded-2xl border border-2 border-solid border-white"
            color="transparent"
            variant="solid"
            trailing="true"
          ></UButton>
        </div>
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
