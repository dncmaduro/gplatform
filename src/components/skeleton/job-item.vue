<template>
  <div class="w-full">
    <div
      class="mx-auto max-w-[280px] rounded-lg border border-gray-300 bg-white p-4 transition duration-300 sm:max-w-[350px] sm:p-8"
    >
      <div class="flex flex-col gap-4">
        <div class="flex items-center justify-between">
          <USkeleton class="h-[16px] w-[160px] rounded-md" />
          <USkeleton class="h-[24px] w-[36px] rounded-md" />
        </div>
        <div class="flex flex-col gap-2">
          <USkeleton class="h-[24px] w-full" />
          <USkeleton class="h-[18px] w-full" />
          <USkeleton class="h-[18px] w-full" />
        </div>
      </div>
    </div>
  </div>
</template>
