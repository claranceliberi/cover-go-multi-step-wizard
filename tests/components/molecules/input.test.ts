import { mount } from '@vue/test-utils'
import InputMoleculeVue from '../../../src/components/molecules/input/InputMolecule.vue'

describe('InputMolecule.vue', () => {
  it('Should should have default value as passed in prop', async () => {
    const data = 'test'
    let wrapper = mount(InputMoleculeVue, {
      props: {
        modelValue: data,
      },
    })

    const input = wrapper.find('input')
    expect(input.element.value).toBe(data)
  })

  it('Should have emit event', async () => {
    const data = 'test'
    let wrapper = mount(InputMoleculeVue)

    const input = wrapper.find('input')
    await input.setValue(data)

    expect((wrapper.emitted('update:modelValue') as string[][])[0][0]).toBe(
      data
    )
  })
})
