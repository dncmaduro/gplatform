<template>
  <UInput
    v-model="searchData"
    @keyup.enter="handleSearch"
    icon="i-heroicons-magnifying-glass"
    :size="props.size ? props.size : undefined"
    class="rounded-full"
    :trailing="false"
    :placeholder="props.placeholder"
    :ui="{ rounded: 'rounded-full', icon: { trailing: { pointer: '' } } }"
  >
    <template #trailing>
      <div class="flex gap-2">
        <USelect
          v-if="props.filterOption"
          v-model="filterOption"
          :options="props.filterOption"
          variant="none"
          size="2xs"
          option-attribute="name"
        />
        <UButton
          v-if="props.search"
          @click="handleSearch"
          :disabled="!!!searchData"
          size="2xs"
          label="Search"
          class="cursor-pointer rounded-full"
        />
      </div>
    </template>
  </UInput>
</template>

<script setup lang="ts">
import type { CommonSearch } from "~/types/component/search";

const emit = defineEmits<{
  (e: "search", searchData: string | null, filterOption?: string): void;
}>();

const props = withDefaults(defineProps<CommonSearch>(), {
  search: false,
  placeholder: "Search",
  size: "xl",
});
const filterOption = ref('')

const searchData = ref(null)

onMounted(()=>{
  if(props.filterOption){
    filterOption.value = props.filterOption[0]
  }
})

const handleSearch = () => {
  if (searchData.value && filterOption.value) {
    emit("search", searchData.value, filterOption.value);
    return;
  }
  emit("search", searchData.value);
};
</script>
