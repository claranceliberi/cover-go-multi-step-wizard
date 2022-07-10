<template>
  <label5 class="capitalize font-medium" v-bind="props">
    <slot></slot>
  </label5>
</template>

<script lang="ts" setup>
  interface IProps {
    for?: string
  }
  const props = withDefaults(defineProps<IProps>(), {
    for: '',
  })
</script>
