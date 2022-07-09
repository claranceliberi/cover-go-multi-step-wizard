<template>
    <section class=" w-[40rem] ">
        
            <div class="flex justify-center">
                <div class="w-[20rem]">
                <TheHeader>Tell us about your self</TheHeader>
                <InputMolecule placeholder="John Doe">Name</InputMolecule>
                <InputMolecule placeholder="30" type="number">Age</InputMolecule>
                <RadioMolecule :options="radioOptions" name="option"/>
            </div>

            </div>
           <div class="py-8 px-4 bg-slate-100 flex justify-center">
            <div class="w-[20rem]">
                <p>Your premium is: 500KHD</p>

                <div class="space-x-5">
                    <TheButton variation="outline">Back</TheButton>
                    <TheButton>Next</TheButton>
                </div>
            </div>
           </div>
  
    </section>
</template>

<script setup lang="ts">
import TheHeader from '../../atoms/text/TheHeader.vue';
import InputMolecule from '../../molecules/input/InputMolecule.vue';
import RadioMolecule from '../../molecules/input/RadioMolecule.vue';
import TheButton from '../../atoms/TheButton.vue';

const radioOptions:selectOptionType[] = [
    {value:"Standard",label:"Standard"},
    {value:"Premium",label:"Premium"},

]

</script>

<style scoped>

</style>