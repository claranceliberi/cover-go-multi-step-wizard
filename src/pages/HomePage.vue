<template>
  <article class="text-gray-900 flex justify-center flex-wrap mt-20">
    <Transition mode="out-in" appear>
      <component :is="_component" @step="step"></component>
    </Transition>
  </article>
</template>

<script setup lang="ts">
  import StartOrganism from '../components/organisms/multi-steps/StartOrganism.vue'
  import FormOrganism from '../components/organisms/multi-steps/FormOrganism.vue'
  import SummaryOrganism from '../components/organisms/multi-steps/SummaryOrganism.vue'
  import { ref, computed, reactive, provide } from 'vue'
  import ErrorOrganism from '../components/organisms/multi-steps/ErrorOrganism.vue'
  import { key } from '../constants/constants'

  const current = ref<pageType>('form')

  // component renderer
  const _component = computed(() => {
    switch (current.value) {
      case 'start':
        return StartOrganism
      case 'form':
        return FormOrganism
      case 'summary':
        return SummaryOrganism
      case 'error':
        return ErrorOrganism
      default:
        return ErrorOrganism
    }
  })

  const info = reactive<IInformation>({
    name: '',
    age: 0,
    country: '',
    package: 'Standard',
  })

  function updateInfo(_info: IInformation) {
    info.name = _info.name
    info.age = _info.age
    info.country = _info.country
    info.package = _info.package
  }

  // listen to step change and change active screen
  function step(e: CustomEvent<pageType>) {
    if (info.age > 100 && current.value === 'form') {
      current.value = 'error'
      return
    }

    current.value = e.detail
  }

  function updatePremium(premium: string) {
    info.premium = premium
  }

  // pass data to other components
  provide(key, {
    info,
    updateInfo,
    updatePremium,
  })
</script>

<style scoped>
  /* we will explain what these classes do next! */
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.3s ease-in;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>
