<template>
  <div class="flex w-full flex-col gap-8">
    <div
      v-for="i in 4"
      :key="i"
      class="mx-auto flex h-[480px] w-fit max-w-full flex-col items-center justify-between gap-8 px-8 lg:h-fit lg:w-full lg:flex-row lg:gap-16"
      :class="!(i % 2) ? 'lg:flex-row-reverse' : ''"
    >
      <div class="flex w-full flex-1 flex-col items-start gap-4">
        <USkeleton class="h-[18px] w-20" />
        <USkeleton class="h-[24px] w-[240px]" />
        <USkeleton v-for="n in 4" :key="n" class="h-[16px] w-full" />
      </div>
      <USkeleton class="h-[250px] w-[500px] max-w-full flex-1 rounded-3xl" />
    </div>
  </div>
</template>
