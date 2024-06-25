<template>
  <div class="flex gap-8 flex flex-col lg:flex-row">
    <CommonSearch
      placeholder="Developer ..."
      @search="handleSearch"
      v-model="searchData"
      search
      size="xl"
      class="grow"
    />
    <div class="flex gap-8 flex-wrap justify-center">
      <USelect
        v-for="(filterOptions, index) in filtersOptions"
        :key="filterOptions[0]"
        v-model="filters[index]"
        :options="filterOptions"
        size="xl"
        class="rounded-md min-w-[132px]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const filtersOptions = [
  ['All Team', 'Frontend'],
  ['All Gen', 'Gen 1'],
  ['All Level'],
  ['Sort by'],
]
const searchData = ref(null)
const filters = ref<string[]>([])
onMounted(() => {
  filtersOptions.map((filterOptions) => {
    filters.value.push(filterOptions[0])
  })
})
const handleSearch = () => {
  console.log(searchData.value, filters.value)
}
</script>
