<template>
  <div class="mx-auto mt-8 grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
    <SkeletonJobItem v-for="n in 6" :key="n" />
  </div>
  <USkeleton class="mx-auto mt-16 h-[44px] w-[134px] rounded-full" />
</template>
