<template>
  <UInput
    icon="i-heroicons-magnifying-glass-20-solid"
    :size="props.size"
    class="!rounded-full"
    color="white"
    :trailing="false"
    :placeholder="props.placeholder"
    :ui="{ rounded: 'rounded-full', icon: { trailing: { pointer: '' } } }"
  >
    <template #trailing>
      <div class="flex gap-2">
        <UButton
          v-if="props.filter"
          trailing
          icon="i-heroicons-chevron-down"
          variant="ghost"
          color="white"
          size="2xs"
          label="All team"
          class="cursor-pointer shadow-md !rounded-md"
        />
        <UButton
          v-if="props.search"
          size="2xs"
          label="Search"
          class="cursor-pointer !rounded-full"
        />
      </div>
    </template>
  </UInput>
</template>

<script setup lang="ts">
import type { CommonSearch } from '~/types/component/search';

const props = withDefaults(defineProps<CommonSearch>(), {
  filter: false,
  search: false,
  placeholder: 'Search',
  size: 'xl',
});
</script>
