<template>
  <section class="flex flex-col">
    <CommonBreadcumb :links="beadcumbLinks" />
    <UContainer class="flex flex-col justify-center items-center flex-1">
      <h1>Jobs Detail</h1>
    </UContainer>
  </section>
</template>
<script setup lang="ts">
const router = useRoute();
const { id: jobId } = router.params;

const beadcumbLinks = ref([
  { label: 'Home', to: '/' },
  { label: 'Recruitment', to: '/recruitment' },
  { label: 'Opening', to: '/recruitment/opening' },
  { label: `${jobId}`, to: `/recruitment/opening/${jobId}` },
]);
</script>
