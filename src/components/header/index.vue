<script setup lang="ts">
const routes = ref([
  { path: '/members', name: 'Members' },
  { path: '/products', name: 'Products' },
  { path: '/recruitment', name: 'Recruitment' },
  { path: '/event', name: 'Event' },
]);
</script>

<template>
  <div
    class="w-full fixed top-0 bg-white z-50 shadow-md md:px-8 px-4 py-4 text-black"
  >
    <UContainer
      class="flex md:justify-between justify-start gap-4 md:gap-0 items-center"
    >
      <div class="md:hidden">
        <HeaderMobile :routes="routes" />
      </div>
      <HeaderLogo />
      <ul class="md:flex gap-2 text-base leading-5 hidden">
        <li
          v-for="route in routes"
          :key="route.path"
          class="py-2"
          :class="$route.path === route.path ? 'border-b border-primary' : ''"
        >
          <nuxt-link :to="route.path" class="px-1.5 py-2">{{
            route.name
          }}</nuxt-link>
        </li>
      </ul>
      <div class="flex gap-4">
        <CommonSearch size="lg" />
        <UButton
          icon="i-heroicons-globe-asia-australia"
          size="lg"
          class="!rounded-full !border-gray-400 !ring-gray-3 00"
          color="black"
          variant="outline"
          label="Language"
          :trailing="false"
        />

        <UAvatar
          src="https://avatars.githubusercontent.com/u/739984?v=4"
          alt="Avatar"
          size="md"
        />
      </div>
    </UContainer>
  </div>
</template>
