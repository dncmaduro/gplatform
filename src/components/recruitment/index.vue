<template>
  <UContainer class="flex min-h-screen flex-col items-center justify-center">
    <div class="relative">
      <NuxtImg src="/bg-above-the-fold.png"></NuxtImg>
      <div
        class="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col gap-8"
      >
        <div class="text-center text-3xl font-bold md:text-8xl">
          <CommonBrandText label="Build" />
          <h1 class="w-max text-black">your future</h1>
        </div>
        <h2 class="text-center text-4xl text-gray-950">Become a part of GDSC HANU</h2>
        <CommonSearch filter search size="xl" />
      </div>
    </div>
  </UContainer>
</template>
