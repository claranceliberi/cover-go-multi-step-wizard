<template>
    <label v-memo v-bind="props">
        <slot></slot>
    </label>
</template>

<script lang="ts" setup>
    interface IProps{
        for?:string,
        [key:string]:any,
    }
    const props = withDefaults(defineProps<IProps>(),{
        for:'',
    });

</script>
