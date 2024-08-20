<template>
  <div class="flex flex-col items-center gap-4">
    <NuxtImg :src="imageLink" class="w-[250px] items-center rounded-full border border-gray-500" />
    <div class="flex flex-col items-center gap-2">
      <span class="text-2xl font-medium">{{ name }}</span>
      <span class="text-base">{{ position }}</span>
    </div>
    <MembersBadge :team="team" />
    <hr class="w-[200px] bg-gray-300" />
  </div>
</template>

<script setup lang="ts">
import type { MemberDetailCard } from '~/types/members/detail/card';

defineProps<MemberDetailCard>();
</script>
