<template>
    <input v-bind="{name:props.name,type:props.type,id:props.id,placeholder:props.placeholder}" :value="props.modelValue" @input="input" class="outline-none" :class="classes">
</template>

<script lang="ts" setup>import { computed } from 'vue';


    interface IPropsInput {
        type?:string,
        placeholder?:string,
        modelValue?:string | number,
        name?:string,
        id?:string,
        [key:string]:any,
    }

    type emitsTypes = {
        (e:'update:modelValue',value:string):void,
    }

    const props = withDefaults(defineProps<IPropsInput>(),{
        type:'text',
    });

    const emits = defineEmits<emitsTypes>();


    const classes={
        'rounded-full h-4 w-4 ': props.type==='radio' || props.type==='checkbox',
        'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500': props.type!=='radio' && props.type!=='checkbox',
    }

    function input(e:Event){
        emits('update:modelValue',(e.target as HTMLInputElement).value)
    }

</script>