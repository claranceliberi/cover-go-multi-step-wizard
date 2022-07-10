<template>
    <article class="text-gray-900 flex justify-center flex-wrap mt-20">
        <component :is="_component" @step="step"></component>
    </article>
</template>

<script setup lang="ts">
import StartOrganism from '../components/organisms/multi-steps/StartOrganism.vue';
import FormOrganism from '../components/organisms/multi-steps/FormOrganism.vue';
import SummaryOrganism from '../components/organisms/multi-steps/SummaryOrganism.vue';
import { ref, computed,reactive,provide } from 'vue';
import ErrorOrganism from '../components/organisms/multi-steps/ErrorOrganism.vue';
import {key} from '../constants/constants'

const current = ref<pageType>('form');

// component renderer
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

const info = reactive<IInformation>({
    name:'',
    age:0,
    country:'',
    package:'',

})

function updateInfo(_info:IInformation){
    console.log(_info)
    info.name = _info.name;
    info.age = _info.age;
    info.country = _info.country;
    info.package = _info.package;
}

// listen to step change and change active screen
function step(e: CustomEvent<pageType>) {
    current.value = e.detail;
}

// pass data to other components
provide(key,{
    info,
    updateInfo
})

</script>

<style scoped>

</style>