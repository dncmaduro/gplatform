<template>
  <UButton
    icon="i-heroicons-bars-3-center-left"
    size="sm"
    color="primary"
    variant="solid"
    @click="isOpen = true"
  />

  <USlideover v-model="isOpen" side="left">
    <div class="p-4 flex flex-1 flex-col gap-8 items-center justify-center">
      <HeaderLogo />
      <ul class="flex flex-col gap-8 text-base flex-1 w-full">
        <li>
          <nuxt-link to="/find-college">Members</nuxt-link>
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
      <div class="md:gap-4 gap-2 flex flex-col w-full">
        <UButton
          class="w-full items-center justify-center"
          label="Sign in"
          color="blue"
          variant="solid"
          size="xl"
        />
      </div>
    </div>
  </USlideover>
</template>

<script setup lang="ts">
const isOpen = ref(false);
</script>
