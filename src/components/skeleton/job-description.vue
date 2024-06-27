<template>
  <div class="w-full">
    <USkeleton class="mb-8 h-[24px] w-[240px] rounded-lg" />
    <div v-for="n in 4" :key="n" class="mt-2">
      <USkeleton class="my-2 h-[16px] w-full rounded-full" />
      <USkeleton class="my-2 h-[16px] w-1/2 rounded-full" />
    </div>
  </div>
</template>
