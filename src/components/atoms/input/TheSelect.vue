<template>
  <select
    v-bind="{ name: props.name, id: props.id, placeholder: props.placeholder }"
    class="outline-none mt-1 bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:border-[3px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    @input="
      emits('update:modelValue', ($event.target as HTMLInputElement).value)
    "
  >
    <option>{{ props.placeholder }}</option>
    <option
      v-for="(opt, i) in props.options"
      :key="i"
      :selected="i == 0"
      :value="opt.value"
    >
      {{ opt.label }}
    </option>
  </select>
</template>

<script lang="ts" setup>
  interface IPropsSelect {
    placeholder?: string
    modelValue?: string | number
    name?: string
    id?: string
    options?: SelectionType[]
  }

  type emitsTypes = {
    (e: 'update:modelValue', value: string): void
  }

  const props = withDefaults(defineProps<IPropsSelect>(), {
    placeholder: 'Select an option',
  })

  const emits = defineEmits<emitsTypes>()
</script>
