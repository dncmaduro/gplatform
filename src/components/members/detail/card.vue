<template>
  <div class="flex flex-col items-center gap-4">
    <NuxtImg :src="imageLink" class="w-[250px] items-center rounded-full border border-gray-500" />
    <div class="flex flex-col items-center gap-2">
      <span class="text-2xl font-medium">{{ name }}</span>
      <span class="text-base">{{ position }}</span>
    </div>
    <MembersBadge :team="team" />
    <hr class="w-[200px] bg-gray-300" />
    <div class="flex flex-col items-center gap-4">
      <span class="text-xl font-medium">Timeline Activities</span>
      <MembersDetailCardActivity
        v-for="activity in activities"
        :key="activity.duration"
        :duration="activity.duration"
        :position="activity.position"
      >
      </MembersDetailCardActivity>
    </div>
    <hr class="w-[200px] bg-gray-300" />
    <div class="flex gap-4">
      <MembersDetailCardSocial
        v-for="item in socialItems"
        :key="item.icon"
        :icon="item.icon"
        :link="item.link"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MemberDetailCard } from '~/types/members/detail/card';

const props = defineProps<MemberDetailCard>();

const socialItems = computed(() => {
  const items = (Object.keys(props.socials) as Array<keyof MemberDetailCard['socials']>).map(
    (key) => {
      const icon = key === 'email' ? `i-mdi-${key}-outline` : `i-mdi-${key}`;

      return {
        icon,
        link: props.socials[key],
      };
    },
  );

  return items.filter((item) => item.link);
});
</script>
