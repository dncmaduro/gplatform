<template>
  <div class="flex flex-col gap-2">
    <div class="flex items-center gap-2 text-2xl">
      <UIcon :name="icon" />
      <h2 class="font-medium text-gray-950">
        <CommonBrandText
          :prefix="title.prefix"
          :color="title.color"
          :label="title.label"
          size="2xl"
        />
      </h2>
    </div>
    <ul class="list-disc pl-5 space-y-2 text-gray-950">
      <li v-for="item in descriptionItems" :key="id">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { JobDescription } from '~/types/recruitment/job';

const { id, title, icon, descriptionItems } = defineProps<JobDescription>();
</script>
