<template>
    <div>
      <UContainer class="flex flex-row flex-wrap justify-center items-center font-bold">
        <span class="sm:text-6xl text-2xl">Why</span>
        <CommonBrandText
          label="choose"
          class="sm:text-6xl text-2xl text-primary"
        ></CommonBrandText>
        <span class="sm:text-6xl text-2xl">GDSC HANU</span>
      </UContainer>
      <div class="flex flex-wrap max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 gap-y-10 my-10">
        <UContainer
          v-for="(testinomial, index) in testinomials"
          :key="index"
          class="w-full md:w-1/2 xl:w-1/3"
        >
          <UCard class="flex flex-col">
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
      </div>
    </div>
  </template>
  

<script setup lang="ts">
const testinomials = ref([
  {
    comment:
      "I get to work with super smart and reliable colleagues. Working at Zalo makes me always feel strongly supported to learn, everyone here embrace real-world challenges and be willing to support, to share knowledge and experiences together. Thanks to that, I developed not only my expertise but also my communication skills, time management and problem solving skills.",
    icon: 'https://avatars.githubusercontent.com/u/739984?v=4"',
    userName: "Pham Tien Viet",
    userRole: "Co founder & President",
  },
  {
    comment:
      "I get to work with super smart and reliable colleagues. Working at Zalo makes me always feel strongly supported to learn, everyone here embrace real-world challenges and be willing to support, to share knowledge and experiences together. Thanks to that, I developed not only my expertise but also my communication skills, time management and problem solving skills.",
    icon: 'https://avatars.githubusercontent.com/u/739984?v=4"',
    userName: "Pham Tien Viet",
    userRole: "Co founder & President",
  },
  {
    comment:
      "I get to work with super smart and reliable colleagues. Working at Zalo makes me always feel strongly supported to learn, everyone here embrace real-world challenges and be willing to support, to share knowledge and experiences together. Thanks to that, I developed not only my expertise but also my communication skills, time management and problem solving skills.",
    icon: 'https://avatars.githubusercontent.com/u/739984?v=4"',
    userName: "Pham Tien Viet",
    userRole: "Co founder & President",
  },
  {
    comment:
      "I get to work with super smart and reliable colleagues. Working at Zalo makes me always feel strongly supported to learn, everyone here embrace real-world challenges and be willing to support, to share knowledge and experiences together. Thanks to that, I developed not only my expertise but also my communication skills, time management and problem solving skills.",
    icon: 'https://avatars.githubusercontent.com/u/739984?v=4"',
    userName: "Pham Tien Viet",
    userRole: "Co founder & President",
  },
  {
    comment:
      "I get to work with super smart and reliable colleagues. Working at Zalo makes me always feel strongly supported to learn, everyone here embrace real-world challenges and be willing to support, to share knowledge and experiences together. Thanks to that, I developed not only my expertise but also my communication skills, time management and problem solving skills.",
    icon: 'https://avatars.githubusercontent.com/u/739984?v=4"',
    userName: "Pham Tien Viet",
    userRole: "Co founder & President",
  },
  {
    comment:
      "I get to work with super smart and reliable colleagues. Working at Zalo makes me always feel strongly supported to learn, everyone here embrace real-world challenges and be willing to support, to share knowledge and experiences together. Thanks to that, I developed not only my expertise but also my communication skills, time management and problem solving skills.",
    icon: 'https://avatars.githubusercontent.com/u/739984?v=4"',
    userName: "Pham Tien Viet",
    userRole: "Co founder & President",
  },
]);
</script>