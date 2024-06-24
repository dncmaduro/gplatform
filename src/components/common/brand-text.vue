<template>
  <div :class="color">
    {{ props.prefix }}
    <span>{{ label }}</span>
    {{ props.suffix }}
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
console.log(label);

</script>
