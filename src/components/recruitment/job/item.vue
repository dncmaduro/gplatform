<template>
  <div
    class="p-4 sm:p-8 rounded-lg border border-gray-300 hover:border-primary-500 bg-white hover:bg-blue-50 cursor-pointer transition duration-300 ease-in-out" @click="$router.push(`/recruitment/apply/${props.id}`)"
  >
    <div class="mb-1 sm:mb-2 flex justify-between gap-2">
      <p class="text-sm sm:text-base text-gray-600">{{ props.team }}</p>
      <UBadge
        v-if="props.tag"
        size="sm"
        variant="solid"
        :label="props.tag"
        :color="color"
      />
    </div>
    <h3 class="mb-2 text-xl sm:text-2xl font-bold">{{ props.title }}</h3>
    <p class="text-sm sm:text-base text-gray-600">
      {{ props.description }}
    </p>
  </div>
</template>
<script lang="ts" setup>
import type { JobItem } from "~/types/recruitment/job.ts";

const props = defineProps<JobItem>();

const COLOR_TAG = [
  {
    tag: "New",
    color: "primary",
  },
  {
    tag: "Hot",
    color: "red",
  },
];

const color = computed(() => {
  return COLOR_TAG.find((item) => item.tag === props.tag)?.color;
});
</script>
