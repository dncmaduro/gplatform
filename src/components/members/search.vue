<template>
  <div class="flex gap-8 flex flex-col lg:flex-row">
    <CommonSearch placeholder="Developer ..." search size="xl" class="grow" />
    <div class="flex gap-8 flex-wrap justify-center">
      <USelect
        :options="teamOptions"
        v-model="teamOption"
        size="xl"
        class="rounded-md min-w-[132px]"
      />
      <USelect
        :options="genOptions"
        v-model="genOption"
        size="xl"
        class="rounded-md min-w-[132px]"
      />
      <USelect
        :options="levelOptions"
        v-model="levelOption"
        size="xl"
        class="rounded-md min-w-[132px]"
      />
      <USelect
        :options="sortOptions"
        v-model="sortOption"
        size="xl"
        class="rounded-md min-w-[132px]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const teamOptions = ref(['All Teams'])
const genOptions = ref(['All Gens'])
const levelOptions = ref(['All Levels'])
const sortOptions = ref(['Sort By'])

const teamOption = ref(teamOptions.value[0])
const genOption = ref(genOptions.value[0])
const levelOption = ref(levelOptions.value[0])
const sortOption = ref(sortOptions.value[0])
</script>
