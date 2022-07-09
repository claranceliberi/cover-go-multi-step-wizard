<template>
<input v-bind="props" :value="props.modelValue" @input="emits('update:modelValue',($event.target as HTMLInputElement).value)">
</template>

<script lang="ts" setup>

    type emitsTypes = {
        (e:'update:modelValue',value:string):void,
    }

    const props = withDefaults(defineProps<IPropsInput>(),{
        type:'text',
    });

    const emits = defineEmits<emitsTypes>();
</script>