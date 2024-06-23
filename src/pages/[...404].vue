<template>
  <div class="max-h-full">
    <div class="flex flex-col text-center w-full p-8">
      <div class="flex justify-center items-center w-full h-full">
        <video
          autoplay
          loop
          muted
          class="w-[700px] sm:h-[400px] h-[200px] object-contain"
        >
          <source :src="videoURL" type="video/mp4" />
        </video>
      </div>
      <h1 class="sm:text-xl text-xs font-medium my-6">
        The page you're looking for doesn't seem to exist
      </h1>
      <UButton
        label="Go to Homepage"
        color="primary"
        variant="solid"
        class="rounded-[20px] px-4 py-3 max-w-[170px] mx-auto font-normal"
        @click="$router.push('/')"
      >
        <template #trailing>
          <UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5" />
        </template>
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  colorMode: 'light',
});

const videoURL = '/404.mp4';
</script>

<style scoped></style>
