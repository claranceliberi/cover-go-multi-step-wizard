<template>
  <section class="w-[40rem]">
    <div class="flex justify-center">
      <div class="w-[20rem] space-y-4 mb-4">
        <TheHeader>Tell us about your self</TheHeader>
        <InputMolecule v-model="data.name" placeholder="John Doe"
          >Name</InputMolecule
        >
        <InputMolecule v-model="data.age" placeholder="30" type="number"
          >Age</InputMolecule
        >
        <SelectMolecule
          v-model="data.country"
          :options="countries"
          placeholder="select country"
          >where do you live</SelectMolecule
        >
      </div>
    </div>
    <div class="py-8 px-4 bg-slate-100 flex justify-center">
      <div class="w-[20rem] space-y-8">
        <RadioMolecule
          v-model="data.package"
          :options="packages"
          name="option"
        />

        <p>Your premium is: {{ ammount(data.package) }} {{ currency }}</p>

        <div class="space-x-5">
          <TheButton v-step="'start'" variation="outline">Back</TheButton>
          <TheButton
            v-step="'summary'"
            :disabled="data.name.length < 1 || data.age < 1"
            >Next</TheButton
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import TheHeader from '../../atoms/text/TheHeader.vue'
  import InputMolecule from '../../molecules/input/InputMolecule.vue'
  import SelectMolecule from '../../molecules/input/SelectMolecule.vue'
  import RadioMolecule from '../../molecules/input/RadioMolecule.vue'
  import TheButton from '../../atoms/TheButton.vue'
  import { vStep } from '../../../directives/step'
  import { reactive, inject, watch, computed } from 'vue'
  import { key } from '../../../constants/constants'

  const discounts: Record<packageType, number> = {
    Standard: 0,
    Safe: 50,
    'Super Safe': 75,
  }

  const rates: Record<currencyType, number> = {
    HKD: 1,
    USD: 2,
    AUD: 3,
  }

  const countries: SelectionType[] = [
    { value: 'Hong Kong', label: 'Hong Kong' },
    { value: 'USA', label: 'USA' },
    { value: 'Australia', label: 'Australia' },
  ]

  // get data injected from parent component
  const injected = inject<ProvideType>(key)

  const data = reactive<IInformation>({
    name: '',
    age: 0,
    country: countries[0].value,
    package: 'Standard',
  })

  const currency = computed<currencyType>(() => {
    switch (data.country) {
      case 'Hong Kong':
        return 'HKD'
      case 'USA':
        return 'USD'
      case 'Australia':
        return 'AUD'
      default:
        return 'HKD'
    }
  })

  // packages with calculated discounts
  const packages = computed<SelectionType<packageType>[]>(() => {
    return [
      { value: 'Standard', label: 'Standard' },
      {
        value: 'Safe',
        label: `Safe (+${
          ammount('Safe') - ammount('Standard') + ' ' + currency.value
        } , ${discounts['Safe']}% )`,
      },
      {
        value: 'Super Safe',
        label: `Super Safe (+${
          ammount('Super Safe') - ammount('Standard') + ' ' + currency.value
        } , ${discounts['Super Safe']}% )`,
      },
    ]
  })

  // function to calculate ammount
  function ammount(_package: packageType): number {
    let amt = data.age * 10
    amt = amt * rates[currency.value] // apply curracy rates
    amt = amt + (discounts[_package] * amt) / 100 // apply discount
    return amt
  }

  // data changes ,  send the updated data to the parent component
  watch(data, () => {
    injected?.updateInfo(data)
  })

  // when age, country or package changes, update the ammount of premium
  watch([() => data.age, () => data.country, () => data.package], () => {
    injected?.updatePremium(ammount(data.package) + ' ' + currency.value)
  })
</script>
