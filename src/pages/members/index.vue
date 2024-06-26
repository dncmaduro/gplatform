<template>
  <UContainer class="flex flex-col items-start w-full mt-16">
    <div class="flex flex-col gap-8 max-w-[756px]">
      <div class="flex items-center">
        <CommonBrandText
          label="Members"
          suffix="of us"
          color="blue-500"
          class="md:text-8xl text-3xl font-bold"
        />
      </div>
      <div class="text-gray-950 text-wrap w-full">
        Join us today and keep maximizing your potential thanks to working with
        the best talents, in sizable projects that impact on Tech Community.
      </div>
    </div>
    <MembersSearch class="mt-8 w-full" />
    <div
      class="w-full grid min-[1180px]:grid-cols-4 min-[920px]:grid-cols-3 grid-cols-2"
    >
      <MembersCard
        v-for="member in members"
        :key="member.name"
        :name="member.name"
        :image-link="member.imageLink"
        :position="member.position"
        :badge="member.badge"
      />
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import type { MemberCard } from '~/types/members/card'

const members = ref<MemberCard[]>([
  {
    name: 'Pham Tien Viet',
    imageLink: '/membercard-example.png',
    position: 'Co-founder & President',
    badge: {
      team: 'Board of Leader',
    }
  },
  {
    name: 'Pham Tien Viet',
    imageLink: '/membercard-example.png',
    position: 'Co-founder & President',
    badge: {
      team: 'Board of Advisor',
    }
  },
  {
    name: 'Pham Tien Viet',
    imageLink: '/membercard-example.png',
    position: 'Co-founder & President',
    badge: {
      team: 'Technical',
    }
  },
  {
    name: 'Pham Tien Viet',
    imageLink: '/membercard-example.png',
    position: 'Co-founder & President',
    badge: {
      team: 'Marketing',
    }
  },
  {
    name: 'Pham Tien Viet',
    imageLink: '/membercard-example.png',
    position: 'Co-founder & President',
    badge: {
      team: 'Event',
    }
  },
  {
    name: 'Pham Tien Viet',
    imageLink: '/membercard-example.png',
    position: 'Co-founder & President',
    badge: {
      team: 'Human Resources',
    }
  },
  {
    name: 'Pham Tien Viet',
    imageLink: '/membercard-example.png',
    position: 'Co-founder & President',
    badge: {
      team: 'Alumni',
    }
  },
])
</script>
