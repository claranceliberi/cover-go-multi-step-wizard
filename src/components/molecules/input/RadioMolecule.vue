<template>
  <div>
    <TheLabel>
      <slot></slot>
    </TheLabel>
    <div
      v-for="(opt, i) in props.options"
      :key="i"
      class="flex items-center space-x-2"
    >
      <TheInput
        v-bind="{
          name: props.name,
          type: props.type,
          id: props.id,
          placeholder: props.placeholder,
        }"
        :id="`${$.uid}-${opt.value}`"
        :checked="i == 0"
        :data-test="opt.value"
        :value="opt.value"
        type="radio"
        @update:model-value="emits('update:modelValue', $event)"
      />
      <TheLabel :for="`${$.uid}-${opt.value}`"> {{ opt.label }} </TheLabel>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import TheInput from '../../atoms/input/TheInput.vue'
  import TheLabel from '../../atoms/text/TheLabel.vue'

  interface IPropsSelect {
    type?: string
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
    type: 'text',
  })

  const emits = defineEmits<emitsTypes>()
</script>
