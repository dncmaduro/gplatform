<template>
  <div class="flex h-fit flex-col items-center rounded-md sm:w-[250px]">
    <USkeleton class="h-[100px] w-[100px] rounded-full sm:h-[250px] sm:w-full" />
    <USkeleton
      class="mt-3 h-[20px] w-[100px] rounded-full sm:mt-6 sm:h-[20px] sm:h-[24px] sm:w-[150px]"
    />
    <USkeleton class="mt-2 h-[16px] w-[80px] rounded-full sm:h-[12px] sm:w-[140px]" />
    <USkeleton class="mt-3 h-[24px] w-[56px] rounded-md sm:mt-6 sm:h-[32px] sm:w-[130px]" />
    <div class="mt-4 h-[1px] w-[200px] bg-gray-300"></div>
    <USkeleton
      class="mt-3 h-[16px] w-[100px] rounded-full sm:mt-4 sm:h-[18px] sm:h-[20px] sm:w-[150px]"
    />
    <USkeleton
      class="mt-3 h-[10px] w-[140px] rounded-full sm:mt-6 sm:h-[14px] sm:h-[20px] sm:w-[120px]"
    />
    <USkeleton
      class="mt-3 h-[10px] w-[180px] rounded-full sm:mt-2 sm:h-[14px] sm:h-[20px] sm:w-[160px]"
    />
    <USkeleton
      class="mt-3 h-[10px] w-[140px] rounded-full sm:mt-4 sm:h-[14px] sm:h-[20px] sm:w-[120px]"
    />
    <USkeleton
      class="mt-3 h-[10px] w-[180px] rounded-full sm:mt-2 sm:h-[14px] sm:h-[20px] sm:w-[160px]"
    />
    <div class="mt-4 h-[1px] w-[200px] bg-gray-300"></div>
    <div class="mt-4 flex justify-center gap-4">
      <USkeleton v-for="n in 4" :key="n" class="h-[28px] w-[28px] rounded-full" />
    </div>
  </div>
</template>
