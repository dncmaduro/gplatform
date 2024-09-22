<template>
  <UContainer
    class="my-16 grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2"
    :ui="{ constrained: 'lg:max-w-7xl sm:max-w-xl max-w-sm' }"
  >
    <div class="order-last grid grid-cols-4 gap-4 sm:grid-cols-5 sm:gap-5 lg:order-first lg:gap-4">
      <div v-for="(member, index) in memberInfoList" :key="member.id">
        <UCard class="relative w-full pt-[100%]" :ui="{ body: '' }">
          <NuxtImg
            :src="member.memberImage"
            :alt="member.memberImage"
            class="absolute inset-0 h-full w-full"
            loading="lazy"
            @mouseover="handleBadge(index, true)"
            @mouseleave="handleBadge(index, false)"
          />
          <UBadge
            :label="member.name"
            color="white"
            class="absolute -bottom-2 left-4 mx-auto transform transition-opacity duration-300 ease-in-out"
            :class="{
              'opacity-100': member.displayBadge,
              'opacity-0': !member.displayBadge,
            }"
          />
        </UCard>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center lg:items-start lg:justify-start">
      <CommonBrandText
        prefix="Built by"
        label="dedicated students"
        suffix="around Hanoi, Vietnam"
        class="text-center text-2xl font-bold sm:text-4xl lg:text-start"
      />
      <p class="my-4 text-center text-sm sm:text-2xl lg:text-start">
        The development of GDSC HANU led dedicated members. The community is made up of members with
        different horizons and skills. We are happy to see new members every day and encourage
        anyone to join us and help in many ways.
      </p>
      <UButton
        label="See all members"
        icon="i-heroicons-arrow-right-16-solid"
        :trailing="true"
        variant="solid"
        size="xl"
        class="rounded-full"
        @click="$router.push('/members')"
      />
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const memberInfoList = ref([
  {
    id: '1',
    memberImage: '/mem1.png',
    name: 'Tien Viet',
    displayBadge: false,
  },
  {
    id: '2',
    memberImage: '/mem1.png',
    name: 'Tien Viet',
    displayBadge: false,
  },
  {
    id: '3',
    memberImage: '/mem1.png',
    name: 'Tien Viet',
    displayBadge: false,
  },
  {
    id: '4',
    memberImage: '/mem1.png',
    name: 'Tien Viet',
    displayBadge: false,
  },
  {
    id: '5',
    memberImage: '/mem1.png',
    name: 'Tien Viet',
    displayBadge: false,
  },
  {
    id: '6',
    memberImage: '/mem1.png',
    name: 'Tien Viet',
    displayBadge: false,
  },
  {
    id: '7',
    memberImage: '/mem1.png',
    name: 'Tien Viet',
    displayBadge: false,
  },
  {
    id: '8',
    memberImage: '/mem1.png',
    name: 'Tien Viet',
    displayBadge: false,
  },
  {
    id: '9',
    memberImage: '/mem1.png',
    name: 'Tien Viet',
    displayBadge: false,
  },
  {
    id: '10',
    memberImage: '/mem1.png',
    name: 'Tien Viet',
    displayBadge: false,
  },
  {
    id: '11',
    memberImage: '/mem1.png',
    name: 'Tien Viet',
    displayBadge: false,
  },
  {
    id: '12',
    memberImage: '/mem1.png',
    name: 'Tien Viet',
    displayBadge: false,
  },
  {
    id: '13',
    memberImage: '/mem1.png',
    name: 'Tien Viet',
    displayBadge: false,
  },
  {
    id: '14',
    memberImage: '/mem1.png',
    name: 'Tien Viet',
    displayBadge: false,
  },
  {
    id: '15',
    memberImage: '/mem1.png',
    name: 'Tien Viet',
    displayBadge: false,
  },
  {
    id: '16',
    memberImage: '/mem1.png',
    name: 'Tien Viet',
    displayBadge: false,
  },
  {
    id: '17',
    memberImage: '/mem1.png',
    name: 'Tien Viet',
    displayBadge: false,
  },
  {
    id: '18',
    memberImage: '/mem1.png',
    name: 'Tien Viet',
    displayBadge: false,
  },
  {
    id: '19',
    memberImage: '/mem1.png',
    name: 'Tien Viet',
    displayBadge: false,
  },
  {
    id: '20',
    memberImage: '/mem1.png',
    name: 'Tien Viet',
    displayBadge: false,
  },
]);

const handleBadge = (index: number, show: boolean) => {
  memberInfoList.value[index].displayBadge = show;
};
</script>
