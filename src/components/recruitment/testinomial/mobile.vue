<template>
    <UContainer>
  <UCard class="px-4 my-10">
    <div class="mb-5">
      <span>{{ testinomial.comment }}</span>
    </div>
    <div class="flex flex-row items-center gap-4">
      <div class="w-10 h-10">
        <NuxtImg
          :src="testinomial.icon"
          class="w-full h-full rounded-full object-fit"
        ></NuxtImg>
      </div>
      <div class="flex flex-col">
        <span class="font-bold">{{ testinomial.userName }}</span>
        <span>{{ testinomial.userRole }}</span>
      </div>
    </div>
  </UCard>
  </UContainer>
</template>
  
  
  <script setup lang="ts">
const testinomial = ref(
  {
    comment:
      "I get to work with super smart and reliable colleagues. Working at Zalo makes me always feel strongly supported to learn, everyone here embrace real-world challenges and be willing to support, to share knowledge and experiences together. Thanks to that, I developed not only my expertise but also my communication skills, time management and problem solving skills.",
    icon: 'https://avatars.githubusercontent.com/u/739984?v=4"',
    userName: "Pham Tien Viet",
    userRole: "Co founder & President",
  },
);
</script>
  
  