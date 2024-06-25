<template>
  <div class="flex gap-8 flex flex-col lg:flex-row">
    <CommonSearch placeholder="Developer ..." search size="xl" class="grow" />
    <div class="flex gap-8 flex-wrap justify-center">
      <USelect
        :options="teamOptions"
        size="xl"
        class="rounded-md min-w-[132px]"
      />
      <USelect
        :options="genOptions"
        size="xl"
        class="rounded-md min-w-[132px]"
      />
      <USelect
        :options="levelOptions"
        size="xl"
        class="rounded-md min-w-[132px]"
      />
      <USelect
        :options="sortOptions"
        size="xl"
        class="rounded-md min-w-[132px]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const teamOptions = ['All Teams']
const genOptions = ['All Gens']
const levelOptions = ['All Levels']
const sortOptions = ['Sort By']
</script>
