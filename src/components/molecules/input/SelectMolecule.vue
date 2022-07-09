<template>
    <div>
        <TheLabel> {{props.label}} </TheLabel>
        <TheSelect v-bind="props" @update:model-value="emits('update:modelValue',e)"/>
    </div>
</template>

<script lang="ts" setup>
import TheSelect from '../../atoms/input/TheSelect.vue';
import TheLabel from '../../atoms/text/TheLabel.vue';

    interface IProps extends IPropsSelect {
        label:string,
    }

     type emitsTypes = {
        (e:'update:modelValue',value:string):void,
    }

    const props = withDefaults(defineProps<IProps>(),{
        type:'text',
    });

    const emits = defineEmits<emitsTypes>();
</script>
