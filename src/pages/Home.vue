<template>
    <article class="text-gray-900 flex justify-center flex-wrap mt-20">
        <component :is="_component" v-step="'error'" @step="step"></component>
    </article>
</template>

<script setup lang="ts">
import StartOrganism from '../components/organisms/multi-steps/StartOrganism.vue';
import FormOrganism from '../components/organisms/multi-steps/FormOrganism.vue';
import SummaryOrganism from '../components/organisms/multi-steps/SummaryOrganism.vue';
import { ref, computed } from 'vue';
import ErrorOrganism from '../components/organisms/multi-steps/ErrorOrganism.vue';
import {vStep} from '../directives/step'

const current = ref<pageType>('form');

const _component = computed(() => {
    switch (current.value) {
        case 'start':
            return StartOrganism;
        case 'form':
            return FormOrganism;
        case 'summary':
            return SummaryOrganism;
        case 'error':
            return ErrorOrganism;
        default:
            return ErrorOrganism;
    }
});

function step(v: pageType) {
    console.log('stepping v', v);
}

</script>

<style scoped>

</style>