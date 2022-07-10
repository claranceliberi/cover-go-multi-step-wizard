<template>
    <div>
        <TheLabel>
            <slot></slot>
        </TheLabel>
        <TheSelect v-bind="{name:props.name,type:props.type,id:props.id,placeholder:props.placeholder}" :options="props.options" @update:model-value="emits('update:modelValue',$event)"/>
    </div>
</template>

<script lang="ts" setup>
import TheSelect from '../../atoms/input/TheSelect.vue';
import TheLabel from '../../atoms/text/TheLabel.vue';


    interface IPropsSelect {
        placeholder?:string,
        modelValue?:string | number,
        name?:string,
        id?:string,
        options?:selectOptionType[],
        [key:string]:any,
    }

    type emitsTypes = {
        (e:'update:modelValue',value:string):void,
    }

    const props = withDefaults(defineProps<IPropsSelect>(),{
        placeholder:'Select an option',
    });

    const emits = defineEmits<emitsTypes>();
</script>
