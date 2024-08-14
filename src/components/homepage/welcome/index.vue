<template>
    <UContainer class="flex lg:flex-row flex-col justify-center items-center lg:gap-16 gap-8 mb-16" :ui="{constrained: 'lg:max-w-7xl max-w-3xl'}">
        <div class="w-full sm:max-w-64 max-w-36">
            <NuxtImg src="/leader.png" alt="leader_img" class="w-full h-full object-contain rounded-full">
            </NuxtImg>
        </div>
        <div class="flex flex-col gap-4 basis-3/5 lg:text-start text-center">
            <h2 class="font-bold sm:text-3xl text-xl">We are University based community groups for students interested in Technology</h2>
            <div>
                <CommonBrandText prefix="Our goal is to create" label="<impact/>" color="primary" class="sm:text-xl text-base"></CommonBrandText>
                <CommonBrandText prefix="Impact students and" label="<empower/>" suffix="them to impact their communities through" color="green-500" class="sm:text-xl text-base inline"></CommonBrandText>
                <CommonBrandText label="<technology/>" color="red-500" class="sm:text-xl text-base inline"></CommonBrandText>
            </div>
            <div class="flex flex-col">
            <h2 class="sm:text-2xl text-lg font-bold">Pham Tien Viet</h2>
            <p class="lg:text-sm text-xs">Co founder & GDSC Lead</p>
            </div>
        </div>
    </UContainer>
</template>