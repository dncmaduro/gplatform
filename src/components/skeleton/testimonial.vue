<template>
  <UCard class="flex flex-col p-4">
    <div class="flex flex-col gap-[10px]">
      <USkeleton class="h-full w-full rounded-full py-[6px]" />
      <USkeleton class="h-full w-full rounded-full py-[6px]" />
      <USkeleton class="h-full w-full rounded-full py-[6px]" />
      <USkeleton class="h-full w-1/2 rounded-full py-[6px]" />
    </div>
    <div class="mt-4 flex items-center">
      <USkeleton class="h-12 w-12 rounded-full" />
      <div class="ml-2 flex max-w-full flex-col gap-[10px]">
        <USkeleton class="h-4 w-[150px] rounded-full py-[6px]" />
        <USkeleton class="h-2 w-[120px] rounded-full py-1" />
      </div>
    </div>
  </UCard>
</template>
