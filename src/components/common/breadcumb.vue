<template>
  <div class="bg-blue-50 px-8 py-4">
    <UContainer> <UBreadcrumb :links="links" divider="/" /></UContainer>
  </div>
</template>

<script setup lang="ts">
import type { CommonBreadcrumb } from '~/types/component/breadcumb';

const { links } = defineProps<CommonBreadcrumb>();
</script>
