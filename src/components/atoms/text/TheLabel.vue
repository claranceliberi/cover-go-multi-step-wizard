<template>
  <label v-bind="props">
    <slot></slot>
  </label>
</template>

<script lang="ts" setup>
  interface IProps {
    for?: string
  }
  const props = withDefaults(defineProps<IProps>(), {
    for: '',
  })
</script>
