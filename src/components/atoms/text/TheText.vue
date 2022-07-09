<template>
    <p v-once v-bind="props">
        <slot></slot>
    </p>
</template>

<script lang="ts" setup>
    interface IProps{
        [key:string]:any,
    }
    const props = withDefaults(defineProps<IProps>(),{});

</script>
