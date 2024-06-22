<template>
  <main class="flex flex-col justify-center items-center min-h-screen">
    <Header />
    <section class="flex flex-col md:gap-16 flex-auto w-full mt-[72px]">
      <slot />
    </section>
    <Footer />
  </main>
</template>
