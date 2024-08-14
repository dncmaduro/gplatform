<template>
  <UContainer
    class="my-16 grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2"
    :ui="{ constrained: 'lg:max-w-7xl sm:max-w-xl max-w-sm' }"
  >
    <div class="flex flex-col items-center justify-center lg:items-start lg:justify-start">
      <CommonBrandText
        prefix="Using various"
        label="<technology/>"
        suffix="to build good product"
        class="text-center text-2xl font-bold sm:text-4xl lg:text-start"
      ></CommonBrandText>
      <p class="my-4 text-center text-sm sm:text-2xl lg:text-start">
        Harnessing the power of diverse technologies to create exceptional products that solve
        problems and delight users.
      </p>
      <UButton
        label="Join with us"
        icon="i-heroicons-arrow-right-16-solid"
        :trailing="true"
        variant="solid"
        size="xl"
        class="rounded-full"
        @click="$router.push('/recruitment')"
      ></UButton>
    </div>
    <div class="grid gap-4 grid-cols-5 sm:gap-5">
      <div v-for="member in memberInfoList" :key="member.id">
        <div class="relative w-full pt-[100%]" :ui="{ body: '' }">
          <UIcon :name="member.logo" class="absolute inset-0 h-full w-full"></UIcon>
        </div>
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
const memberInfoList = ref([
  {
    id: '1',
    logo: 'i-logos-html-5',
  },
  {
    id: '2',
    logo: 'i-logos-css-3',
  },
  {
    id: '3',
    logo: 'i-logos-tailwindcss-icon',
  },
  {
    id: '4',
    logo: 'i-logos-javascript',
  },
  {
    id: '5',
    logo: 'i-logos-typescript-icon',
  },
  {
    id: '6',
    logo: 'i-logos-vue',
  },
  {
    id: '7',
    logo: 'i-logos-nuxt-icon',
  },
  {
    id: '8',
    logo: 'i-logos-react',
  },
  {
    id: '9',
    logo: 'i-logos-nextjs-icon',
  },
  {
    id: '10',
    logo: 'i-logos-pinia',
  },
  {
    id: '11',
    logo: 'i-logos-supabase-icon',
  },
  {
    id: '12',
    logo: 'i-logos-nodejs-icon',
  },
  {
    id: '13',
    logo: 'i-logos-java',
  },
  {
    id: '14',
    logo: 'i-logos-spring-icon',
  },
  {
    id: '15',
    logo: 'i-logos-mysql-icon',
  },
  {
    id: '16',
    logo: 'i-logos-mongodb-icon',
  },
  {
    id: '17',
    logo: 'i-logos-flutter',
  },
  {
    id: '18',
    logo: 'i-logos-android-icon',
  },
  {
    id: '19',
    logo: 'i-logos-yarn',
  },
  {
    id: '20',
    logo: 'i-logos-github-icon',
  },
]);
</script>
