<template>
  <div>
    <UContainer
      class="flex flex-row flex-wrap justify-center items-center font-bold"
    >
      <span class="md:text-6xl text-2xl">Why</span>
      <CommonBrandText
        label="choose"
        class="md:text-6xl text-2xl text-primary"
      ></CommonBrandText>
      <span class="md:text-6xl text-2xl">GDSC HANU</span>
    </UContainer>
    <UContainer
      class="flex flex-wrap justify-center items-center gap-10 my-10"
    >
    
      <div
        v-for="(testimonial, index) in testimonials"
        :key="index"
        class="md:w-[40%] xl:w-[30%]"
      >
        <UCard class="flex flex-col">
          <div class="mb-5">
            <span class="leading-6">{{ testimonial.comment }}</span>
          </div>
          <div class="flex flex-row items-center gap-4">
            <div class="w-10 h-10">
              <NuxtImg
                :src="testimonial.icon"
                class="w-full h-full rounded-full object-fit"
              ></NuxtImg>
            </div>
            <div class="flex flex-col">
              <span class="font-bold text-xl">{{ testimonial.userName }}</span>
              <span class="text-xs">{{ testimonial.userRole }}</span>
            </div>
          </div>
        </UCard>
      </div>
    </UContainer>
  </div>
</template>


<script setup lang="ts">
import type { Testimonial } from '~/types/recruitment/testimonial'

const testimonials = ref<Testimonial[]>([
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

const windowWidth = ref(0);
const copyTestimonials = [...testimonials.value];

const handleResize = () => {
  windowWidth.value = window.innerWidth;
  if(windowWidth.value < 768){
    return testimonials.value = testimonials.value.slice(0,1);
  }
   return testimonials.value = copyTestimonials;
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
  handleResize(); 
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

</script>

