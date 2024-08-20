<template>
  <UContainer>
    hello
    <MembersDetailCard
      name="Pham Tien Viet"
      image-link="/membercard-example.png"
      position="Co-founded & President"
      team="Board of Leader"
      :activites="activities"
      :socials="socials"
    />
  </UContainer>
</template>

<script setup lang="ts">
const activities = ref([
  {
    duration: 'Aug 2023 - Present',
    position: 'Co-founder & President',
  },
  {
    duration: 'Aug 2022 - Aug 2023',
    position: 'Co-founder & President',
  },
  {
    duration: 'Aug 2021 - Aug 2022',
    position: 'Co-founder & Vice President',
  },
]);

const socials = ref({
  github: 'github.com',
  linkedin: 'linkedin.com',
  email: 'email.com',
  instagram: 'instagram.com',
});
</script>
