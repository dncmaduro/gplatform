<template>
  <UContainer
    class="my-16 flex lg:flex-row flex-col-reverse lg:justify-between justify-center items-center gap-8"
    :ui="{ constrained: 'max-w-7xl lg:max-w-full max-w-3xl' }"
  >
    <div class="flex flex-col lg:justify-between justify-center gap-8 lg:basis-3/5">
      <CommonBrandText
        label="Learn"
        suffix="with students"
        class="flex flex-col xl:text-8xl sm:text-7xl text-4xl font-bold lg:text-start text-center"
      ></CommonBrandText>
      <div class="lg:text-start text-center sm:text-2xl text-lg">
        <CommonBrandText
          prefix="GDSC HANU represented Hanoi University in Google Developer Student Club Community. We focus on"
          label="<Software Engineer/>"
          suffix="and"
          class="inline"
        ></CommonBrandText>
        <CommonBrandText label="<Develop Community/>" class="inline"></CommonBrandText>
      </div>
      <div class="flex flex-row lg:justify-start justify-center items-center gap-4">
        <UButton label="Get started" variant="solid" size="xl" class="rounded-full" @click="$router.push('/recruitment')"></UButton>
        <UButton
          label="Discover more"
          icon="i-heroicons-arrow-right-16-solid"
          :trailing="true"
          variant="solid"
          size="xl"
          color="gray"
          class="rounded-full"
        ></UButton>
      </div>
    </div>
    <div class="flex basis-2/5 w-full sm:max-w-lg max-w-64">
      <NuxtImg src="/landing_img.png" alt="landing_img" class="w-full h-full object-contain"></NuxtImg>
    </div>
  </UContainer>
</template>
