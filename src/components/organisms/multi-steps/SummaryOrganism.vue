<template>
    <section class="w-[40rem] bg-slate-100 flex flex-col items-center">
        <TheHeader>Summary</TheHeader>
        
        <h3>{{injected?.info.name}}</h3>
        
        <TheText>Name :  {{injected?.info.name}}</TheText>
        <TheText>Age : {{injected?.info.age}}</TheText>
        <TheText>Where Do You Live : {{injected?.info.country}} </TheText>
        <TheText>Package Standard :  {{injected?.info.package}}</TheText>
        <TheText>Premium : {{injected?.info.premium}}</TheText>

        <div class="space-x-5">
            <TheButton variation="outline" v-step="'form'">Back</TheButton>
            <TheButton v-step="'start'">Buy</TheButton>
        </div>
    </section>
</template>

<script setup lang="ts">
import TheHeader from '../../atoms/text/TheHeader.vue';
import TheText from '../../atoms/text/TheText.vue';
import TheButton from '../../atoms/TheButton.vue';
import {vStep} from '../../../directives/step'
import {key} from '../../../constants/constants'
import { inject } from 'vue';

// inject the shared data from parent component
const injected = inject<ProvideType>(key)
</script>

<style scoped>

</style>