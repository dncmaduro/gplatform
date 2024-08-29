<template>
  <div>
    <UContainer class="text-center">
      <div class="leading-10">
        <CommonBrandText
          prefix="Frequently asked"
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
      <div v-for="(question, index) in faqList" :key="question.id">
        <UCard
          class="cursor-pointer hover:bg-blue-50 cursor-pointer transition duration-300 ease-in-out"
          :class="{'border-primary border-2 border-solid bg-blue-50' : status[index]}"
          @click="() => handleStatus(index)"
        >
          <div class="text-primary flex flex-row items-center justify-between font-bold">
            <p>{{ question.title }}</p>
            <UIcon
              :name="status[index] ? 'i-heroicons-chevron-up' : 'i-heroicons-chevron-down'"
            ></UIcon>
          </div>
          <div v-show="status[index]" class="mt-4">
            <p>{{ question.content }}</p>
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
    id: '1',
    title: 'Title',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    id: '2',
    title: 'Title',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    id: '3',
    title: 'Title',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
]);

const status = ref<boolean[]>([]);

const handleStatus = (index: number) => {
  status.value[index] = !status.value[index];
};
</script>
