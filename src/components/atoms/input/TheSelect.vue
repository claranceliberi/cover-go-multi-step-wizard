<template>
<select v-bind="props"  @input="emits('update:modelValue',($event.target as HTMLInputElement).value)">
    <option> {{props.placeholder}} </option>
    <option v-for="(opt,i) in props.options" :key="i" :value="opt.value"> {{opt.label}} </option>
</select>
</template>

<script lang="ts" setup>
    type optionType = {
        value:string,
        label:string,
    }

    interface IProps {
        type:string,
        placeholder:string,
        modelValue:string | number,
        name:string,
        id:string,
        options:optionType[],
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