<template>
  <CommonBreadcumb :links="beadcumbLinks" />
  <UContainer class="flex flex-col items-center flex-1">
    <div class="flex gap-8 flex-col text-center">
      <div class="text-center">
        <CommonBrandText prefix="</" label="Opening" suffix=">" />
        <h1 class="md:text-8xl text-3xl text-black font-bold text-center">
          position
        </h1>
      </div>
      <p class="text-gray-950 text-base">
        Join us today and keep maximizing your potential thanks to working with
        <br />
        the best talents, in sizable projects that impact on Tech Community.
      </p>
      <CommonSearch placeholder="Developer..." search size="xl" />
    </div>
  </UContainer>
</template>

<script setup lang="ts">
const beadcumbLinks = ref([
  { label: 'Home', to: '/' },
  { label: 'Recruitment', to: '/recruitment' },
  { label: 'Opening', to: '/recruitment/opening' },
]);
</script>
