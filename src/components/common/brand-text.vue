<template>
  <div :class="color">
    <span>{{ props.prefix }}</span>
    <span>{{ label }}</span>
    <span>{{ props.suffix }}</span>
  </div>
</template>

<script lang="ts" setup>
import type { BrandText } from "~/types/component/brand-text";

const props = withDefaults(defineProps<BrandText>(), {
  color: "primary",
});
const color = computed(() => {
  return `text-${props.color}`;
});

const label = computed(() => props.label.replace(/\s+/g, "_"));

</script>
