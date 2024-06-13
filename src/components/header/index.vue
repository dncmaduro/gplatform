<script setup lang="ts">
const items = [
  [
    {
      label: 'hello',
      slot: 'account',
      disabled: true,
    },
  ],
  [
    {
      label: 'Sign out',
      icon: 'i-mdi-logout',
    },
  ],
];
</script>

<template>
  <div
    class="w-full fixed top-0 bg-white z-50 shadow-md md:px-8 px-4 py-4 text-black"
  >
    <UContainer
      class="flex md:justify-between justify-start gap-4 md:gap-0 items-center"
    >
      <div class="md:hidden">
        <HeaderMobile />
      </div>
      <HeaderLogo />
      <ul class="md:flex gap-8 text-base leading-5 hidden">
        <li>
          <nuxt-link to="/members">Members</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/products">Products</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/recruitment">Recruitment</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/event">Event</nuxt-link>
        </li>
      </ul>
      <div class="flex gap-4">
        <UInput
          icon="i-heroicons-magnifying-glass-20-solid"
          size="lg"
          class="!rounded-full w-44"
          color="white"
          :trailing="false"
          placeholder="Search..."
          :ui="{ rounded: 'rounded-full' }"
        />
        <UButton
          icon="i-heroicons-globe-asia-australia"
          size="lg"
          class="!rounded-full"
          color="gray"
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
