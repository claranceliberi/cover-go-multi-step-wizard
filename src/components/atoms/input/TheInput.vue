<template>
<input v-bind="props" :value="props.modelValue || props.value" @input="emits('update:modelValue',($event.target as HTMLInputElement).value)" class="outline-none" :class="classes">
</template>

<script lang="ts" setup>

    interface IPropsInput {
        type:string,
        value:string,
        placeholder:string,
        modelValue:string | number,
        name:string,
        id:string,
        [key:string]:any,
    }

    type emitsTypes = {
        (e:'update:modelValue',value:string):void,
    }

    const props = withDefaults(defineProps<IPropsInput>(),{
        type:'text',
    });

    const classes={
        'rounded-full h-4 w-4 ': props.type==='radio' || props.type==='checkbox',
        'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500': props.type!=='radio' && props.type!=='checkbox',
    }

    const emits = defineEmits<emitsTypes>();
</script>