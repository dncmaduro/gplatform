<template>
  <span
    class="text-primary text-3xl font-bold text-center"
    :class="`md:text-${props.size} text-${props.color}`"
  >
    <{{ computedLabel }}/>
  </span>
</template>

<script lang="ts" setup>
import type { BrandText } from '~/types/component/brand-text';

const props = withDefaults(defineProps<BrandText>(), {
  size: '8xl',
  color: 'primary',
});

const computedLabel = computed(() => props.label.replace(/\s+/g, '_'));
</script>
