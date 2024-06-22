<template>
  <div class="max-h-full">
    <div
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col text-center w-full p-8"
    >
      <div>
        <h1 class="sm:text-8xl text-4xl font-primary mb-8 font-bold">
          <span>Thank</span> you!
        </h1>
      </div>
      <div
        class="flex flex-col justify-center items-center gap-2 sm:text-xl text-base font-medium mb-8"
      >
        <div>
          <h2>Your job application has been submitted successfully.</h2>
        </div>
        <div>
          <h2>
            We has sent a notice email to you, your result will be sent as soon
            as possible.
          </h2>
        </div>
      </div>
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
  colorMode: "light",
});
</script>
    
    <style scoped></style>
    