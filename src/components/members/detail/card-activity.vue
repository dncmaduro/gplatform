<template>
  <div class="flex flex-col items-center gap-1">
    <span class="text-sm font-medium">{{ duration }}</span>
    <span class="text-sm">{{ position }}</span>
  </div>
</template>

<script setup lang="ts">
import type { MembersDetailCardActivity } from '~/types/members/detail/activity';

defineProps<MembersDetailCardActivity>();
</script>
