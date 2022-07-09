<template>
<input v-bind="props" :value="props.modelValue" @input="emits('update:modelValue',($event.target as HTMLInputElement).value)">
</template>

<script lang="ts" setup>

    interface IProps {
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

    const props = withDefaults(defineProps<IProps>(),{
        type:'text',
    });

    const emits = defineEmits<emitsTypes>();
</script>