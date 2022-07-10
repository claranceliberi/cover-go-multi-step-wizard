<template>
    <section class=" w-[40rem] ">
        
            <div class="flex justify-center">
                <div class="w-[20rem]">
                <TheHeader>Tell us about your self</TheHeader>
                <InputMolecule v-model="data.name" placeholder="John Doe">Name</InputMolecule>
                <InputMolecule  v-model="data.age" placeholder="30" type="number">Age</InputMolecule>
                <SelectMolecule v-model="data.country" placeholder="select country" :options="radioOptions">where do you live</SelectMolecule>
                <RadioMolecule  v-model="data.package" :options="radioOptions" name="option"/>
            </div>

            </div>
           <div class="py-8 px-4 bg-slate-100 flex justify-center">
            <div class="w-[20rem]">
                <p>Your premium is: 500KHD</p>

                <div class="space-x-5">
                    <TheButton v-step="'start'" variation="outline">Back</TheButton>
                    <TheButton v-step="'summary'">Next</TheButton>
                </div>
            </div>
           </div>
  
    </section>
</template>

<script setup lang="ts">
import TheHeader from '../../atoms/text/TheHeader.vue';
import InputMolecule from '../../molecules/input/InputMolecule.vue';
import SelectMolecule from '../../molecules/input/SelectMolecule.vue';
import RadioMolecule from '../../molecules/input/RadioMolecule.vue';
import TheButton from '../../atoms/TheButton.vue';
import {vStep} from '../../../directives/step'
import { reactive,inject, watch, ref } from 'vue';
import {key} from '../../../constants/constants'

// get data injected from parent component
const injected = inject<ProvideType>(key)

    const sample = ref('')

const data = reactive<IInformation>({
    name:'',
    age:0,
    country:'',
    package:'',

})

const radioOptions:selectOptionType[] = [
    {value:"Standard",label:"Standard"},
    {value:"Premium",label:"Premium"},
]

// data changes ,  send the updated data to the parent component
watch(data,()=>{
    injected?.updateInfo(data)
})


</script>

<style scoped>

</style>