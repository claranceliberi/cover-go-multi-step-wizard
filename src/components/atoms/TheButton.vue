<template>
    <button  v-once v-bind="props" @click="emits('click',$event)">
        <slot></slot>
    </button>
</template>

<script lang="ts" setup>
    interface IProps{
        type:'button' | 'submit' | 'reset',
        
        [key:string]:any,
    }
    const props = withDefaults(defineProps<IProps>(),{
        type:"button"
    });

    type emitsTypes = {
        (e:'click',event:Event):void,
    }


    const emits = defineEmits<emitsTypes>();
</script>
