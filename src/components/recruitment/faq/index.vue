<template>
  <div>
    <UContainer class="text-center">
      <div class="leading-10">
        <span class="text-2xl font-bold sm:text-6xl">Frequently asked</span>
        <CommonBrandText
          prefix="<"
          label="question"
          suffix="/>"
          class="text-primary text-2xl font-bold sm:text-6xl"
        ></CommonBrandText>
      </div>
      <div class="mt-4 text-center">
        <span>If you have further questions, please don’t hesitate to drop an email to gdsclead@gdschanu.com</span>
      </div>
    </UContainer>
    <UContainer class="grid-col-1 my-10 grid gap-y-3">
      <div v-for="(question, index) in faqList" :key="question.faqId">
        <UCard
          class="cursor-pointer"
          :class="status[index] ? 'border-primary border-2 border-solid bg-blue-50' : ''"
          @click="() => handleStatus(index)"
        >
          <div class="text-primary flex flex-row items-center justify-between font-bold">
            <span>{{ question.title }}</span>
            <UIcon
              :name="status[index] ? 'i-heroicons-chevron-up' : 'i-heroicons-chevron-down'"
            ></UIcon>
          </div>
          <div v-show="status[index]" class="mt-4">
            <span>{{ question.content }}</span>
          </div>
        </UCard>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import type { Faq } from '~/types/recruitment/faq';

const faqList = ref<Faq[]>([
  {
    faqId: 1,
    title: 'Title',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    faqId: 2,
    title: 'Title',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    faqId: 3,
    title: 'Title',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
]);

const status = ref<boolean[]>([]);

const handleStatus = (index: number) => {
  status.value[index] = !status.value[index];
};
</script>
