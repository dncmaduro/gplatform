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
      <CommonLogo />
      <ul class="flex flex-col gap-8 text-base flex-1 w-full">
        <li
          v-for="route in props.routes"
          :key="route.path"
          class="py-2"
          :class="$route.path === route.path ? 'border-b border-primary' : ''"
        >
          <nuxt-link :to="route.path" class="px-1.5 py-2">{{
            route.name
          }}</nuxt-link>
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
type Props = {
  routes: { path: string; name: string }[];
};

const props = defineProps<Props>();

const isOpen = ref(false);
</script>
