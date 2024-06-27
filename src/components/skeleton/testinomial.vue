<template>
  <div class="min-h-[376px] rounded-md border border-gray-300">
    <div class="flex h-full min-h-[376px] flex-col justify-between px-8 py-12">
      <div class="flex flex-col gap-4">
        <USkeleton v-for="n in 4" :key="n" class="h-[16px] w-full" />
      </div>
      <div class="flex">
        <USkeleton class="h-14 w-14 rounded-full" />
        <div class="ml-2 flex flex-col justify-between py-2">
          <USkeleton class="h-[18px] w-[144px] rounded-full" />
          <USkeleton class="h-[12px] w-[120px] rounded-full" />
        </div>
      </div>
    </div>
  </div>
</template>
