<template>
    <div>
        <TheLabel>
            <slot></slot>
        </TheLabel>
        <TheSelect v-bind="props" @update:model-value="emits('update:modelValue',e)"/>
    </div>
</template>

<script lang="ts" setup>
import TheSelect from '../../atoms/input/TheSelect.vue';
import TheLabel from '../../atoms/text/TheLabel.vue';


    interface IPropsSelect {
        type:string,
        placeholder:string,
        modelValue:string | number,
        name:string,
        id:string,
        options:selectOptionType[],
        [key:string]:any,
    }

    type emitsTypes = {
        (e:'update:modelValue',value:string):void,
    }

    const props = withDefaults(defineProps<IPropsSelect>(),{
        type:'text',
    });

    const emits = defineEmits<emitsTypes>();
</script>
