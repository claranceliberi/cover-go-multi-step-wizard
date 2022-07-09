<template>
    <section class="w-[40rem] bg-slate-100 flex flex-col items-center">
        <TheHeader>Summary</TheHeader>
        ${name}
        
        <TheText>Name John</TheText>
        <TheText>Age 50</TheText>
        <TheText>Where Do You Live: Hong Kong</TheText>
        <TheText>Package Standard</TheText>
        <TheText>Premium 500KHD</TheText>
        <TheText>Name John</TheText>
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

</script>

<style scoped>

</style>