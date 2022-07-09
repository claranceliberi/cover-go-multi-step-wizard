<template>
<select v-bind="props"  @input="emits('update:modelValue',($event.target as HTMLInputElement).value)" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none">
    <option> {{props.placeholder}} </option>
    <option v-for="(opt,i) in props.options" :key="i" :value="opt.value"> {{opt.label}} </option>
</select>
</template>

<script lang="ts" setup>
    interface IPropsSelect {
        type:string,
        placeholder:string,
        name:string,
        id:string,
        options:selectOptionType[],
        [key:string]:any,
    }


    const props = withDefaults(defineProps<IPropsSelect>(),{
        type:'text',
    });

 
</script>