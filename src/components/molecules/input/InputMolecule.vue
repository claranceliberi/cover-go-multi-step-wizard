<template>
  <div>
    <TheLabel>
      <slot></slot>
    </TheLabel>
    <TheInput
      v-bind="{
        name: props.name,
        type: props.type,
        id: props.id,
        placeholder: props.placeholder,
      }"
      :model-value="props.modelValue"
      @update:model-value="input"
    />
  </div>
</template>

<script lang="ts" setup>
  import TheInput from '../../atoms/input/TheInput.vue'
  import TheLabel from '../../atoms/text/TheLabel.vue'
  interface IPropsInput {
    type?: string
    value?: string
    placeholder?: string
    modelValue?: string | number
    name?: string
    id?: string
  }

  type emitsTypes = {
    (e: 'update:modelValue', value: string): void
  }

  const props = withDefaults(defineProps<IPropsInput>(), {
    type: 'text',
  })

  const emits = defineEmits<emitsTypes>()

  function input($event: string) {
    emits('update:modelValue', $event)
  }
</script>
