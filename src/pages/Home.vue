<template>
    <article class="text-gray-900 flex justify-center flex-wrap mt-20">
        <StartOrganism />
        <FormOrganism />
        <SummaryOrganism />
    </article>
</template>

<script setup lang="ts">
import StartOrganism from '../components/organisms/multi-steps/StartOrganism.vue';
import FormOrganism from '../components/organisms/multi-steps/FormOrganism.vue';
import SummaryOrganism from '../components/organisms/multi-steps/SummaryOrganism.vue';

</script>

<style scoped>

</style>