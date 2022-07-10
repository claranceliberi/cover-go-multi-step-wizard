<template>
  <section
    class="w-[30rem] bg-slate-100 flex flex-col px-10 py-6 space-y-3 rounded-sm"
  >
    <TheHeader class="pb-6">Summary</TheHeader>

    <hr />

    <h3 class="font-semibold text-lg">
      {{ injected?.info.name }}
    </h3>

    <div class="flex">
      <TheText class="flex-1">
        <span class="font-medium text-slate-700">Name :</span>
        {{ injected?.info.name }}</TheText
      >
      <TheText class="flex-1 text-slate-700">
        <span class="font-medium">Age :</span>
        {{ injected?.info.age }}</TheText
      >
    </div>

    <TheText>
      <span class="font-medium text-slate-700">Package :</span>
      <span
        class="ml-4 px-4 py-1 text-white rounded-md uppercase text-xs"
        :class="classes"
        >{{ injected?.info.package }}</span
      >
    </TheText>
    <div class="flex">
      <TheText class="flex-1">
        <div class="flex py-2">
          <span class="pr-4">
            <svg
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m18.157 16.882-1.187 1.174c-.875.858-2.01 1.962-3.406 3.312a2.25 2.25 0 0 1-3.128 0l-3.491-3.396c-.439-.431-.806-.794-1.102-1.09a8.707 8.707 0 1 1 12.314 0ZM14.5 11a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"
                class="fill-slate-700"
              />
            </svg>
          </span>
          <span>
            {{ injected?.info.country }}
          </span>
        </div>
      </TheText>
      <TheText class="flex-1">
        <div class="flex py-2">
          <span class="pr-4">
            <svg
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="fill-slate-700"
                d="M2 6.75C2 5.784 2.784 5 3.75 5h13.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 17.25 17H3.75A1.75 1.75 0 0 1 2 15.25v-8.5Zm3-.5v1a.75.75 0 0 1-.75.75h-1v1.5h1A2.25 2.25 0 0 0 6.5 7.25v-1H5Zm5.5 7.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Zm-7.25.5h1a.75.75 0 0 1 .75.75v1h1.5v-1a2.25 2.25 0 0 0-2.25-2.25h-1V14Zm12.75.75a.75.75 0 0 1 .75-.75h1v-1.5h-1a2.25 2.25 0 0 0-2.25 2.25v1H16v-1Zm0-7.5v-1h-1.5v1a2.25 2.25 0 0 0 2.25 2.25h1V8h-1a.75.75 0 0 1-.75-.75Z"
              />
              <path
                d="M4.401 18.5A2.999 2.999 0 0 0 7 20h10.25A4.75 4.75 0 0 0 22 15.25V10c0-1.11-.603-2.08-1.5-2.599v7.849a3.25 3.25 0 0 1-3.25 3.25H4.401Z"
                class="fill-slate-700"
              />
            </svg>
          </span>
          <span>{{ injected?.info.premium }}</span>
        </div>
      </TheText>
    </div>

    <hr />

    <div class="space-x-5 flex justify-end">
      <TheButton v-step="'form'" variation="outline">Back</TheButton>
      <TheButton v-step="'start'">Buy</TheButton>
    </div>
  </section>
</template>

<script setup lang="ts">
  import TheHeader from '../../atoms/text/TheHeader.vue'
  import TheText from '../../atoms/text/TheText.vue'
  import TheButton from '../../atoms/TheButton.vue'
  import { vStep } from '../../../directives/step'
  import { key } from '../../../constants/constants'
  import { inject } from 'vue'

  // inject the shared data from parent component
  const injected = inject<ProvideType>(key)

  const classes = {
    'bg-slate-600': injected?.info.package == 'Standard',
    'bg-cyan-600': injected?.info.package == 'Safe',
    'bg-teal-600': injected?.info.package == 'Super Safe',
  }
</script>

<style scoped></style>
