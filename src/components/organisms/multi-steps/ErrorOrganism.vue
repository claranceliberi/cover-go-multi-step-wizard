<template>
  <section
    class="bg-slate-100 w-[40rem] flex space-y-4 py-8 px-4 rounded-md flex-col items-center"
  >
    <TheHeader>Ooops!</TheHeader>
    <TheText> Your age is over our accepted limit </TheText>
    <TheText> We are sorry but we can not insure you now </TheText>
    <TheButton v-step="'start'"> Ok :( </TheButton>
  </section>
</template>

<script setup lang="ts">
  import TheHeader from '../../atoms/text/TheHeader.vue'
  import TheText from '../../atoms/text/TheText.vue'
  import TheButton from '../../atoms/TheButton.vue'
  import { vStep } from '../../../directives/step'
</script>
