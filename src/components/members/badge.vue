<template>
  <UBadge
    size="lg"
    variant="solid"
    :color="color || 'white'"
    class="mb-6 relative hidden sm:block"
  >
    <span>{{ team }}</span>
    <MembersHighlight :class="color && 'hidden'" />
  </UBadge>
  <UBadge
    size="xs"
    variant="solid"
    :color="color || 'white'"
    class="mb-4 relative sm:hidden"
  >
    <span class="text-[0.5rem]">{{ team }}</span>
    <MembersHighlight :class="color && 'hidden'" />
  </UBadge>
</template>

<script setup lang="ts">
const props = defineProps({
  team: {
    type: String,
    required: true,
  },
})

const color = ref('')

const getColor = () => {
  switch (props.team) {
    case 'Alumni':
      return 'white'
    case 'Technical':
      return 'red'
    case 'Marketing':
      return 'yellow'
    case 'Event':
      return 'green'
    case 'Human Resources':
      return 'blue'
    default:
      return ''
  }
}

onMounted(() => (color.value = getColor()))
</script>
