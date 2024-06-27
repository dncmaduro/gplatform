<template>
  <div
    class="flex h-fit w-full flex-col gap-8 md:h-[390px] md:flex-row md:justify-between md:gap-16"
  >
    <div class="flex h-full grow flex-col justify-start gap-4 py-4">
      <SkeletonPosition v-for="n in 6" :key="n" />
    </div>
    <USkeleton class="mx-auto min-h-[200px] w-full max-w-[544px] rounded-lg md:h-full" />
  </div>
</template>
