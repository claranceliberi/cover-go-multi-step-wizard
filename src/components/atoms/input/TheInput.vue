<template>
  <input
    v-bind="{
      name: props.name,
      type: props.type,
      id: props.id,
      placeholder: props.placeholder,
    }"
    :value="props.modelValue"
    class="outline-none"
    :class="classes"
    @input="input"
  />
</template>

<script lang="ts" setup>
  interface IPropsInput {
    type?: string
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

  const classes = {
    'rounded-full h-4 w-4 ':
      props.type === 'radio' || props.type === 'checkbox',
    'mt-1 bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:border-[3px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ':
      props.type !== 'radio' && props.type !== 'checkbox',
  }

  function input(e: Event) {
    emits('update:modelValue', (e.target as HTMLInputElement).value)
  }
</script>
