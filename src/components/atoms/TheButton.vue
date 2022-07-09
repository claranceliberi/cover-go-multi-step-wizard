<template>
    <button  v-once v-bind="props" @click="emits('click',$event)" class="px-10 py-2  rounded-sm" :class="classes">
        <slot></slot>
    </button>
</template>

<script lang="ts" setup>import { ref } from 'vue';

    interface IProps{
        type:'button' | 'submit' | 'reset',
        variation:'fill' | 'outline'
        fullWidth:boolean,
        
        [key:string]:any,
    }
    const props = withDefaults(defineProps<IProps>(),{
        type:"button",
        fullWidth:false,
        variation:'fill'
    });

    type emitsTypes = {
        (e:'click',event:Event):void,
    }

    const classes =  {
            "w-full":props.fullWidth,
            "bg-slate-900 text-white hover:bg-slate-800":props.variation==='fill',
            "border-2 border-slate-900 text-slate-900 hover:bg-slate-200":props.variation==='outline',
        }
    


    const emits = defineEmits<emitsTypes>();
</script>
