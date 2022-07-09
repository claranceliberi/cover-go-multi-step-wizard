<template>
    <h2 v-once v-bind="props">
        <slot></slot>
    </h2>
</template>

<!-- May be this component can be improved , to render multiple diffenrent headers using render function, 
from h1,h2,h3 but for this case, I think it's better to use h2 for this case i dont need much. -->
<script lang="ts" setup>
    interface IProps{
        [key:string]:any,
    }
    const props = withDefaults(defineProps<IProps>(),{});

</script>
