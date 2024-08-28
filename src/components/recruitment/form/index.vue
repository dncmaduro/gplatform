<template>
  <UForm class="mx-4 mt-10 flex w-full max-w-[600px] flex-col gap-8">
    <UFormGroup label="Input" required error="Full name is required">
      <UInput size="xl" color="white" placeholder="Placeholder..." />
    </UFormGroup>

    <UFormGroup label="Dropdown" required color="black">
      <UInputMenu size="xl" placeholder="Options" />
    </UFormGroup>

    <UFormGroup label="Text area" required color="black">
      <UTextarea />
    </UFormGroup>

    <UFormGroup
      label="Upload your CV (PDF format)"
      class="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center"
      :description="(files && files[0].name) || 'Your file name goes here'"
      required
    >
      <UButton
        label="Upload"
        size="xl"
        color="white"
        class="flex w-[268px] justify-center"
        leading-icon="i-heroicons-cloud-arrow-up"
        @click="open()"
      />
    </UFormGroup>

    <div class="flex flex-col gap-2">
      <UCheckbox label="Agree with GPlatform Policy" required />
      <UCheckbox label="Allow GPlatform send email to you" required />
    </div>

    <div class="flex justify-center">
      <UButton type="submit" :ui="{ rounded: 'rounded-full' }" size="xl"
        >Submit your application form</UButton
      >
    </div>
  </UForm>
</template>

<script setup lang="ts">
import { useFileDialog } from '@vueuse/core';

const { files, open } = useFileDialog({
  accept: '.pdf',
  directory: false,
});
</script>
