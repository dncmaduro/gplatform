<template>
  <div class="w-full mt-8">
    <div
      class="w-[148px] sm:w-[264px] h-[220px] sm:h-[380px] mx-auto rounded-lg border flex flex-col justify-between items-center gap-2 sm:gap-3"
    >
      <img
        :src="imageLink"
        :alt="name"
        class="w-[100px] sm:w-[200px] rounded-full mt-4 sm:mt-8"
      />
      <div class="flex flex-col justify-between text-center gap-2 mt-2">
        <span class="text-sm sm:text-lg">{{ name }}</span>
        <span class="text-[0.5rem] sm:text-xs">{{ position }}</span>
      </div>
      <MembersBadge :team="badge.team" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MemberCard } from '~/types/members/card'

defineProps<MemberCard>()
</script>
