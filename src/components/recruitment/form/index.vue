<template>
  <UForm class="flex flex-col gap-8 mt-10 w-full max-w-[600px] mx-4">
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
      class="flex flex-col md:flex-row justify-between items-start gap-2 md:items-center"
      description="Your file name goes here"
      required
    >
      <UInput
        type="file"
        size="xl"
        class="w-full md:w-[268px]"
        icon="i-heroicons-cloud-arrow-up"
      ></UInput>
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

<script setup lang="ts"></script>
