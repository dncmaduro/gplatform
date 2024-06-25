<template>
  <div>
    <UContainer class="text-center">
      <div class="leading-10">
        <span class="sm:text-6xl text-2xl font-bold">Frequently asked</span>
        <CommonBrandText
          prefix="<"
          label="question"
          suffix="/>"
          class="sm:text-6xl text-2xl text-primary font-bold"
        ></CommonBrandText>
      </div>
      <div class="text-center mt-4">
        <span
          >If you have further questions, please don’t hesitate to drop an email
          to gdsclead@gdschanu.com</span
        >
      </div>
    </UContainer>
    <UContainer class="grid grid-col-1 gap-y-3 my-10">
      <div v-for="(question, index) in faqList" :key="question.faqId">
        <UCard
          class="cursor-pointer"
          :class="
            status[index]
              ? 'border-2 border-solid border-primary bg-blue-50'
              : ''
          "
          @click="() => handleStatus(index)"
        >
          <div
            class="flex flex-row justify-between items-center text-primary font-bold"
          >
            <span>{{ question.title }}</span>
            <UIcon
              :name="
                status[index]
                  ? 'i-heroicons-chevron-up'
                  : 'i-heroicons-chevron-down'
              "
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
import type { Faq } from "~/types/recruitment/faq";

const faqList = ref<Faq[]>([
  {
    faqId: 1,
    title: "Title",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    faqId: 2,
    title: "Title",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    faqId: 3,
    title: "Title",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
]);

const status = ref<boolean[]>([]);

const handleStatus = (index: number) => {
  status.value[index] = !status.value[index];
};

</script>